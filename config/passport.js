import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { User } from "../models/user.js";
import { USER_ROLES } from "../utils/constants.js";

const configurePassport = () => {
    passport.use(
        new GitHubStrategy(
            {
                clientID: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                callbackURL: process.env.GITHUB_CALLBACK_URL
            },
            async(accessToken, refreshToken, profile, done) => {
                try {
                    const githubId = profile.id;
                    const username = profile.username;
                    const displayName = profile.displayName;
                    const avatar = profile.photos?.[0]?.value;
                    const emailResponse = await fetch(
                        "https://api.github.com/user/emails",
                        {
                            headers: {
                                Authorization: `Bearer ${accessToken}`,
                                Accept: "application/vnd.github+json"
                            }
                        }
                    );

                    const emails = await emailResponse.json();

                    const primaryEmail = emails.find(
                        email => email.primary && email.verified
                    );

                    if (!primaryEmail) {
                        return done(
                            new Error("No verified primary GitHub email found."),
                            null
                        );
                    }

                    const email = primaryEmail.email;


                    let user = await User.findOne({
                        githubId: githubId
                    });
                    if (!user) {
                        user = await User.create({
                            githubId: githubId,
                            username: username,
                            displayName: displayName,
                            email: email,
                            avatar: avatar,
                            role: USER_ROLES.STAFF
                        });
                    } else {
                        user.username = username;
                        user.displayName = displayName;
                        user.email = email;
                        user.avatar = avatar;
                        await user.save();
                    }
                    done(null, user);
                } catch (error) {
                    done(error, null);
                }
            }
        )
    )
};




export { configurePassport };
import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import 'dotenv/config';
import { User } from "../models/user.js";
import { USER_ROLES } from "../utils/constants.js";

const configurePassport = () => {
    passport.use(
        new GitHubStrategy(
            {
                clientID: process.env.CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                callbackURL: process.env.GITHU_CALLBACK_URL
            },
            async(accessToken, refreshToken, profile, done) => {
                try {
                    const githubId = profile.id;
                    const username = profile.username;
                    const displayName = profile.displayName;
                    const email = profile.emails?.[0]?.value;
                    const avatar = profile.photos?.[0]?.value;

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
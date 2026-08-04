const toTitleCase = (text) => {
    if (!text) return text;

    return text
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .split(" ")
        .map(
            word => word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ");
};

export { toTitleCase };
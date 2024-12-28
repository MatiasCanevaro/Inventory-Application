const db = require("../db/queries");

exports.get = async (req, res) => {
    try {
        const categories = await db.getAll("category");
        res.render("home", {
            title: "Home",
            categories: categories
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("An error occurred while fetching categories.");
    }
};
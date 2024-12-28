const db = require("../db/queries");

exports.getAllCategoryItems = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const category = await db.getById("category",categoryId);
        const items = await db.getAllByValue("item","category_id",categoryId);
        res.render("items", {
            title: "Items",
            category: category,
            items: items
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
        res.status(500).send("An error occurred while fetching categories.");
    }
};
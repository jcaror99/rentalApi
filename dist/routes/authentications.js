import { Router } from "express";
const authentications = Router();
authentications.post("/", async (req, res) => {
    try {
        const { name, password } = req.body;
    }
    catch (error) {
        res.status(401).send("Invalid credentials");
    }
});
export default authentications;

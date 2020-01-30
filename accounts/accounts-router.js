const express = require("express");

const db = require("../data/dbConfig.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const accounts = await db("accounts");
    console.log(accounts);
    res.status(200).json({ message: "Accounts retrieved", accounts });
  } catch (err) {
    res.status(500).json({ message: "Can not /GET Accounts" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const account = await db("accounts").where("id", id);
    res.json(account);
  } catch (err) {
    res.status(500).json({ message: "Failed to get post" });
  }
});

router.post("/", async (req, res) => {
  const postAccount = req.body;
  try {
    const account = await db("accounts").insert(postAccount);
    res.status(201).json({ message: "Added account", account });
  } catch (err) {
    res.status(500).json({ message: "Failed to post account" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const rowsUpdated = await db("accounts")
      .where({ id })
      .update(req.body);
    res.status(200).json({ update: rowsUpdated });
  } catch (err) {
    res.status(500).json({ message: "Failed to update account" });
  }
});

module.exports = router;

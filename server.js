const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Zero-Knowledge Proof Credential Verifier Backend is Running!");
});

app.get("/status", (req, res) => {
    res.json({
        status: "online",
        project: "ZKP Credential Verifier"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
const express = require("express");
const axios = require("axios");
const app = express();

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get("http://apis.data.go.kr/1360000/EqkInfoService/getEqkMsg", {
      params: req.query
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3001, () => console.log("Proxy server running on port 3001"));

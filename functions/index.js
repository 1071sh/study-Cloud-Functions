const functions = require("firebase-functions");
const express = require("express");
const requestPromise = require("request-promise-native");
const cors = require("cors");

const app = express();
app.use(cors());

// 関数設定
const getQiita = async (keyword) => {
    const requestUrl = "https://qiita.com/api/v2/items?page=1&per_page=10&query=";
    const result = await requestPromise(`${requestUrl}${keyword}`);
    return result;
};

// エンドポイント追加
app.get("/qiita/:keyword", async (req, res) => {
    const response = await getQiita(req.params.keyword);
    res.send(response);
});

const api = functions.https.onRequest(app);
module.exports = { api };

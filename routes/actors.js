const express = require("express");
const actors = express.Router();
const {
  getAllActors,
  getActorById,
  getActorByFirstName,
} = require("../queries.js");

actors.get("/actors", (req, res) => {
  getAllActors((err, actors) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Gagal Query: " + err.message });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Pengambilan data aktor berhasil",
        data: actors,
      });
  });
});

actors.get("/actors/:id", (req, res) => {
  const actorId = req.params.id;

  getActorById(actorId, (err, actor) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Gagal Query: " + err.message });
    }
    if (!actor) {
      return res
        .status(404)
        .json({ success: false, message: "Aktor tidak ditemukan" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Pengambilan data aktor berhasil",
        data: actor,
      });
  });
});

actors.get("/actors/firstName/:firstName", (req, res) => {
  const firstName = req.params.firstName;

  getActorByFirstName(firstName, (err, actor) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Gagal Query: " + err.message });
    }
    if (!actor) {
      return res
        .status(404)
        .json({ success: false, message: "Aktor tidak ditemukan" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Pengambilan data aktor berhasil",
        data: actor,
      });
  });
});

module.exports = actors;

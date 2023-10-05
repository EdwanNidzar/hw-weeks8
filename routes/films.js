const express = require("express");
const films = express.Router();
const {
  getAllFilms,
  getFilmById,
  getAllCategories,
  getFilmsByCategory,
} = require("../queries.js");

films.get("/films", (req, res) => {
  getAllFilms((err, films) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Gagal Query: " + err.message });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Pengambilan data film berhasil",
        data: films,
      });
  });
});

films.get("/films/:id", (req, res) => {
  const filmId = req.params.id;

  getFilmById(filmId, (err, film) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Gagal Query: " + err.message });
    }
    if (!film) {
      return res
        .status(404)
        .json({ success: false, message: "Film tidak ditemukan" });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Pengambilan data film berhasil",
        data: film,
      });
  });
});

films.get("/categories", (req, res) => {
  getAllCategories((err, categories) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Gagal Query: " + err.message });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Pengambilan data kategori berhasil",
        data: categories,
      });
  });
});

films.get("/films/category/:categoryId", (req, res) => {
  const categoryId = req.params.categoryId;

  getFilmsByCategory(categoryId, (err, films) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Gagal Query: " + err.message });
    }
    res
      .status(200)
      .json({
        success: true,
        message: "Pengambilan data film berdasarkan kategori berhasil",
        data: films,
      });
  });
});

module.exports = films;

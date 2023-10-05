const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "postgres",
  database: "dvdrental",
  port: 5432,
});

const getAllActors = (callback) => {
  pool.query("SELECT * FROM actor", (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result.rows);
  });
};

const getActorById = (id, callback) => {
  pool.query("SELECT * FROM actor WHERE actor_id = $1", [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result.rows[0]);
  });
};

const getActorByFirstName = (first_name, callback) => {
  pool.query(
    "SELECT * FROM actor WHERE first_name = $1",
    [first_name],
    (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result.rows[0]);
    }
  );
};

const getAllFilms = (callback) => {
  pool.query("SELECT * FROM film", (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result.rows);
  });
};

const getFilmById = (id, callback) => {
  pool.query("SELECT * FROM film WHERE film_id = $1", [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result.rows[0]);
  });
};

const getAllCategories = (callback) => {
  pool.query("SELECT * FROM category", (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result.rows);
  });
};

const getFilmsByCategory = (categoryId, callback) => {
  pool.query(
    "SELECT film.* FROM film JOIN film_category ON film.film_id = film_category.film_id WHERE film_category.category_id = $1",
    [categoryId],
    (err, result) => {
      if (err) {
        return callback(err, null);
      }
      return callback(null, result.rows);
    }
  );
};

module.exports = {
  getAllActors,
  getActorById,
  getAllFilms,
  getFilmById,
  getAllCategories,
  getFilmsByCategory,
  pool,
  getActorByFirstName,
};

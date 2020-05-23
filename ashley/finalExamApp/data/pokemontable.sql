DROP TABLE IF EXISTS pokemontable;

CREATE TABLE pokemontable (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  image_url VARCHAR(255),
  description TEXT,
  pokeball VARCHAR(255)
)
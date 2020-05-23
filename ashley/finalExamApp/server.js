'use strict';

// packages / dependencies
const express = require('express');
const superagent = require('superagent');
require('dotenv').config();
const pg = require('pg');
const methodOverride = require('method-override');

const Nightmare = require('nightmare');
const chai = require('chai');
const expect = chai.expect;
// check on mocha, start-server-and-test

//global variables / app setup
const app = express();
const PORT = process.env.PORT || 3002;

//configs
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.set('view engine', 'ejs'); // render === build a page in express
app.use(methodOverride('_overrideMethod')); // method override set up

//pg set up
const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', console.error);
client.connect();

//routes
app.get('/', getPokemon);
app.post('/add', savePokemon);
app.get('/add/:id', getFavorites);
app.get('/favorites', getFavorites);

// start the app
app.listen(PORT, () => console.log(`app is up on port :  ${PORT}`));

//constructor
function Pokemon(obj) {
  this.name = obj.name;
  this.image_url = obj.url;
}

//functions
function getPokemon(req, res) {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const queryForSuper = {
    name: req.query,
  };

  superagent.get(url)
    .query(queryForSuper)
    .then(resultFromSuper => {
      // console.log(resultFromSuper.body);
      const pokemonArr = [];
      resultFromSuper.body.results.forEach(current => {
        pokemonArr.push(new Pokemon(current));
      });
      // for (let i = 0; i < resultFromSuper.body.results.length; i++) {
// TODO: doesn't render through the object properly

      // }

      console.log(resultFromSuper.body.results[0].name);
      res.render('show.ejs', {'pokemonArr': pokemonArr});
    })
    .catch(error => {
      console.log('error from pokemon place ', error);
      res.send('Whoops' + error);
    });
}

function savePokemon(req, res) {
  const saveToDB = 'INSERT INTO pokemontable (name, image_url) VALUES ($1, $2) RETURNING id';
  const pokemonInfo = [req.body.name, req.body.image_url];
  client.query(saveToDB, pokemonInfo)
    .then(resultFromSql => {
      res.redirect('/add/' + resultFromSql.rows[0].id);
    })
    .catch(error => {
      console.log('error from save to DB ', error);
      res.send('Whoops! error from save to DB' + error);
    });
}

function retrievePokemon(req, res) {
  const id = req.params.id;
  const getOnePokemon = `SELECT * FROM pokemontable WHERE id=${id}`;
  client.query(getOnePokemon)
    .then(resultFromSql => {
      const oneSavedPokemon = resultFromSql.rows[0].name;
      console.log(resultFromSql.rows[0].name);
      res.render('add.ejs', {'oneSavedPokemon': oneSavedPokemon});
    })
    .catch(error => {
      console.log('error from retrieve Pokemon ', error);
      res.send('whoops!' + error);
    });
}

function getFavorites(req, res) {
  const sqlQuery = 'SELECT * FROM pokemontable';
  client.query(sqlQuery)
    .then(resultFromSql => {
      res.render('favorites.ejs', {'pokemonFromDB': resultFromSql.rows});
    })
    .catch(error => {
      console.log('error getting favorites ', error);
    });
}

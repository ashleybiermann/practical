const Nightmare = require('nightmare')
const chai = require('chai')
const expect = chai.expect


describe('Building an Express Server with a Postgres Database', ()=>{
  it('should load all pokemon', function(done) {
    const nightmare = Nightmare({ show: false })
    nightmare
    .wait(500)
    .goto('http://localhost:3002')
    .wait('form')
    .evaluate(() => {
      return document.querySelectorAll('form').length;
    })
    .end()
    .then(formElementCount=>{
      expect(formElementCount).to.equal(20)
      done();
    })
    .catch(error => {
      console.error('page load failed:', error)
      nightmare.end();
    })
  })

  it('should alaphabetize the pokemon that it gets back from the API', function(done){
    const nightmare = Nightmare({ show: false });
    nightmare
    .goto('http://localhost:3002')
    .wait('form')
    .evaluate(() => {
      return document.getElementsByTagName('h2')[3].innerHTML;
    })
    .end()
    .then(pokeName=>{
      expect(pokeName).to.equal('butterfree')
      done();
    })
    .catch(error => {
      console.error('alaphabetize failed:', error)
      nightmare.end();
    })
  });

  it('should redirect back to the results page after you add a pokemon', function(done) {
    const nightmare = Nightmare({ show: false })
    nightmare
    .goto('http://localhost:3002')
    .wait('form')
    .click('form:first-child button')
    .wait('form')
    .evaluate(() => {
      return document.getElementsByTagName('h2')[3].innerHTML;
    })
    .end()
    .then(href=>{
      expect(href).to.equal('http://localhost:3002/')
      done();
    })
    .catch(error => {
      console.error('redirect failed:', error)
      nightmare.end();
    })
  });

  it('should add a pokemon to the favorites page', function(done) {
    const nightmare = Nightmare({ show: false })
    nightmare
    .goto('http://localhost:3002')
    .wait('form')
    .click('form:first-child button')
    .wait('form')
    .goto('http://localhost:3002/favorites')
    .evaluate(() => {
      return document.getElementsByTagName('li')[0].innerHTML;
    })
    .end()
    .then(href=>{
      expect(href).to.equal('beedrill')
      done();
    })
    .catch(error => {
      console.error('add pokemon failed:', error)
      nightmare.end();
    })
  })
})

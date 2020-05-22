'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');

/* ------------------------------------------------------------------------------------------------

Without altering the html, first write a function named makeUniqueList. This function should return an array of only the unique cats from the cats array.

Next, write a function named generateDropDown. This function needs to use jQuery to create a select form element with options for each UNIQUE cat from the array of cats, and append it to the DOM. 
------------------------------------------------------------------------------------------------ */
$ = createSnippetWithJQuery(`
<section>
  <form>
    <legend>Which is the best cat?</legend>
  </form>
</section>
`);

const cats = ['grumpy cat', 'hello kitty', 'garfield', 'cheshire cat', 'lil bub', 'garfield', 'hello kitty', 'grumpy cat', 'garfield', 'cheshire cat', 'grumpy cat', 'hello kitty', 'lil bub', 'lil bub', 'tigger', 'cheshire cat'];

const generateDropDown = () => {
// Solution code here ...
}

const makeUniqueList = () => {
// Solution code here ...
}

describe('Testing challenge', () => {
  test('It should return a unique array of cats', () => {
    expect(makeUniqueList().length).toStrictEqual(6);
  })

  test('It should generate a drop down list of cats and append it to the DOM', () => {
    generateDropDown();
    expect($('option:first-child').text()).toStrictEqual('grumpy cat');
    expect($('option:nth-child(2)').text()).toStrictEqual('hello kitty');
    expect($('option:nth-child(3)').text()).toStrictEqual('garfield');
    expect($('option:nth-child(4)').text()).toStrictEqual('cheshire cat');
    expect($('option:nth-child(5)').text()).toStrictEqual('lil bub');
  })
});

function createSnippetWithJQuery(html){
  return cheerio.load(html);
};
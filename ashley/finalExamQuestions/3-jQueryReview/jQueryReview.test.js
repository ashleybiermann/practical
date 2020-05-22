'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');
/* ------------------------------------------------------------------------------------------------

Write a function named changeAllClassNames that uses jQuery to select all each li and add a class of "fruit";

------------------------------------------------------------------------------------------------ */
const $ = createSnippetWithJQuery(`
<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li>Pear</li>
</ul>
`);

const changeAllClassNames = () => {
// Solution code here ...
}

describe('Testing challenge', () => {
  test('It should add a class of fruit to all the list items', () => {
    changeAllClassNames();

    expect($('li.apple').hasClass('fruit')).toBe(true);
    expect($('li.orange').hasClass('fruit')).toBe(true);
  })
});

function createSnippetWithJQuery(html){
  return cheerio.load(html);
};


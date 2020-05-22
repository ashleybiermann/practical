'use strict';

// to learn more about the cheerio library and what it is doing, look at their documentation: https://www.npmjs.com/package/cheerio
const cheerio = require('cheerio');
const Mustache = require('mustache');

/* ------------------------------------------------------------------------------------------------

The pokimon object is the result of making an API call to the PokiApi. 

Write a function called templateWithMustache that, runs the pokimon object through a constructor function and returns the markup needed to template each pokimon object to the DOM. To accomplish this you will need the following functions:

1. Poki constructor function - this function will take the results of the API and make sure that they are all in the correct format.

2. templateWithMustache - This function will be in charge. It will call the getApiInformation function to get the API information, then append the results to the DOM using Mustache.

------------------------------------------------------------------------------------------------ */
let pokimon = {
  "count": 964,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  "previous": null,
  "results": [
      {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
          "name": "ivysaur",
          "url": "https://pokeapi.co/api/v2/pokemon/2/"
      },
      {
          "name": "venusaur",
          "url": "https://pokeapi.co/api/v2/pokemon/3/"
      },
      {
          "name": "charmander",
          "url": "https://pokeapi.co/api/v2/pokemon/4/"
      },
      {
          "name": "charmeleon",
          "url": "https://pokeapi.co/api/v2/pokemon/5/"
      },
      {
          "name": "charizard",
          "url": "https://pokeapi.co/api/v2/pokemon/6/"
      },
      {
          "name": "squirtle",
          "url": "https://pokeapi.co/api/v2/pokemon/7/"
      },
      {
          "name": "wartortle",
          "url": "https://pokeapi.co/api/v2/pokemon/8/"
      },
      {
          "name": "blastoise",
          "url": "https://pokeapi.co/api/v2/pokemon/9/"
      },
      {
          "name": "caterpie",
          "url": "https://pokeapi.co/api/v2/pokemon/10/"
      },
      {
          "name": "metapod",
          "url": "https://pokeapi.co/api/v2/pokemon/11/"
      }
  ]
};

let $ = createSnippetWithJQuery(`
<script id="template" type="x-tmpl-mustache">
  <h2>{{ name }}</h2>
  <img src="{{ img_url }}" alt="{{ name }}" />
</script>
`);

function Poki(obj){
// Solution code here ...
}

const templateWithMustache = () => {
// Solution code here...
}

describe('Testing challenge', () => {
  test('It should return html markup with the character', () => {
    const filledTemplates = templateWithMustache();
    expect(filledTemplates).toStrictEqual([`
  <h2>bulbasaur</h2>
  <img src="https:&#x2F;&#x2F;pokeapi.co&#x2F;api&#x2F;v2&#x2F;pokemon&#x2F;1&#x2F;" alt="bulbasaur" />
`,
`
  <h2>ivysaur</h2>
  <img src="https:&#x2F;&#x2F;pokeapi.co&#x2F;api&#x2F;v2&#x2F;pokemon&#x2F;2&#x2F;" alt="ivysaur" />
`,
`
  <h2>venusaur</h2>
  <img src="https:&#x2F;&#x2F;pokeapi.co&#x2F;api&#x2F;v2&#x2F;pokemon&#x2F;3&#x2F;" alt="venusaur" />
`,
`
  <h2>charmander</h2>
  <img src="https:&#x2F;&#x2F;pokeapi.co&#x2F;api&#x2F;v2&#x2F;pokemon&#x2F;4&#x2F;" alt="charmander" />
`,
`
  <h2>charmeleon</h2>
  <img src="https:&#x2F;&#x2F;pokeapi.co&#x2F;api&#x2F;v2&#x2F;pokemon&#x2F;5&#x2F;" alt="charmeleon" />
`,
`
  <h2>charizard</h2>
  <img src="https:&#x2F;&#x2F;pokeapi.co&#x2F;api&#x2F;v2&#x2F;pokemon&#x2F;6&#x2F;" alt="charizard" />
`,
`
  <h2>squirtle</h2>
  <img src="https:&#x2F;&#x2F;pokeapi.co&#x2F;api&#x2F;v2&#x2F;pokemon&#x2F;7&#x2F;" alt="squirtle" />
`,
`
  <h2>wartortle</h2>
  <img src="https:&#x2F;&#x2F;pokeapi.co&#x2F;api&#x2F;v2&#x2F;pokemon&#x2F;8&#x2F;" alt="wartortle" />
`,
`
  <h2>blastoise</h2>
  <img src="https:&#x2F;&#x2F;pokeapi.co&#x2F;api&#x2F;v2&#x2F;pokemon&#x2F;9&#x2F;" alt="blastoise" />
`,
`
  <h2>caterpie</h2>
  <img src="https:&#x2F;&#x2F;pokeapi.co&#x2F;api&#x2F;v2&#x2F;pokemon&#x2F;10&#x2F;" alt="caterpie" />
`,
`
  <h2>metapod</h2>
  <img src="https:&#x2F;&#x2F;pokeapi.co&#x2F;api&#x2F;v2&#x2F;pokemon&#x2F;11&#x2F;" alt="metapod" />
`])
  })
});

function createSnippetWithJQuery(html){
  return cheerio.load(html);
};
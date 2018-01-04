# Google Books Search Engine

For this challenge you will be creating a rudimentary search engine that consumes the Google Books API. This is a test of basic front end proficiency.

## Instructions
- Fork this repository and complete the challenge according to the specifications below.
- Once finished, email your [patch](https://robots.thoughtbot.com/send-a-patch-to-someone-using-git-format-patch) to jobs+dev@docnetwork.org and we will review your submission. **(Do _Not_ Open A Pull Request)**

## Notes
- You may _not_ use jQuery. Use `document` for DOM manipulation and `fetch` for http requests.
- While not necessary, you may use AngularJS, React, or Vue to complete this project if you are more comfortable using a framework.
- You are encouraged to use ES6+ JavaScript. We will be testing your submission with Chrome latest, but we have also included Babel as a dependency of this package. You may transpile and minify `main.js` by running `npm run build`. If you choose to do this, please adjust `index.html` accordingly.
- All code must be your own. Do not plagarize, copy, or steal code.

## Specifications
- Research the [Google Books Volume API](https://developers.google.com/books/docs/v1/reference/volumes) to determine how to search for books given a query. You will need to create an [API key](https://developers.google.com/books/docs/v1/using#APIKey).
- Build a basic search engine for Google Books. There should be a search bar to input a query that will be be passed as an argument to the Google Books API. The results should be rendered in the results area. You must include these fields (if available for the record):
  - Cover image
  - Title
  - Subtitle
  - Authors
- Additionally, each result should somehow provide a link to its respective Google Books page. Look at a Google Books entry on Google Books, and see which parameter might help you.
- Each subsequent query should append its results to the results area.
- There must be no duplicates (by Google Books id).
- The results should be visually appealing, styled logically, and fully responsive for mobile devices.
- While you must use the three function stubs provided in `main.js`, this challenge will require you to write some code outside of them.

# Browser

## Main Components of any website:-

- Whenever we visit any website on the internet most of them have 2 parts client and server.
- Client is the part that a user can see and interact with like buttons , images , tests etc and a server is a computer that works remotely.
- Now to properly see the client part we need browser that helps us find any website on the internet and interact with the website.

## Functionalities of a Website:-

- Searching for a DNS from the url.
- Fetching the data from that DNS.
- Parsing the incoming data and show it on the UI.(HTML,XML,JSON,TEXT etc)
- Each browser also have a JS Engine which works as a compiler to the JS part of any website.

### Searching for a DNS from the url:-

- When you enter any url at a browser it tries to search of that ip address on the internet and does a network call at that address.
- It also caches that ip so that next time when the user searches the same url it doesn't have to look for the dns again.

### Getting the data from server and showing it:-

- After the browser gets the dns address it does a network request to that url and tries to get data from the url.
- Now this data can be of different types like json,csv,html,xml etc.
- So each browser also have a parser to render this data on the UI.
- To built a Frontend of a Website the incoming data from the server is of type HTML and browser parses that html formats it and shows it on the dom.

### Critical rendering path:-

- The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen.
- Along with Parsing the HTML browser also creates the DOM and CSSOM.
- After the HTML rendering is done browser tries to fetch the JS.
- If the script tag has a async of deffer attributes it fetches the JS according to that.
- Then the JS Engine(V8 Engine for Crome) Interprets the JS and does the functionality.

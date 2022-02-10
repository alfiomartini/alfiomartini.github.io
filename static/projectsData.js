const jsProjects = [
  {
    title: "A (Programming) Language based on Application Expressions",
    readme: `This is a parser/evaluator for a simple imperative programming language, whose constructs are uniformly expressed as (function) applications. The are special (reserved) forms of application expressions to express the usual imperative constructions for assignment, conditional, sequence, while loops and arithmetic operations. The language also supports some abstraction by the definition of (recursive) functions. Line comments and (one-dimensional) arrays are also provided.`,
    videoUrl: "https://www.youtube.com/embed/Qm986QymkfE?controls=0",
    liveUrl: "https://alfiomartini.github.io/prog-language/",
    projectUrl: "https://github.com/alfiomartini/prog-language",
    keywords: ["javascript", "css"],
  },
  {
    title: "An Arithmetic Calculating Machine",
    readme: `This is an implementation of a basic arithmetic calculator using HTML/CSS/Javascript. The machine accepts arbitrary arithmetic floating point expressions with parenthesis, using the operations of sum, division, multiplication and subtraction. The parser for the calculator is written by hand from a corresponding context free grammar. Currently, it treats operators, in the absence of brackets, as right-associative. The regular subset of the arithmetic expressions, namely floating point numbers, operators and brackets, are recognized with regular expressions. Tests are written with the Jest/Puppeteer framework.`,
    videoUrl: "https://www.youtube.com/embed/KNHRH3r62ow?controls=0",
    liveUrl: "https://alfiomartini.github.io/calculator/",
    projectUrl: "https://github.com/alfiomartini/calculator",
    keywords: ["javascript", "css"],
  },
  {
    title: "Arithmetic Quiz Generator",
    readme: `This is an implementation of an arithmetic quiz  generator with HTML/CSS/Javascript. It supports random generation of binary arithmetic expressions and its related collection of possible solutions. The UI register the right and wrong questions, as well as the current score of correct answers given by the user. A collection of tests enforces the correct behavior of the UI using the Jest/Puppeteer framework.`,
    videoUrl: "https://www.youtube.com/embed/VoSn9k0uTR4?controls=0",
    liveUrl: "https://alfiomartini.github.io/arithmetic-quiz/",
    projectUrl: "https://github.com/alfiomartini/arithmetic-quiz",
    keywords: ["javascript", "css"],
  },
];

const pythonProjects = [
  {
    title: "A GitHub Finder Tool",
    readme: `<em>GIFT</em> is a web application designed to help users to search and visualize information about github users and repositories. It supports different types of search. Moreover, search queries can be constrained using an advanced search panel, that support constraining the search with respect to the number of <em>stars</em>, <em>forks</em>, <em>followers</em>, <em>repositories</em> and dates of <em>creation</em> and most recent <em>update</em> of repositories. These modes of search are implemented with the help of the <a href="https://developer.github.com/v3/">GitHub REST API v3</a>. This application is implemented with <em>HTML</em>, <em>CSS</em>, <em>Bootstrap</em>, <em>JavaScript</em>, <em>Python</em>, <em>Django</em> and the <em>SQLite</em> database.`,
    videoUrl: "https://www.youtube.com/embed/5uyiT2O814g?controls=0",
    liveUrl: "https://gift-gh.herokuapp.com/",
    projectUrl: "https://github.com/alfiomartini/gift",
    keywords: ["python", "django", "bootstrap", "sqlite", "css"],
  },
  {
    title: "Bookmark Manager",
    readme: `This is a bookmark manager for recording web content and websites. It supports creating, editing and deleting of bookmarks, as well a search facility for quickly finding related content around search terms. The bookmarks can be displayed either in <strong>list</strong> or <strong>grid</strong> mode. The second mode is comprised of link preview images obtained with the free API provided by <a href="https://www.linkpreview.net/">linkpreview.net</a>.  There is also some support for importing bookmarks from <em>Google Chrome</em> and <em>Microsoft Edge</em>.  The application is implemented with <em>HTML</em>, <em>CSS</em>, <em>Bootstrap</em>, <em>JavaScript</em>, <em>jQuery</em>, <em>Python</em>, <em>Flask</em> and the <em>SQLite</em> database.`,
    videoUrl: "https://www.youtube.com/embed/QvWcsJ1HRbI?controls=0",
    liveUrl: "https://bkmark-mg.herokuapp.com",
    projectUrl: "https://github.com/alfiomartini/cs50Final",
    keywords: ["python", "flask", "bootstrap", "sqlite", "css"],
  },
  {
    title: "A Flask Server for Widgets Collection",
    readme: `<p>This small server is comprised by the following endpoints:</p>
    <ul>
      <li>GET /youtube/{<em>subject</em>}: return a JSON list of videos about <em>subject</em>. 
      <button class="btn btn-warning btn-sm py-0" data-toggle="collapse" data-target="#youtube">
        Code
      </button>
      </li>  
      <p class="code collapse" id="youtube"><code>curl https://widgets-flask.herokuapp.com/youtube/NicoleCross</code>
      </p>
      
      <li>GET /unsplash/{<em>subject</em>}: return a JSON list of images related to <em>subject</em>.
      <button class="btn btn-warning btn-sm py-0" data-toggle="collapse" data-target="#unsplash">
          Code</button>
      </li>
      <p class="code collapse" id="unsplash"><code>curl https://widgets-flask.herokuapp.com/unsplash/libraries</code>
      </p>

      <li>POST /translate : return JSON data with source text translated to target language. Requires 
      <em>input</em> text and language <em>code</em>.
      <button class="btn btn-warning btn-sm py-0" data-toggle="collapse" data-target="#translate">
        Code</button>
      </li>
      <p class="code collapse" id="translate"><code>curl -X POST -H "Content-Type: application/json" -d '{"input":"Hello World", "code":"pt"}' https://widgets-flask.herokuapp.com/translate</code>
      </p>
    </ul>`,
    videoUrl: "https://www.youtube.com/embed/9_tDUxvW8_k?controls=0",
    liveUrl: "https://widgets-flask.herokuapp.com/",
    projectUrl: "https://github.com/alfiomartini/widgets_flask",
    keywords: ["python", "flask"],
  },
  {
    title: "Social Network",
    readme: `This application is a Twitter-like social network for making posts and following users.  Signed users can <em>write</em> new text-based posts, <em>edit</em> and <em>delete</em> their own posts, <em>like</em> or <em>unlike</em> posts,  <em>comment</em> on posts,  and <em>delete</em> any comment written by themselves as well. Through the navbar, the user can access <em>all posts</em> from all users, its <em>profile</em> page, posts from <em>followers</em>, and posts from users that he or she is <em>following</em> as well. Furthermore, clicking on the username of any post leads to the profile page of that user.   This app is implemented with <em>HTML</em>, <em>CSS</em>, <em>JavaScript</em>, <em>Bootstrap</em>, <em>Python</em>, <em>Django</em> and the <em>SQLite</em> database.`,
    videoUrl: "https://www.youtube.com/embed/Iw0t2QbVPIQ?controls=0",
    liveUrl: "https://community-net.herokuapp.com",
    projectUrl: "https://github.com/alfiomartini/network",
    keywords: ["python", "django", "bootstrap", "sqlite", "css"],
  },
  {
    title: "Email Client",
    readme: `This application is a <strong>front-end</strong> for an email client that makes calls to an existing  API written in <strong>Django</strong>.  The front-end is written with <em>HTML</em>, <em>CSS</em>, <em>Bootstrap</em> and <em>JavaScript</em>. The entire application is just a single page, with JavaScript used to control de interface. The interface supports  display of <em>inbox</em>, <em>sent</em> and <em>archived</em> messages. <em>Read</em> and <em>unread</em> messages are displayed with a <em>gray</em>, respectively <em>white</em>,  background.  Inbox messages can be replied, (un)archived, deleted and marked as unread.`,
    videoUrl: "https://www.youtube.com/embed/Iw0t2QbVPIQ?controls=0",
    liveUrl: "https://client-email.herokuapp.com",
    projectUrl: "https://github.com/alfiomartini/mail",
    keywords: ["python", "django", "bootstrap", "sqlite", "css"],
  },
  {
    title: "E-Bay Clone",
    readme: `This application is designed as an eBay-like e-commerce auction site which allows signed users to <em>post</em>
    auction listings, <em>place</em> bids on listings, <em>comment</em> on those listings, and <em>add</em> listings to a <strong>watch list</strong>. Users who created a given listing have the ability to <em>close</em> the auction from this page, which makes the highest bidder (if any) the winner of the auction. This app is implemented with <em>HTML</em>, <em>CSS</em>, <em>JavasScript</em>, <em>Bootstrap</em>, <em>Python</em>, <em>Django</em> and the <em>SQLite</em> database.`,
    videoUrl: "https://www.youtube.com/embed/WekfKZ6fwyA?controls=0",
    liveUrl: "https://clone-ebay.herokuapp.com/",
    projectUrl: "https://github.com/alfiomartini/commerce",
    keywords: ["python", "django", "bootstrap", "sqlite", "css"],
  },
  {
    title: "Book Reviews",
    readme: `This is a book review website  where users are able to search for books, leave reviews for individual books, and see the reviews made by other people.  The application also uses a third-party API by <em>Goodreads</em>, another book review website, to pull in ratings from a broader audience. The application also supports editing and deleting of user reviews and an external API,  <code>/api/&lt;isbn&gt;</code>, which returns the book info and ratings, if the book is found in the database.  It  is developed  with <em>HTML</em>, <em>CSS</em>, <em>JavaScript</em>, <em>jQuery</em>, <em>Bootstrap</em>, <em>Python</em>,  <em>Flask</em> and the <em>PostgreSQL</em> database.`,
    videoUrl: "https://www.youtube.com/embed/elJ9CPMsIbI?controls=0",
    liveUrl: "https://bkreviews.herokuapp.com",
    projectUrl: "https://github.com/alfiomartini/book-reviews",
    keywords: ["python", "flask", "bootstrap", "postgresql", "css"],
  },
  {
    title: "Wiki",
    readme: `This application is implemented as a clone-like <em>Wikipedia</em>, where entries are saved in <strong>markdown</strong> notation and displayed to the user as an <strong>HTML</strong> file. The mapping from markdown to HTML is done by the excellent <a href="https://github.com/trentm/python-markdown2">markdown2</a> tool. The application provides facilities to <em>display all</em> pages in the encyclopedia, to <em>search</em> for a page or group of pages, to <em>edit</em> existing pages, to <em>create</em> new pages and to <em>display random</em> existing entries. This application is implemented with <em>HTML</em>, <em>CSS</em>, <em>Bootstrap</em>, <em>JavaScript</em>, <em>Python</em> and <em>Django</em>. `,
    videoUrl: "https://www.youtube.com/embed/Ndz4wmFMyxo?controls=0",
    liveUrl: "https://web-docs.herokuapp.com",
    projectUrl: "https://github.com/alfiomartini/wiki",
    keywords: ["python", "django", "bootstrap", "css"],
  },
  {
    title: "Stocks Manager",
    readme: `This is a web application with which one can manage portfolios of stocks. It is implemented with <em>HTML/CSS/Bootstrap</em>, <em>JavaScript</em>, <em>Python</em>, <em>Flask</em> and the <em>SQLite</em> database. It allows for 'buying' and 'selling' of stocks, and also checking real stock's prices and portfolios's values using the free api provided by IEX cloud. It can also display all user transactions,  as well as generating charts showing stock prices fluctuations for different periods of time.`,
    videoUrl: "https://www.youtube.com/embed/QvGO8kAPkjo?controls=0",
    liveUrl: "https://iexstocks.herokuapp.com/",
    projectUrl: "https://github.com/alfiomartini/finance",
    keywords: ["python", "flask", "bootstrap", "css"],
  },
  {
    title: "City Weather",
    readme: `This web application provides current weather information and a seven day forecast for around 15000 cities in the world. It is implemented with  <em>HTML</em>, <em>CSS</em>, <em>JavaScript</em>, <em>Bootstrap</em>, <em>Python</em>, <em>Flask</em> and the <em>SQLite</em> database. As the user types in the  search input text area, a list of cities is displayed. By clicking on any list item, the user is presented with the weather information for the given city.  The database of cities is built on top of free <em>.csv</em> files provided by <a href="https://simplemaps.com/data/world-cities">Simple Maps</a>. Weather data and parameters are collected using the free API published  by <a href="https://openweathermap.org/api">openweathermap.org</a>.`,
    videoUrl: "https://www.youtube.com/embed/KojZuZkf7gU?controls=0",
    liveUrl: "https://city-7d-weather.herokuapp.com",
    projectUrl: "https://github.com/alfiomartini/city-weather",
    keywords: ["python", "flask", "bootstrap"],
  },
];

const reactProjects = [
  {
    title: "Clothing Shop",
    readme: `This is a React application that allows users to browse and buy different types of clothing, including hats, sneakers, jackets as well as mens's and women's specific types of clothes. The global state is managed with the <em>redux</em> library, and a certain amount of data persistence is supported for the items added to the shopping cart. Authentication and database support is implemented with Googles's  <em>Firebase</em> platform. Credit card payment is achieved through the use of <em>Stripe</em> (test mode only), while React components are styled with <em>SASS</em> and <em>styled components</em>.`,
    videoUrl: "https://www.youtube.com/embed/mUVYzcFwOU?controls=0",
    liveUrl: "https://clothing-shop-front.herokuapp.com/",
    projectUrl: "https://github.com/alfiomartini/clothing.shop.front",
    keywords: ["react", "css", "styled components"],
  },
  {
    title: "Widgets Collection",
    readme: `This is a collection of four independent <em>React</em> applications, built on top of API's provided by <strong>youtube.com, google.com, wikipedia.org</strong> and <strong>unsplash.com</strong>. It is comprised by a youtube video player, a translator to a pre-defined set of target languages, a panel to search for wikipedia articles, and an app to search pictures in unsplash.com using <em>CSS grid</em> and <em>JavaScript</em> to properly display the images. Each application is associated with an unique URL via the _React Router_ library. I have used <em>CSS, Bootstrap and Semantic-UI</em> to style the React components.`,
    videoUrl: "https://www.youtube.com/embed/n7d-GuEKhdo?controls=0",
    liveUrl: "https://widgets-front.herokuapp.com/",
    projectUrl: "https://github.com/alfiomartini/widgets_flask",
    keywords: ["react", "bootstrap", "css", "semantic ui"],
  },
  {
    title: "Face Detection",
    readme: `This is a <em>React</em> application, built on top of the <a href="https://www.clarifai.com/model-gallery">Clarifai</a> Predict API using the <a href="https://www.clarifai.com/models/face-detection">FACE<em>DETECT</em>MODEL</a> to detect faces in image files. If human faces are detected, the model will return the coordinate locations of those faces with a bounding box. These bounding boxes are then converted to pixel units and then shown on the image using a couple of CSS tricks. The back-end is implemented with <em>Node.js</em>, <em>Express</em>, <em>PostGres</em> and the SQL query builder <a href="http://knexjs.org/">Knex.js</a>. I have styled the application using <em>CSS</em> and <em>Bootstrap</em>.`,
    videoUrl: "https://www.youtube.com/embed/yNLRE1apP0o?controls=0",
    liveUrl: "https://alfiomartini.github.io/face-detection-front/",
    projectUrl: "https://github.com/alfiomartini/face-detection-front",
    keywords: ["react", "bootstrap", "css"],
  },
];

const nodeProjects = [
  {
    title: "A Node.js Server for the Face Detection App",
    readme: `   <p>  The server implements the backend database
    needed to store information about users (using PostgreSQL) and also encapsulate private keys needed to
    access the Clarifai API. The server is comprised of the following endpoints:
  </p>
  <ul>
    <li>POST /<em>register</em>: Signs up a new user and returns JSON data about new user (name, email, number of entries and
    sign up date). 
    <button class="btn btn-warning btn-sm py-0" data-toggle="collapse" data-target="#register">
      Code</button>
    </li>
    <p class="code collapse" id="register"><code>curl -X POST -H "Content-Type: application/json" -d '{"name":"John Doe", "email":"johndoe@gmail.com", "password":"hello"}' https://facedet-api.herokuapp.com/register</code>
    </p>

    <li>POST /<em>signin</em>: Logs in the user and returns basic JSON data about the user.
      <button class="btn btn-warning btn-sm py-0" data-toggle="collapse" data-target="#signin">
          Code</button>
    </li>
    <p class="code collapse" id="signin">
      <code>curl -X POST -H "Content-Type: application/json" -d '{"email":"johndoe@gmail.com", "password":"hello"}' https://facedet-api.herokuapp.com/signin
      </code>
    </p>

    <li>POST /<em>model</em>: If human faces are detected, it returns the coordinate locations of those faces with a bounding box.
      The returned bounding box values are the coordinates of the box outlining each face within the image.
    <button class="btn btn-warning btn-sm py-0" data-toggle="collapse" data-target="#model">
      Code</button>
    </li>
    <p class="code collapse" id="model">
      <code>curl -X POST -H "Content-Type: application/json" -d '{"image_url":"http://tiny.cc/7rpqtz"}' 
        https://facedet-api.herokuapp.com/model
      </code>
    </p>

    <li>PUT /<em>entries</em>: Increments the number of image submissions by the user.
      <button class="btn btn-warning btn-sm py-0" data-toggle="collapse" data-target="#entries">
        Code</button>
    </li>
    <p class="code collapse" id="entries"><code>curl -X POST -H "Content-Type: application/json" -d '{"email":"johndoe@gmail.com"}' https://facedet-api.herokuapp.com/entries</code></p>
  </ul>`,
    videoUrl: "https://www.youtube.com/embed/nCgXRdqbZ0w?controls=0",
    liveUrl: "https://facedet-api.herokuapp.com/",
    projectUrl: "https://github.com/alfiomartini/face-detection-api",
    keywords: ["nodejs", "postgresql"],
  },
];

export const projects = [
  jsProjects,
  reactProjects,
  pythonProjects,
  nodeProjects,
];

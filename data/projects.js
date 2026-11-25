// The `readme` field of each project is trusted HTML written by the site author.
// It is inserted into the page with innerHTML (see js/projects.js), so it must
// never contain user-supplied data.
const jsProjects = [
  {
    title: "About Me",
    language: "javascript",
    readme: `This is a simple application I wrote in order to present my hobbies and preferences in music. I also digress about my work around the field of Logic in Computer Science while I was teaching in the university, and tell how I got hooked, by pure chance,  into the area of web development. This page was written in HTML, CSS, and (vanilla) JavaScript.
    `,
    liveUrl: "https://alfiomartini.github.io/aboutMe/",
    projectUrl: "https://github.com/alfiomartini/aboutMe",
    keywords: ["javascript", "css"],
    weight: 5.5,
  },
  {
    title: "A (Programming) Language based on Application Expressions",
    language: "javascript",
    readme: `This is a parser/evaluator for a simple imperative programming language, whose constructs are uniformly expressed as (function) applications. The language also supports some abstraction by the definition of (recursive) functions. Line comments and (one-dimensional) arrays are also provided. The program itself is a reconstruction/adaptation/extension of an original application developed by Marijn Haverbeke (Eloquent Javascript) and it is developed entirely with HTML/CSS/JavaScript.`,
    liveUrl: "https://alfiomartini.github.io/prog-language/",
    projectUrl: "https://github.com/alfiomartini/prog-language",
    keywords: ["javascript", "css"],
    weight: 5,
  },
  {
    title: "An Arithmetic Calculating Machine",
    language: "javascript",
    readme: `This is an implementation of a basic arithmetic calculator using HTML/CSS/Javascript. The machine accepts arbitrary arithmetic floating point expressions with parenthesis, using the operations of sum, division, multiplication and subtraction. The parser for the calculator is written by hand from a corresponding context free grammar. Currently, it treats operators, in the absence of brackets, as right-associative. The regular subset of the arithmetic expressions, namely floating point numbers, operators and brackets, are recognized with regular expressions. Tests are written with the Jest/Puppeteer framework.`,
    liveUrl: "https://alfiomartini.github.io/calculator/",
    projectUrl: "https://github.com/alfiomartini/calculator",
    keywords: ["javascript", "css"],
    weight: 4,
  },
];

const pythonProjects = [
  {
    title: "A GitHub Finder Tool",
    language: "python",
    readme: `<em>GIFT</em> is a web application designed to help users to search and visualize information about github users and repositories. It supports different types of search. Moreover, search queries can be constrained using an advanced search panel, that support constraining the search with respect to the number of <em>stars</em>, <em>forks</em>, <em>followers</em>, <em>repositories</em> and dates of <em>creation</em> and most recent <em>update</em> of repositories. These modes of search are implemented with the help of the <a href="https://developer.github.com/v3/">GitHub REST API v3</a>. This application is implemented with <em>HTML</em>, <em>CSS</em>, <em>Bootstrap</em>, <em>JavaScript</em>, <em>Python</em>, <em>Django</em> and the <em>SQLite</em> database.`,
    liveUrl: "https://gift-gh.herokuapp.com/",
    projectUrl: "https://github.com/alfiomartini/gift",
    disabled: true,
    keywords: ["python", "django", "bootstrap", "sqlite", "css"],
    weight: 5,
  },
  {
    title: "A Flask Server for Widgets Collection",
    language: "python",
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
    liveUrl: "https://widgets-flask.herokuapp.com/",
    disabled: true,
    projectUrl: "https://github.com/alfiomartini/widgets_flask",
    keywords: ["python", "flask"],
    weight: 3,
  },
  {
    title: "Social Network",
    language: "python",
    readme: `This application is a Twitter-like social network for making posts and following users.  Signed users can <em>write</em> new text-based posts, <em>edit</em> and <em>delete</em> their own posts, <em>like</em> or <em>unlike</em> posts,  <em>comment</em> on posts,  and <em>delete</em> any comment written by themselves as well. Through the navbar, the user can access <em>all posts</em> from all users, its <em>profile</em> page, posts from <em>followers</em>, and posts from users that he or she is <em>following</em> as well. Furthermore, clicking on the username of any post leads to the profile page of that user.   This app is implemented with <em>HTML</em>, <em>CSS</em>, <em>JavaScript</em>, <em>Bootstrap</em>, <em>Python</em>, <em>Django</em> and the <em>SQLite</em> database.`,
    liveUrl: "https://community-net.herokuapp.com",
    disabled: true,
    projectUrl: "https://github.com/alfiomartini/network",
    keywords: ["python", "django", "bootstrap", "sqlite", "css"],
    weight: 5,
  },
  {
    title: "Email Client",
    language: "python",
    readme: `This application is a <strong>front-end</strong> for an email client that makes calls to an existing  API written in <strong>Django</strong>.  The front-end is written with <em>HTML</em>, <em>CSS</em>, <em>Bootstrap</em> and <em>JavaScript</em>. The entire application is just a single page, with JavaScript used to control de interface. The interface supports  display of <em>inbox</em>, <em>sent</em> and <em>archived</em> messages. <em>Read</em> and <em>unread</em> messages are displayed with a <em>gray</em>, respectively <em>white</em>,  background.  Inbox messages can be replied, (un)archived, deleted and marked as unread.`,
    disabled: true,
    liveUrl: "https://client-email.herokuapp.com",
    projectUrl: "https://github.com/alfiomartini/mail",
    keywords: ["python", "django", "bootstrap", "sqlite", "css"],
    weight: 4,
  },
];

const reactProjects = [
  {
    title: "Clothing Shop",
    language: "react",
    readme: `This is a React application that allows users to browse and buy different types of clothing. The global state is managed with the <em>redux</em> library, and a certain amount of data persistence is supported for the items added to the shopping cart. Authentication and database support is implemented with Googles's  <em>Firebase</em> platform. Credit card payment is achieved through the use of <em>Stripe</em> (test mode only), while React components are styled with <em>SASS</em> and <em>styled components</em>. The program itself is a reconstruction/adaptation/extension of an original application developed by Yihua Zhang and it is (mostly) developed with React/Javascript`,
    liveUrl: "https://clothing-shop-front.herokuapp.com/",
    disabled: true,
    projectUrl: "https://github.com/alfiomartini/clothing.shop.front",
    keywords: ["react", "css", "styled components"],
    weight: 5,
  },
  {
    title: "Widgets Collection",
    language: "react",
    readme: `This is a collection of four independent <em>React</em> applications, built on top of API's provided by <strong>youtube.com, google.com, wikipedia.org</strong> and <strong>unsplash.com</strong>. It is comprised by a youtube video player, a translator to a pre-defined set of target languages, a panel to search for wikipedia articles, and an app to search pictures in unsplash.com using <em>CSS grid</em> and <em>JavaScript</em> to properly display the images. The program itself is a reconstruction/adaptation/extension of a collection of original applications developed by   Stephen Grider and are (mostly) developed with React/Javascript/React-Router`,
    liveUrl: "https://widgets-front.herokuapp.com/",
    disabled: true,
    projectUrl: "https://github.com/alfiomartini/widgets_flask",
    keywords: ["react", "bootstrap", "css", "semantic ui"],
    weight: 4,
  },
];

export const projects = [
  jsProjects,
  reactProjects,
  pythonProjects,
];

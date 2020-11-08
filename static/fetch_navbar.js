fetch("./html_snippets/navbar.html")
.then(response => {
  return response.text()
})
.then(data => {
  const header =  document.querySelector("header");
  header.innerHTML = data;
  // const navbar = document.querySelector('header .navbar');
  // console.log(navbar);
  // navbar.style.position = 'sticky';
  // navbar.style.top = '20px';
});
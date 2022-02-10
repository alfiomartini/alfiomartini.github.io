function makeTooltip() {
  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
}

fetch("./html_snippets/navbar.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    const header = document.querySelector("header");
    header.innerHTML = data;
    return data;
  })
  .then((dummy) => makeTooltip());

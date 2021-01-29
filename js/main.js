window.onload = function () {
  document.getElementById("nr").oninput = function () {
    Remove();

    var posts = parseInt(this.value);

    for (var i = 0; i < posts; i++) {
      var place = document.querySelector("input");
      var parent = document.querySelector("section");
      var navi = document.querySelector("div");

      var arti = document.createElement("article");

      var heads = document.createElement("h3");
      var txt = document.createElement("p");
      var link = document.createElement("a");

      place.placeholder = posts;
      arti.id = i + 1;
      heads.innerHTML = "Post # " + (i + 1);
      txt.innerHTML =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis harum aliquid eos ea! A atque inventore, beatae recusandae commodi placeat tempora, eligendi consectetur laboriosam delectus illo, quia exercitationem. Omnis, esse!";
      link.innerHTML = "Post # " + (i + 1);
      link.href = "#" + (i + 1);

        makeEditable(heads);
        makeEditable(txt);

   

      arti.appendChild(heads);
      arti.appendChild(txt);
      navi.appendChild(link);
      parent.appendChild(arti);
    }
  };
};

function Remove() {
  var blogs = document.querySelectorAll("article");
  var links = document.querySelectorAll("a");
  for (var i = 0; i < blogs.length; i++) {
    blogs[i].remove();
    links[i].remove();
  }
}

function makeEditable(elem) {
  elem.onclick = function () {
    elem.contentEditable = true;
    elem.focus();
  };
  elem.onblur = function () {
    elem.contentEditable = false;
  };
}

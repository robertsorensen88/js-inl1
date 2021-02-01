/*
 * Jag debuggade genom att sätta breakpoints inne i sources verktyget inne i chrome. Där kollade jag så alla variabler fick rätt värde.
 * När något inte gick rätt till så satte jag in en alert på det ställe som inte funkade.
 * Så tex. när ett event skulle ske men det inte gick på rätt sätt så hade jag alert där för att se hur långt koden gick.
 */
window.onload = function () {
  document.getElementById("nr").oninput = function () {
    Remove();

    var posts = parseInt(this.value); // här får variabeln posts värdet av inputen.

    for (var i = 0; i < posts; i++) {
      //går sedan igenom en loop för att skapa så många av varje element.

      var place = document.querySelector("input");
      var parent = document.querySelector("section");
      var navi = document.querySelector("div");
      //här väljer vi vad vi skapar i section.

      var arti = document.createElement("article");

      var heads = document.createElement("h3");
      var txt = document.createElement("p");
      var link = document.createElement("a");

      // här väljer vi innehållet i de olika elementen och id för article samt href för länkarna.
      place.placeholder = posts;
      arti.id = i + 1;
      heads.innerHTML = "Post # " + (i + 1);
      txt.innerHTML =
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis harum aliquid eos ea! A atque inventore, beatae recusandae commodi placeat tempora, eligendi consectetur laboriosam delectus illo, quia exercitationem. Omnis, esse!";
      link.innerHTML = "Post # " + (i + 1);
      link.href = "#" + (i + 1);

      makeEditable(heads); // här skickar vi txt o heads till en function längre ner. så vi kan redigera texten.
      makeEditable(txt);

      arti.appendChild(heads);
      arti.appendChild(txt);
      navi.appendChild(link);
      parent.appendChild(arti);
    }
  };
};

function Remove() {
  // här tar vu bort alla article och länkar.
  var blogs = document.querySelectorAll("article");
  var links = document.querySelectorAll("a");
  for (var i = 0; i < blogs.length; i++) {
    blogs[i].remove();
    links[i].remove();
  }
}

function makeEditable(elem) {
  elem.onclick = function () {
    // när användaren trycker på dessa elem så kan man redigera texten samt får en border runt.
    elem.contentEditable = true;
    elem.focus();
  };
  elem.onblur = function () {
    elem.contentEditable = false;
  };
}

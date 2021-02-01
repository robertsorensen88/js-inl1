const newblog = document.querySelector(".new")
newblog.onclick = function newpost() {
    var divs = document.getElementById("nr").placeholder
    parseInt(divs)
    divs++
    var divvs = divs
    document.getElementById("nr").placeholder = divvs

    var place = document.querySelector("input")
    var parent = document.querySelector("section")
    var navi = document.querySelector("div")

    var arti = document.createElement("article")

    var heads = document.createElement("h3")
    var txt = document.createElement("p")
    var link = document.createElement("a")
    
    place.placeholder = divvs
    place.value = divvs
    arti.id = divvs
    heads.innerHTML = "Post # " + divvs
    txt.innerHTML =
      "Click me"
    link.innerHTML = "Post # " + divvs
    link.href = "#" + divvs
    makeEditable(heads)
    makeEditable(txt)

    arti.appendChild(heads)
    arti.appendChild(txt)
    navi.appendChild(link)
    parent.appendChild(arti)
}

'use strict;'
let addButton = document.getElementById("addButton");
let inpName = document.getElementById("inpName");
let itemList = document.getElementById("itemList");
var chillun = document.getElementById("itemList").childNodes;
var counter = 0;
// console.log(inpName);
// console.log(addButton);
// console.log(itemList);

var listedekiler = new Array();

// addButton.addEventListener("click", clickEvent);

// addButton.addEventListener("mouseup", clickEvent);
// addButton.addEventListener("mousedown", clickEvent);

// // addButton.addEventListener("mouseover", clickEvent);
// addButton.addEventListener("mouseout", clickEvent);

// addButton.addEventListener("mouseenter", clickEvent);
// addButton.addEventListener("mouseleave", clickEvent);

// inpName.addEventListener("keydown", keyCatch);
// inpName.addEventListener("keyup", keyCatch);

// inpName.addEventListener("keypress", keyCatch);

inpName.addEventListener("focus", keyCatch);
inpName.addEventListener("blur", keyCatch2);

function keyCatch(e) {
  // console.log(e.key);
  // console.log(e.keyCode);
  e.target.style.backgroundColor="red";
}
function keyCatch2(e) {
  // console.log(e.key);4
  e.target.style.backgroundColor = "blue";
  // console.log(e.keyCode);
  // console.log(e.target.value);
}
function clickEvent(e) {
  console.log(e.type);
}

function addItem() {
  if (inpName.value != "") {
    // listedekiler.push(inpName.value);
    counter++;
    console.log(counter);
    // console.log(listedekiler);
    inpName.focus();

    /////
    const li = document.createElement("li");

    const textnn = document.createTextNode(inpName.value + "     ");
    li.id = inpName.value;
    li.appendChild(textnn);
    li.className = "listElement";
    li.setAttribute("title", "text");
    document.querySelector("#itemList").appendChild(li);
    ///////////////////////////////

    const btn = document.createElement("button");
    btn.className = "del" + inpName.value;
    btn.id = "aaa";
    // console.log(typeof inpName.value);
    var types = inpName.value;
    btn.onclick = () => delItem(types);

    const textdel = document.createTextNode("GERİ ÇIKAR");

    btn.appendChild(textdel);
    document.querySelector("#" + inpName.value).appendChild(btn);
    ////////////////////////////
    const bought = document.createElement("button");
    bought.className = "bought";
    const textbt = document.createTextNode("ALINDI");
    bought.onclick = () => alindi(types);
    bought.appendChild(textbt);
    document.querySelector("#" + inpName.value).appendChild(bought);
    inpName.value = "";
  }
}

function delItem(x) {
  // console.log(x + " cubcbu");
  let index = listedekiler.indexOf(x);
  // console.log(index + " :index");

  listedekiler.splice(index, 1);
  var cc = x;
  let listt = document.getElementById(cc);

  listt.remove();
  // console.log(listt);
}

function alindi(x) {
  addToBoughtList(x);
  var cc = x;
  let listt = document.getElementById(cc);
  // console.log(listt.id + " adiiiiiiii");
  delItem(x);
}

function addToBoughtList(x) {
  const item = document.createElement("li");
  const textnn = document.createTextNode(x);
  item.id = inpName.value;
  item.appendChild(textnn);
  item.className = "listElement";
  item.setAttribute("title", "text");
  document.querySelector("#boughtList").appendChild(item);
}

function loadTxt() {
  fetch("added.txt")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      // console.log(data);
      // document.getElementById("cikti").innerHTML = data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return 0;
}

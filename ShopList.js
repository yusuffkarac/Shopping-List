let addButton = document.getElementById("addButton");
let inpName = document.getElementById("inpName");
let itemList = document.getElementById("itemList");
var chillun = document.getElementById("itemList").childNodes;
var counter = 0;

var inList = new Array();

function addItem() {
  if (inpName.value != "") {
    counter++;
    console.log(counter);
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
    btn.onclick = () => deleteItem(types);

    const textdel = document.createTextNode("Delete");

    btn.appendChild(textdel);
    document.querySelector("#" + inpName.value).appendChild(btn);
    ////////////////////////////
    const bought = document.createElement("button");
    bought.className = "bought";
    const textbt = document.createTextNode("Bought");
    bought.onclick = () => boughtItem(types);
    bought.appendChild(textbt);
    document.querySelector("#" + inpName.value).appendChild(bought);
    inpName.value = "";
  }
}

function deleteItem(x) {
  let index = inList.indexOf(x);

  inList.splice(index, 1);
  var cc = x;
  let listt = document.getElementById(cc);

  listt.remove();
}

function boughtItem(x) {
  addToBoughtList(x);
  var cc = x;
  let listt = document.getElementById(cc);
  deleteItem(x);
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

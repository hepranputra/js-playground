const searchInput = document.querySelector(".input-div input");
const searchBtn = document.querySelector(".input-div button");
const list = document.querySelector(".output-div ul");

list.innerHTML = "";

const myHistory = [];
const MAX_HISTORY = 5;

searchBtn.onclick = () => {
  if (searchInput.value !== "") {
    myHistory.unshift(searchInput.value);

    // empty the list so that we don't display duplicate 
    // entries the display is regenerated every time a search 
    // term is entered.
    list.innerHTML = "";

    for (const itemText of myHistory) {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    if (myHistory.length >= MAX_HISTORY) {
      myHistory.pop();
    }

    searchInput.value = "";
    searchInput.focus();
  }
}

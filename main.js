//Change Date Text
var date = document.getElementById("dateChange");
var today = new Date();

date.innerHTML = today.toDateString();
//End Date Text
//Add Item
var addButton = document.querySelector("#addButton");
var container = document.querySelector(".listContent");

addButton.addEventListener("click", () => {
    var newListItem = document.createElement("div");
    var newListItemContent = document.createElement("div");
    var newInput = document.createElement("input");
    var closeButton = document.createElement("span");
    var txt = document.createTextNode("\u00D7");

    newListItem.setAttribute("class", "listItem");
    newListItemContent.setAttribute("class", "listItemContent");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("placeholder", "Item");
    closeButton.setAttribute("class", "close");
    
    closeButton.appendChild(txt);
    newListItemContent.appendChild(closeButton);
    newListItemContent.appendChild(newInput);
    newListItem.appendChild(newListItemContent);
    container.append(newListItem);

    addCloseFunction();
})
//End Add Item
//Clear All Items
var trashButton = document.querySelector("#trashButton");

trashButton.addEventListener("click", () => {
    var itemsToDelete = document.querySelectorAll(".listItem");
    for(var i = 0; i < itemsToDelete.length; i++)
    {
        itemsToDelete[i].style.display = "none";
    }
});
//End Clear All Items
//Home 
var homeLink = document.getElementById("titleLogo");

homeLink.addEventListener("click", () => {
    window.location.href = "index.html";
})
//End Home
//Close Button
function addCloseFunction() {
    var closeButtons = document.getElementsByClassName("close");
    for(var i = 0; i < closeButtons.length; i++)
    {
        closeButtons[i].onclick = function() {
            var parent = this.parentElement.parentElement;
            parent.style.animationName = "slide";
            parent.style.animationDuration = ".25s";
            parent.style.animationIterationCount = 1;
            setTimeout(() => {
                parent.style.display = "none";
            }, 250);
        }
    }
}
//End Close Button

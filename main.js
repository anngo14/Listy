//Global Variables
if(localStorage.getItem("numOfItems") === null)
{
    var itemIndex = 1;
    var numOfItems = 0;
}
else{
    var numOfItems = parseInt(localStorage.getItem("numOfItems"));
    var itemIndex = numOfItems + 1;
}

//End Global Variables
//On Browser Close
window.onunload = () => {
    this.alert("Do you really want to close?");
};
//End Browser Close
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
    var checkButton = document.createElement("span");
    var text = document.createTextNode("✓")
    var closeButton = document.createElement("span");
    var txt = document.createTextNode("\u00D7");

    newListItem.setAttribute("class", "listItem");
    newListItemContent.setAttribute("class", "listItemContent");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", `Item${itemIndex}`);
    newInput.setAttribute("placeholder", `Item ${itemIndex}`);
    closeButton.setAttribute("class", "close");
    checkButton.setAttribute("class", "complete");
    
    checkButton.appendChild(text);
    closeButton.appendChild(txt);
    newListItemContent.appendChild(closeButton);
    newListItemContent.appendChild(checkButton);
    newListItemContent.appendChild(newInput);
    newListItem.appendChild(newListItemContent);
    container.append(newListItem);

    addCloseFunction();
    addCheckFunction();
    itemIndex++;
    numOfItems++;
})
//End Add Item
//Clear All Items
var trashButton = document.querySelector("#trashButton");

trashButton.addEventListener("click", () => {
    var itemsToDelete = document.querySelectorAll(".listItem");
    for(var i = 0; i < itemsToDelete.length; i++)
    {
        itemsToDelete[i].remove();
        itemIndex--;
        numOfItems--;
    }
});

//End Clear All Items
//Home 
var homeLink = document.getElementById("titleLogo");

homeLink.addEventListener("click", () => {
    window.location.href = "/";
})
//End Home
//Close Button
function addCloseFunction() {
    var closeButtons = document.getElementsByClassName("close");
    for(var i = 0; i < closeButtons.length; i++)
    {
        closeButtons[i].onclick = function() {
            var parent = this.parentElement.parentElement;
            itemIndex--;
            numOfItems--;
            parent.style.animationName = "slide";
            parent.style.animationDuration = ".25s";
            parent.style.animationIterationCount = 1;
            setTimeout(() => {
                parent.remove();
            }, 250);
        }
    }
}
//End Close Button
//Check (Complete) Button
function addCheckFunction() {
    var checkButtons = document.getElementsByClassName("complete");
    for(var i = 0; i < checkButtons.length; i++)
    {
        checkButtons[i].onclick = function() {
            var parent = this.parentElement;
            var textInput = parent.querySelector("input");
            if(textInput.value.match("^\\s*$"))
            {
                return;
            }
            if(textInput.style.textDecoration === "line-through")
            {
                textInput.style.textDecoration = "none";
                textInput.style.color = "black";
            }
            else{
                textInput.style.textDecoration = "line-through";
                textInput.style.color = "#f44336";
            }
        }
    }
}
//End Complete Button
//Save Functionality
var saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", () => {
    if(numOfItems === 0){
        alert('There are no items to save!');
        localStorage.setItem("numOfItems", numOfItems);
        return;
    }
    else {
        localStorage.setItem("numOfItems", numOfItems);
        for(let i = 0; i < numOfItems; i++)
        {
            let j = i+1;
            var itemToSave = document.getElementById(`Item${j}`);
            var itemValue = itemToSave.value;
            localStorage.setItem(`Item${j}`,itemValue);
        }
        alert(`${numOfItems} item(s) were saved`);
    }
});
//End Save Functionality
//Load Functionality
var loadButton = document.getElementById("loadButton");
var container = document.querySelector(".listContent");

loadButton.addEventListener("click", () => {
    numOfItems = parseInt(localStorage.getItem("numOfItems"));
    itemIndex = numOfItems+1;
    if(numOfItems === 0)
    {
        alert("There are no items to load");
        return;
    }
    else {
        alert(`${numOfItems} item(s) to to load`);
        for(let i = 0; i < numOfItems; i++)
        {
            let j = i+1;
            var itemValue = localStorage.getItem(`Item${j}`);
            console.log(itemValue);
            var newListItem = document.createElement("div");
            var newListItemContent = document.createElement("div");
            var newInput = document.createElement("input");
            var checkButton = document.createElement("span");
            var text = document.createTextNode("✓")
            var closeButton = document.createElement("span");
            var txt = document.createTextNode("\u00D7");
        
            newListItem.setAttribute("class", "listItem");
            newListItemContent.setAttribute("class", "listItemContent");
            newInput.setAttribute("type", "text");
            newInput.setAttribute("id", `Item${j}`);
            newInput.setAttribute("placeholder", `Item ${j}`);
            newInput.setAttribute("value", itemValue);
            closeButton.setAttribute("class", "close");
            checkButton.setAttribute("class", "complete");
            
            checkButton.appendChild(text);
            closeButton.appendChild(txt);
            newListItemContent.appendChild(closeButton);
            newListItemContent.appendChild(checkButton);
            newListItemContent.appendChild(newInput);
            newListItem.appendChild(newListItemContent);
            container.append(newListItem);
        
            addCloseFunction();
            addCheckFunction();
        }
    }
});
//End Load Functionality
//Clear LocalStorage
var clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", () => {
    if(confirm("Are you sure you want to clear the saved List?"))
    {
        localStorage.clear();
        location.reload();
        localStorage.setItem("numOfItems", 0);
    }
    else{
        alert("You Pressed Cancel!");
    }
});
//End Clear LocalStorage
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
    var checkButton = document.createElement("span");
    var text = document.createTextNode("✓")
    var closeButton = document.createElement("span");
    var txt = document.createTextNode("\u00D7");

    newListItem.setAttribute("class", "listItem");
    newListItemContent.setAttribute("class", "listItemContent");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("placeholder", "Item");
    closeButton.setAttribute("class", "close");
    checkButton.setAttribute("class", "complete");
    
    checkButton.appendChild(text);
    closeButton.appendChild(txt);
    newListItemContent.appendChild(closeButton);
    newListItemContent.appendChild(checkButton);
    newListItemContent.appendChild(newInput);
    newListItem.appendChild(newListItemContent);
    container.append(newListItem);

    addCloseFunction();
    addCheckFunction();
})
//End Add Item
//Clear All Items
var trashButton = document.querySelector("#trashButton");

trashButton.addEventListener("click", () => {
    var itemsToDelete = document.querySelectorAll(".listItem");
    for(var i = 0; i < itemsToDelete.length; i++)
    {
        itemsToDelete[i].remove();
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
                parent.remove();
            }, 250);
        }
    }
}
//End Close Button
//Check (Complete) Button
function addCheckFunction() {
    var checkButtons = document.getElementsByClassName("complete");
    for(var i = 0; i < checkButtons.length; i++)
    {
        checkButtons[i].onclick = function() {
            var parent = this.parentElement;
            var textInput = parent.querySelector("input");
            if(textInput.value.match("^\\s*$"))
            {
                return;
            }
            if(textInput.style.textDecoration === "line-through")
            {
                textInput.style.textDecoration = "none";
                textInput.style.color = "black";
            }
            else{
                textInput.style.textDecoration = "line-through";
                textInput.style.color = "#f44336";
            }
        }
    }
}
//End Complete Button

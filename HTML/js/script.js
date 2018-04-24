function addTodo()
{
    var text = document.getElementById("input").value;
    if (text !== "")
    {
        var li = createListItem(text);

        document.getElementById("list").appendChild(li);
        document.getElementById("input").value = "";
    }
}

function createListItem(text)
{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    li = addCloseButton(li);

    return li;
}

function addCloseButton(listItem)
{
    var span = document.createElement("span");
    var text = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(text);
    span.onclick = removeItem;

    listItem.appendChild(span);

    return listItem;
}

function removeItem(e)
{
    var div = this.parentElement;
    div.style.display = "none";
}
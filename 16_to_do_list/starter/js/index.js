$(document).ready(function(){
    console.log("Ready");

    $('#addToDo').on('submit', addToDoListItem)
    $('#todo-list').on('click', deleteToDoListItem)
    //$('input').on('submit', '.delete-item', addToDoListItem())

    //$('todo-list').on('click', input , deleteToDoListItem())
    function addToDoListItem(){
    event.preventDefault();
    console.log("Function is working!")
    //when user enters to-do list item
    //Select input field the user typed into (event listener)
    //Get value of input field
    var item = $('.input').val();
    //Create a list item
    var listItem = "<li class='todo-item'><input type='button' value='Complete'>";
    listItem += item;
    listItem += "<a class='edit-item'> Edit</a><button class='delete-item'>Delete</button></li>";
    //Place value in the list item
    //Append the list item to our ordered to-do-list
    $('#todo-list').append(listItem);
    }
    //deleteToDoListItem
    function deleteToDoListItem(){
        console.log($(this).parent());
        $(this).parent().remove();
        }
        //when user clicks remove or delete element:
        //select todo list item and remove
        //delete selected item

    //markToDoListItemComplete
        //how we mark the item as complete. Onclick strikethrough
        //when user clicks on item complete box get item user clicked on (this selector).
        //Add a css line to strike through

    //editToDoListItem
        //when user clicks on todo item edit button
        // select the item the user wants to edit
        // replace the text in the list item show and input with the same existing text
        //on blur save the todo item list (saveEditedToDOListItem)
        //remove the edit to-do item button

    //saveEditedToDoListItem
        //select the todo list item the user wants to save
        //get the value of the input (set a variable)
        //clean up the inputted item
        //replace the input with the value of the input new input
        //add back in the edit button

    //emptyToDoList

    //
});
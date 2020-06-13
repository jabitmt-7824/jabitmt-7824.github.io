var input=document.getElementById("input1");
var addbutton=document.getElementById("add-button");
var lists=document.getElementById("lists");

// keypress event handler for task input
input.addEventListener("keypress",function(){
	addbutton.style.display="block";
});

// crate an new task item in list container
function createItem(itemvalue){
	 var listItem=document.createElement('li');
	 var leftpart=document.createElement('div');
	 var checkBox = document.createElement("input");
	 var label = document.createElement("label");
	 var deleteButton = document.createElement("button");
	 deleteButton.classList.add("delete-btn");
	 listItem.classList.add("lists");

	 checkBox.type = "checkBox";
	 label.innerText=itemvalue;
	 deleteButton.innerText="Delete";

	 leftpart.appendChild(checkBox);
	 leftpart.appendChild(label);
	 listItem.appendChild(leftpart);
	 listItem.appendChild(deleteButton);
	 lists.appendChild(listItem);
}

// click event handler for add button
addbutton.addEventListener("click",function(){	
	let v=input.value;
	createItem(v);
	input.value="";
	addbutton.style.display="none";
	let items=document.querySelectorAll("#lists li");
	// count and display number of tasks
	let count=document.querySelector("#task-left span");
	count.innerText=items.length;

});
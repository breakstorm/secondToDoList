console.log("hello world");


var add = document.querySelector(".add");
var order = document.querySelector(".order");
var list = order.querySelectorAll("li");
var input = document.querySelector("input");


// console.log(add);
// console.log(order);
// console.log(list);

function addList (evt){
	// debugger;
	// console.log(this);
	// console.log(evt)
	// console.log(arguments);

	if(evt.target.tagName === "BUTTON" || evt.keyCode === 13){
	var temp = input.value;
	var tempHTML = '<li class="fl-left">' + temp + '</li><button class="fl-right">변경</button><button class="fl-right">완료</button><button class="fl-right">삭제</button><br>'
	order.lastElementChild.insertAdjacentHTML('afterend',tempHTML);
	input.value = "";
	}
}

add.addEventListener("click", addList);
input.addEventListener("keydown", addList);
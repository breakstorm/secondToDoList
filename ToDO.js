console.log("hello world");


var add = document.querySelector(".add");
var done = document.querySelectorAll(".done");
var modifyButton = document.querySelectorAll(".modify");
var deleteButton = document.querySelectorAll(".delete");
var order = document.querySelector(".order");
var list = order.querySelectorAll("li");
var input = document.querySelector(".addText");
var modal = document.querySelector('.modal');
var btn = document.querySelector('.modalButton');
var span = document.querySelector('.modalClose');
var text = document.querySelector('.modalText');
var index = 0;

// console.log(add);
// console.log(order);
// console.log(list);

function addList (evt){
	// debugger;
	if(evt.target.tagName === "BUTTON" || evt.keyCode === 13){
		
		var temp = input.value;
		var tempHTML = '<li class="fl-left">' + temp + '</li><button class="fl-right modify">변경</button><button class="fl-right done">완료</button><button class="fl-right delete">삭제</button><br>'
		
		order.lastElementChild.insertAdjacentHTML('afterend',tempHTML);
		input.value = "";

		var deleteButton = document.querySelectorAll(".delete");
		deleteButton.forEach(function(v,i,a){
		v.addEventListener("click", function(evt){
			if(evt.target.tagName === "BUTTON"){
				a[i].nextElementSibling.remove();
				a[i].previousElementSibling.remove();
				a[i].previousElementSibling.remove();
				a[i].previousElementSibling.remove();
				a[i].remove();
			}
	})
})
	}
}


modifyButton.forEach(function(v,i,a){
	v.addEventListener("click", function(evt){
		if(evt.target.tagName === "BUTTON"){
			// 1. 선택된 태그의 스트링값을 복사하고, input text에 붙여넣기
			// 2. modal.style.display = "block" 변경
			// 3. 완료를 누르면 텍스트를 해당 div에 복사하고서, input text에는 초기화 종료
			// 4. 취소를 누르면 텍스트를 
			
			console.log(evt.target);

			// debugger;
			var tempString = a[i].previousElementSibling.innerText;
			index = i;
			console.log(index);
			text.value = tempString;
			modal.style.display = "block";
			evt.stopPropagation();	
		}
	})
})
span.addEventListener("click", function(evt){
	console.log("span");

	list[index].innerText = text.value;
	modal.style.display = "none";
	text.value = ""
	evt.stopPropagation();
})


deleteButton.forEach(function(v,i,a){
	v.addEventListener("click", function(evt){
		if(evt.target.tagName === "BUTTON"){
			a[i].nextElementSibling.remove();
			a[i].previousElementSibling.remove();
			a[i].previousElementSibling.remove();
			a[i].previousElementSibling.remove();
			a[i].remove();
		}
	})
})
done.forEach(function(v,i,a){
	v.addEventListener("click", function(evt){
		if(evt.target.tagName === "BUTTON"){
		// console.log(evt.target);
		// console.log(list[i]);
		var temp = list[i].outerHTML;
		//완료된 것인지 분기 처리
		if(list[i].style.textDecoration){
			list[i].style = 'text-decoration:""';
		
		} else{
			list[i].style = 'text-decoration:line-through';	
		}
	}	
	});
})
list.forEach(function(v,i,a){
	v.addEventListener("click", function(evt){
		if(evt.target.tagName === "LI"){
		// console.log(evt.target);
		// console.log(list[i]);
		var temp = list[i].outerHTML;
		//완료된 것인지 분기 처리
		if(list[i].style.textDecoration){
			list[i].style = 'text-decoration:""';
		
		} else{
			list[i].style = 'text-decoration:line-through';	
		}
	}	
	});	
})
add.addEventListener("click", addList);
input.addEventListener("keydown", addList);

console.log("hellow");
	
	btn.addEventListener("click", function(evt){
		console.log("btn");
		modal.style.display = "block";
		evt.stopPropagation();
	})
	
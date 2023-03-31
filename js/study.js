const todoInput = document.querySelector(".input_box");
const todoList = document.querySelector(".todo_list");
const todoArr = [];  //contentSpan 담는 배열


todoInput.addEventListener("keypress",(e) => {
		if(e.keyCode === 13){
    generateTodo(todoInput.value);
		todoInput.value = "";
	}
});

const generateTodo = (todo) => {
	const li = document.createElement("li");
	const checkSpan  = generateCheck(); 
	const contentSpan = generateContent(todo); 
	const clearSpan = generateClear();
	li.appendChild(checkSpan);
	li.appendChild(contentSpan);
	li.appendChild(clearSpan);
	todoList.appendChild(li);
	console.log(li);

	todoArr.push("contentSpan")
	console.log(todoArr.length); // 투두 개수 알아내기
	
	
}

//체크 생성 메서드
const generateCheck= () => {
	const span = document.createElement("span");
	span.classList.add("todo_check")
	const icon = document.createElement("i");
	icon.classList.add("material-icons");
	icon.classList.add("check")
	icon.innerText = "check"
	icon.addEventListener("click",(e) => {
		const li = e.target.parentNode.parentNode;
		li.classList.add('done');
		icon.remove();

	});
	span.appendChild(icon);
	return span;
}

//컨텐트 생성 메서드
const generateContent = (todo) => {
	const span = document.createElement("span");//스팬을 생성, span변수에 할당
	span.classList.add("todo_content");
	span.innerText = todo;
	return span;
}

// x버튼
const generateClear= () => {
	const span = document.createElement("span");
	span.classList.add("todo_clear")
	const icon = document.createElement("i");
	icon.classList.add("material-icons");
	icon.classList.add("clear")
	icon.innerText = "clear"
	icon.addEventListener("click",(e) => {
		const li = e.target.parentNode.parentNode;
		todoList.removeChild(li);
		todoArr.pop(); //투두 삭제 시 배열에서 빼기 
	});
	span.appendChild(icon);
	
	return span;
}
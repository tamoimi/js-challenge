const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//입력받은 투두를 배열에 담는다
let toDos = [];

//로컬스토리지에 입력받은 투두를 담는다
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//li로 그려진 투두를 삭제
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos()
}

//입력 받은 투두를 화면에 appendChild를 이용해 그려준다
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  button.innerText = "delete";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  span.innerText = newToDo.text;
  toDoList.appendChild(li);
}

function hadleToDoSubmit(event) {
  event.preventDefault();

  //인풋에 투두가 입력 되면 인풋은 "" 된다
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  //입력 받은 투두를 새로 생성된 아이디와 같이 object로 받는다
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  //배열에 newToDo를 푸쉬
  toDos.push(newToDoObj);

  //화면에 newToDo를 그린다
  paintToDo(newToDoObj);

  //localStorage에 입력받은 투두를 저장 한다
  saveToDos();
}

toDoForm.addEventListener("submit", hadleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

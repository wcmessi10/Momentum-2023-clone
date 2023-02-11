const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = toDoForm.querySelector("#todo-form input");

let toDos = [];

function saveToDos(){
    localStorage.setItem("toDos",JSON.stringify(toDos));
}

function paintToDo(newTodo){//newTodo는 id와 text가 있다
    const li = document.createElement("li");
    li.id = newTodo.id;
    //li의 아이디값을 object 아이디값을 넣어준다
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "×";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);//li안에 자식으로 span추가
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}
function deleteToDo(event){
    const li = event.target.parentElement;
    //이벤트 타겟의 부모엘리먼트
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    //.filter(function)  : function에 true인 것만 반환해주는것
    //여기서 toDos.id는 number이고 li.id는 string이므로 변환을 해야한다
    saveToDos();
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    const toDoObject = {
        text : newTodo,
        id : Date.now()
        //id를 고유값 주기위해 지금 시간을 나타내는 Date.now()를 준다.
    };
    toDos.push(toDoObject);
    paintToDo(toDoObject);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem("toDos");

console.log(savedToDos);

if(savedToDos != null){
    const parsedToDos =JSON.parse(savedToDos);
    // JSON.parse : JSON.stringify의 반대, string화 된 배열을 다시 배열화시키는 것
    toDos=parsedToDos; //초기화 했던 toDos를 localStorage에서 값 가져오기
    parsedToDos.forEach(paintToDo);
    // parsedToDos.array.forEach(element => {
        
    // });배열의 각각 요소들로 function 실행
    
}
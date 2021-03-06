//coded by sukyungdev
// last update 2022.06.14

// const
const userInput = document.querySelector("#user-input");
const inputBtn = document.querySelector("#input-btn");
const tabs = document.querySelectorAll(".tabs button");
const dataArea = document.querySelector(".date-area")
const circleSign = document.querySelector("#circle");

//let
let toDoList = [];
let filterList = [];
let mode = "all";

//date
dataArea.innerHTML = `${date()}`;

//eventListener
inputBtn.addEventListener("click", addTodo);
userInput.addEventListener("focus", () => {userInput.value = "";});

tabs.forEach((item, index)=>{
  tabs[index].addEventListener("click", function(event){toDoFilter(event)})
});


//function
//add user to do
function addTodo(event){
  event.preventDefault();  
  //check userValue
  if(userInput.value == ""){
    alert('할일을 입력해주세요!!');
    return;
  };

  let toDoObj = {
    id : generateRandomID(),
    toDoContent : userInput.value,
    isComplete : false
  };
  toDoList.push(toDoObj);
  console.log(toDoList);
  toDoFilter();
};

//renderHTML
function render(){
  let emptyList = [];
  if(mode == "all"){
    emptyList = toDoList;
  } else if(mode == "ing" || mode == "finish"){
    emptyList = filterList;
  } 

  let renderHTML = '';
  emptyList.forEach((item,index) => {
    
    if(emptyList[index].isComplete == true){
      renderHTML += `
        <div class="todo-area">
          <p class="complete">${emptyList[index].toDoContent}</p>
          <div>
            <button onclick="toggleComplete('${emptyList[index].id}')"><i class="fa-solid fa-arrow-rotate-right"></i></button>
            <button onclick="deleteTodo('${emptyList[index].id}')"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        </div>`;
    } else {
      renderHTML += `
        <div class="todo-area">
          <p>${emptyList[index].toDoContent}</p>
          <div>
              <button onclick="toggleComplete('${emptyList[index].id}')"><i class="fa-solid fa-check"></i></button>
              <button onclick="deleteTodo('${emptyList[index].id}')"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        </div>`;
    }
  });
  let board = document.querySelector(".board");
  board.innerHTML = renderHTML;
};

// check isComplete
function toggleComplete(id){
  toDoList.forEach((item, index) => {
    if(toDoList[index].id == id){
      toDoList[index].isComplete = !toDoList[index].isComplete;
      return;
    };
  });
  console.log(toDoList);
  render();
};

//delete
function deleteTodo(id) {
  toDoList.forEach((item, index) => {
    if(toDoList[index].id == id){
      toDoList.splice(index, 1);
      return;
    };
  });
  console.log(toDoList);
  toDoFilter();
};

//tabs filter
function toDoFilter(event){
  if(event){
    mode = event.target.id;
    //circle sign setting
    // circleSign.style.left = event.currentTarget.offsetLeft + "px";
    circleSign.style.left = (event.currentTarget.offsetLeft + 8) + "px";
    circleSign.style.top = (event.currentTarget.offsetTop + 8) + "px";
  }
  filterList = [];
  if (mode == "all"){
    render();
  } else if (mode == "ing"){
    toDoList.forEach((item, index) => {
      if(toDoList[index].isComplete == false){
        filterList.push(toDoList[index]);
      };
    });
    render();
  } else if (mode == "finish"){
    toDoList.forEach((item, index) => {
      if(toDoList[index].isComplete == true){
        filterList.push(toDoList[index]);
      };
    });
    render();
  };
};

//generate ID
function generateRandomID(){
  return '_' + Math.random().toString(36).substr(2, 9);
};

//date and day
function date() {
  let today = new Date();
  let week = ['일', '월', '화', '수', '목', '금', '토'];
  let year = today.getFullYear(); 
  let month = today.getMonth() + 1
  let date = today.getDate();
  let dayOfWeek = week[today.getDay()];
  return `오늘은 ${year}년 ${month}월 ${date}일 ${dayOfWeek}요일입니다.`;
};

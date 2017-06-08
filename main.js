var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobil Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];


/*

var todoInput = document.querySelector("#todoInput");

var todoList = document.querySelector("#todoList");

todoInput.addEventListener('keypress', function(event){

  if (event.keyCode == 13){
    console.log(event.target.value);
    todoContent = event.target.value;
    console.log(todoContent);
    event.target.value = "";
    console.log(event.target.value);
    var newTodoLi = document.createElement('li');
    console.log(newTodoLi);
    newTodoLi.textContent = todoContent;
    console.log(newTodoLi);
    todoList.appendChild(newTodoLi);
    console.log(todoList);
  }
  return event;
});

*/

//import {formData} from './form-data';


var bod = document.querySelector(".bod");

var daHead = document.createElement('header');
var daMain = document.createElement('main');
var daFoot = document.createElement('footer');

bod.appendChild(daHead);
bod.appendChild(daMain);
bod.appendChild(daFoot);

var daTitle = document.createElement('h1');
daTitle.textContent = "Sign Up For My Web App";

daHead.appendChild(daTitle);

//<label>Click me <input type="text"></label>


for (var i in formData){
  var daDiv = document.createElement('div');
  daDiv.classList = formData[i].label;
  daMain.appendChild(daDiv);




  if(formData[i].type=="select"){
    var daSelect = document.createElement('select');
    for (var j in formData[i].options){
      var daOption = document.createElement('option');
      daOption.textContent = formData[i].options[j].label;
      daOption.setAttribute(value, formData[i].options[j].value);
      daSelect.appendChild(daOption);
    }
  }

  else if(formData[i].type=="textarea"){
    var daText = document.createElement('textarea');
    daText.setAttribute(rows, 10);
    daText.setAttribute(cols, 20);

    daDiv.appendChild(daText);
  }

  else{
    var daInput = document.createElement('input');
    daInput.setAttribute(type, formData[i].type);
    daInput.setAttribute(value, formData[i].icon+formData[i].label);

    var daLabel = document.createElement('label');
    daLabel.setAttribute(for, formData[i].label);

    daDiv.appendChild(daLabel);
    daLabel.appendChild(daInput);
  }

}

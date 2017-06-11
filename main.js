


//HTML--------------------------------------------------------------------------


//grab body and css
var bod = document.querySelector(".bod");
bod.style.margin= "auto";
bod.style.width= "400px";
bod.style.boxShadow= "5px 5px grey";
bod.style.borderRadius= "5px";

//create and save to var: head, main, and footer and add css
var daHead = document.createElement('header');
daHead.style.backgroundColor= "rgb(56,139,199)";
daHead.style.color= "white";
daHead.style.borderRadius= "5px";
daHead.style.padding= ".005% 4%";
var daMain = document.createElement('main');
daMain.style.padding= "0% 4% 5% 4%";
var daFoot = document.createElement('footer');
daFoot.style.padding= "4% 4%";
daFoot.style.backgroundColor= "rgb(199,222,239)";
daFoot.style.borderRadius= "5px";

//attatch head, main, and footer to body
bod.appendChild(daHead);
bod.appendChild(daMain);
bod.appendChild(daFoot);

//create h1, put text in it and attach to head
var daTitle = document.createElement('h2');
daTitle.textContent = "Sign Up For My Web App";
daTitle.style.fontWeight= "lighter";
daHead.appendChild(daTitle);

//<label>Click me <input type="text"></label>

//for loop to make the divs for the input feilds
for (var i in formData){
  //create div, add class named after the label in formdata and attach to main
  var daDiv = document.createElement('div');
  daDiv.classList = formData[i].label;
  daMain.appendChild(daDiv);



  //conditional for select in formdata
  if(formData[i].type=="select"){
    //create select element
    var daSelect = document.createElement('select');
    daSelect.style.margin= "2% 0%";
    daSelect.style.width= "95%";
    daSelect.style.boxShadow= "0px";
    daSelect.style.borderRadius= "0px";
    //for loop for options in formdata
    for (var j in formData[i].options){
      //create option element, add label from formdata to textContent attribute,
      //add label from formdata to value attribute,
      //and attatch option to select
      var daOption = document.createElement('option');
      daOption.textContent = formData[i].options[j].label;
      daOption.setAttribute("value", formData[i].options[j].value);
      daSelect.appendChild(daOption);
    }
    //attatch select to div
    daDiv.appendChild(daSelect);
  }


  //conditional for textarea in formdata
  else if(formData[i].type=="textarea"){
    //create textarea, add row and col attribute, and attatch textarea to div
    var daText = document.createElement('textarea');
    daText.setAttribute("plaeceholder", formData[i].label);
    daText.setAttribute("rows", 5);
    daText.setAttribute("cols", 55);
    daText.style.margin= "2% 0%";
    daDiv.appendChild(daText);

    //Create span element for icon in formdata, add class Icon to div,
    //and attatch Icon Span to parent div
    var daSpan = document.createElement('span');
    daSpan.classList = "Icon";
    daDiv.appendChild(daSpan);

    //Create icon element for icon in formdata, add class Icon to icon from formdata,
    //and attatch Icon to span
    var daIcon = document.createElement('i');
    daIcon.classList = "fa " + formData[i].icon;
    daSpan.appendChild(daIcon);
    daIcon.style.color= "rgb(160,165,167)";
    daIcon.style.position= "absolute";
    daIcon.style.margin= ".9% 0% 1%";
    daIcon.style.left= "36%";
  }

  //conditional for the rest of the inputs and add css
  else{
    //Create span element for icon in formdata, add class Icon to div,
    //and attatch Icon Span to parent div
    var daSpan = document.createElement('span');
    daSpan.classList = "Icon";
    daDiv.appendChild(daSpan);

    //Create icon element for icon in formdata, add class Icon to icon from formdata,
    //and attatch Icon to span
    var daIcon = document.createElement('i');
    daIcon.classList = "fa " + formData[i].icon;
    daSpan.appendChild(daIcon);
    daIcon.style.color= "rgb(160,165,167)";
    daIcon.style.position= "absolute";
    daIcon.style.margin= ".9% 0% 1%";
    daIcon.style.left= "36%";

    //Create input element, set type attribute from type in formdata to input,
    //and set value attribute from value in formdata to input,
    var daInput = document.createElement('input');
    daInput.classList = formData[i].type;
    daInput.setAttribute("type", formData[i].type);
    daInput.setAttribute("value", formData[i].label);
    daInput.style.width= "80%";
    daInput.style.margin= "2% 0%";
    daInput.style.padding= "1% 7%";

    //Create label element and set for attribute from for in formdata to label
    var daLabel = document.createElement('label');
    daLabel.setAttribute("for", formData[i].id);

    //Attatch label to div and attatch input to label
    daDiv.appendChild(daLabel);
    daLabel.appendChild(daInput);
  }

}

//create button, put text in it and attach to foot
var daButton = document.createElement('button');
daButton.textContent = "Submit Form";
daFoot.appendChild(daButton);
daButton.style.height= "30px";
daButton.style.color= "white";
daButton.style.backgroundColor= "rgb(56,139,199)";
daButton.style.borderRadius= "3px";
daButton.style.border= "0px";

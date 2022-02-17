const input = document.getElementById('name');
const add = document.getElementById('add')
const mylist = document.getElementById('mylist')
let List = [];
showlist()

add.addEventListener("click", (e) => {
    e.preventDefault()

    let todo = localStorage.getItem("todo");
    console.log(typeof (todo));
  

    if(input.value == ""){
        alert("Hello! I am an alert box!!");
    }else{
        if (todo === null) {
            List = [];
           
        } else { 
            List = JSON.parse(todo);

        }
    
        List.push(input.value);
        input.value = "";
    
        localStorage.setItem("todo", JSON.stringify(List));
        showlist();
    }

   
})

function showlist() {
    let todo = localStorage.getItem("todo");

    if (todo === null) {
        List = [];
    } else {
        List = JSON.parse(todo);
        // console.log(typeof (todo));
    }

    let tempHTML = "";
    List.forEach((list, index) => {
        // console.log("list",list);
        // console.log("list",index);


        tempHTML += `<ul class='a'>
        <div class="left">
        <input type="hidden" id="save" />
        <input  type="checkbox" id="checkedbox"  onclick='checkedlist(${index})'  class='checked'>
        <li class='list'>${list}</li>
        </div>
        <div class="right">
      
        <button id="edit" onclick='editlist(${index})' class='edit'>Edit</button>
        <button onclick='deletelist(${index})' class='delete'>delete</button>
        </div>
     </ul>`;
    });
    mylist.innerHTML = tempHTML;
}


function deletelist(index){
    let todo = localStorage.getItem("todo");
    List = JSON.parse(todo);
    List.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(List));
    showlist();
}





function checkedlist(){
    // var check = document.querySelector('.checked');
    // check("input[type=checkbox]")
    // var checkBoxs=checkedbox.querySelector("input[type=checkbox]");
    let todo = localStorage.getItem("todo");
    // console.log(todo);
    List = JSON.parse(todo);
    // let ind = index
    // console.log(ind);
   
    // if( checked=""){
        
    // }
   
    // List.strike(ind)
    // List.strike(index);
    // checkBox.onchange=checkBoxEventHandler;
  
    localStorage.setItem("todo", JSON.stringify(List));
    showlist();
}



 


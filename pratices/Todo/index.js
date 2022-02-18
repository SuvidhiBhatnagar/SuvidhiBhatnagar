const input = document.getElementById('name');
const add = document.getElementById('add')
const mylist = document.getElementById('mylist')
const saveInd = document.getElementById("saveIndex");
const save = document.getElementById("save");


let List = [];
showlist()


//show all list 
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


//add button
add.addEventListener("click", (e) => {
    e.preventDefault()

    let todo = localStorage.getItem("todo");
    console.log(typeof (todo));


    if (input.value == "") {
        alert("Hello! I am an alert box!!");
    } else {
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



//delete button
function deletelist(index) {
    let todo = localStorage.getItem("todo");
    List = JSON.parse(todo);
    List.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(List));
    showlist();
}




//edit button
function editlist(index) {

    saveInd.value = index;
    let todo = localStorage.getItem("todo");
    List = JSON.parse(todo);
    input.value = List[index];
    // add.style.display = "none";
    // edit.style.display = "block";
    add.style.display = "none";
    save.style.display = "initial";
    // localStorage.setItem("todo", JSON.stringify(List));
    // showlist();
}


//save button
save.addEventListener("click", () => {
    let todo = localStorage.getItem("todo");
    List = JSON.parse(todo);
    let id = saveInd.value;
    List[id] = input.value;
    add.style.display = "initial";
    save.style.display = "none";
    input.value = "";
    localStorage.setItem("todo", JSON.stringify(List));
    showlist();
});


done.addEventListener('click', function(){ 
    txt.style.textDecoration = "line-through";
  }) 

  done.addEventListener('click', function(e){ 
    e.target.closest('li').style.textDecoration = "line-through";
  })  




function checkedlist(index) {
    // var check = document.querySelector('.checked');
    // check("input[type=checkbox]")
    // var checkBoxs=checkedbox.querySelector("input[type=checkbox]");
    let todo = localStorage.getItem("todo");
    // console.log(todo);
    List = JSON.parse(todo);

    let ind = index
    console.log(ind);

    ind.style.textDecoration = "underline overline";


   
    // console.log(ind);

    // if( checked=""){

    // }

    // String.prototype.strike = function() {
    //     return '<div class="strike">'+ this +'</div>';
    // };

    // List.strike(ind)
    // List.strike(index);
    // checkBox.onchange=checkBoxEventHandler;


    // <div class="strike"> hello world! </div>
    // var test = 'hello world!'.strike();

    localStorage.setItem("todo", JSON.stringify(List));
    showlist();
}
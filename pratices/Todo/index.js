function addmore() {
    let name = document.getElementById('name').value;
    let mylist = document.getElementById('mylist');

    let li = document.createElement('li');
    li.textContent = name;

    mylist.appendChild(li);
    }
let input = document.getElementById('input');

function cacl(num){
       input.value += num
}

function equal(){
    if( input.value == ''){
        alert('invalid')
    }else{
        input.value = eval(input.value);
    }
}

function clear
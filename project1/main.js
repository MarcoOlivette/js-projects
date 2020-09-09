function palpite(){
    var randomNumber = Math.round(Math.random() * 100);
    var input = document.getElementById('input').value;

    if(input != randomNumber){
        var element = document.createElement('spam');
        element.innerText = "try again";
        document.body.appendChild(element);
    }else{
        var element = document.createElement('spam');
        element.innerText = "asdfasdfasdfsdaf";
        document.body.appendChild(element);
    }
}
function f(){
    alert("Funcionou")
}

function f1(){
    console.log("Outra função")
}

window.onload = function(){
    let h1 = document.getElementsByTagName("h1")[0];

    h1.addEventListener("click", f1)
}
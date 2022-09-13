let  view =document.getElementById("view")
function inputvalue(value) {
    view.innerHTML += value;
}
function result() {
    let result = eval(view.innerHTML)
    view.innerHTML = result;
}
function  xoa() {
    view.innerHTML=""
}


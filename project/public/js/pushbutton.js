const body = document.createElement("div");

export default function push_Button(root){
    const body = pushButton();
    body.addEventListener("click", function() {
        history.pushState({data : `push`}, `title을 pushState로`, `/pushpush`)});

    root.appendChild(body);
}


function pushButton(){
    body.innerHTML = "pushButton";
    return body;
}


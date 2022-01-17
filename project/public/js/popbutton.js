const body = document.createElement("div");

export default function pop_Button(root){
    const body = popButton();
    body.addEventListener("click", function () {
        history.replaceState({ data: 'replace' }, 'title을 replaceState로', '/replace');
    });
    window.addEventListener('popstate', function () {
        console.log('popstate', history.state);
        document.querySelector('#root').innerHTML = JSON.stringify(history.state);
    });
    root.appendChild(body);
}

function popButton(){
    body.innerHTML = "popbutton";
    return body;
}
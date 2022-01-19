const body = document.createElement("div");


export default function login_Page_Button(){
    const body = loginpage();
    body.className = "loginpage";
    body.addEventListener("click", () => console.log("hello you clicked loginpage"));
    root.appendChild(body);
}

function loginpage(){
    body.innerHTML = "loginpage";
    return body;
}

const body = document.createElement("div");


export default function main_Page_Button(){
    const body = mainPage();
    body.className = "mainPage";
    body.addEventListener("click", () => console.log("hello you clicked mainPage"));
    root.appendChild(body);
}

function mainPage(){
    body.innerHTML = "mainPage";
    return body;
}

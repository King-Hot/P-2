import push_Button from './pushbutton.js';
import pop_Button from './popbutton.js';
import main_Page_Button from './mainpage.js';

const root = document.querySelector("#root");

//console.log("hello main loaded");

main_Page_Button(root);
push_Button(root);
pop_Button(root);
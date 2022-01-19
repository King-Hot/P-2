import push_Button from './pushbutton.js';
import pop_Button from './popbutton.js';
import Main from './mainpage.js';
import LogIn from './loginpage.js';



const router = async() => {
    const routes = [
        {path: "/", view: Main},
        {path: "/LogIn", view : LogIn},
    ];

    const pageMatches = routes.map((route) => {
        return {
          route: route, 
          isMatch: route.path === location.pathname,
        };
      });

    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);
    
    if(!match){
        match = {
            route: routes[0],
            isMatch: true,
        };
    }
    
    match.route.view();

};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo("/" + e.target.id);
        }
    });
    router();
});

window.addEventListener("popstate", () => {
    router();
});
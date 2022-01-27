import "../css/index.scss";

import "./google";

document.addEventListener("DOMContentLoaded", () => {
    const toTop = document.querySelector(".c-to-top");
    if (toTop && document.body.scrollHeight / window.innerHeight > 1.3) {
        toTop.classList.add("c-to-top--active");
        toTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    const langSwitch = document.querySelector('.c-lang');
    if(langSwitch){
        langSwitch.addEventListener('click', function(e){
            if(e.target.closest('.c-lang__val')){
                langSwitch.classList.toggle('c-lang--opened');
            }
        });
        [].forEach.call(langSwitch.querySelectorAll('.c-lang__options a'), link => {
            const curr = link.getAttribute('href');
            link.setAttribute('href', curr.substring(0,3) + window.location.pathname.substring(3));
        });
    }

    const extLinks = document.querySelectorAll("a");
    [].forEach.call(extLinks, (a) => {
        const link = a.getAttribute("href");
        if (link.indexOf("http") === 0) {
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener");
        }
    });

});

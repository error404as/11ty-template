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

    const currentLang = document.querySelector('html').getAttribute('lang');
    if (currentLang) {
        window.localStorage.setItem('locale', currentLang);
    }

    const langSwitch = document.querySelector('.c-lang');
    if(langSwitch){
        langSwitch.addEventListener('click', function(e){
            if(e.target.closest('.c-lang__val')){
                langSwitch.classList.toggle('c-lang--opened');
            }
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

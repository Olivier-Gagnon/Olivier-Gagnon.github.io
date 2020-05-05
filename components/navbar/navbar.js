// Define pages and link here
const pages = [
    {
        selector: "home",
        target: "section-container",
        section: "home",
        mathjax: true,
        script: false
    },
    {
        selector: "chart-test",
        target: "section-container",
        section: "chart-test",
        mathjax: true,
        script: true
    }
]

//helper function to 
function loadPage(page) {
    const {selector, target, section, mathjax, script } = page
    return function () {
        $(`#${selector}`).click(function () {
            $(`#${target}`).load(`/sections/${section}/${section}.html`, function () {

                if(mathjax){
                    MathJax.typeset([`#${target}`])
                }

                if(script){
                    $.getScript(`/sections/${section}/${section}.js`)
                }
                
                
                $('.activated').removeClass('activated')
                $(`#${selector}`).addClass("activated")

            });
        });
    }
}

$(document).ready(function () {
    for (page of pages) {
        loadPage(page)();
    }
});

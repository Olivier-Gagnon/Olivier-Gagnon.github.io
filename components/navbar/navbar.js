// Define pages and link here
const pages = [
    {
        selector: "home",
        target: "section-container",
        section: "home",
        mathjax: true,
        highlighted: false
    }
]

//helper function to 
function loadPage(page) {
    const { selector, target, section, mathjax, script, highlighted } = page
    return function () {
        $(`#${selector}`).click(function () {
            $(`#${target}`).load(`/sections/${section}/${section}.html`, function () {

                // Make sure mathjax load correctly
                if (mathjax) {
                    MathJax.typeset([`#${target}`])
                }

                // Make sure script load correctly
                $.getScript(`/sections/${section}/${section}.js`)
                
                if (highlighted) {
                    $('.activated').removeClass('activated')
                    $(`#${selector}`).addClass("activated")
                }

            });

        });
    }
}

$(document).ready(function () {
    for (page of pages) {
        loadPage(page)();
    }
});

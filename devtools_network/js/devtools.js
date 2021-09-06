// [Extending DevTools](https://developer.chrome.com/docs/extensions/mv3/devtools/)

/*
Caution
This page was migrated directly from the MV2 documentation set.
It has not yet been validated for compliance with Manifest V3.
*/

function Devtools_CreateSidebarPane() {
    if (chrome.devtools) {
        chrome.devtools.panels.elements.createSidebarPane("Sidebar Pane",
            function(sidebar) {
                sidebar.setPage("../html/devtools.html");
                sidebar.setHeight("8ex");
            }
        );
    }
}

function Devtools_network_onRequestFinished() {
    if (chrome.devtools) {
        chrome.devtools.network.onRequestFinished.addListener(
            function(request) {
                // if (request.response.bodySize > 40 * 1024) {
                //     chrome.devtools.inspectedWindow.eval(
                //         'console.log("Large image: " + unescape("' +
                //         escape(request.request.url) + '"))');
                // }
                fill_Element_Id_p1(request.request.url, 0);
            }
        );
    }
}


function fill_Element_Id_p1(word, i = 1) {
    var newP1 = document.getElementById("p1");
    if (newP1 && word) {
        if (i == 1) {
            newP1.innerHTML += "<br>" + word;

        } else {
            newP1.innerHTML += "<br>" + '<img src="' + word + '" width="50" heigh="50" alt=""></img>';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fill_Element_Id_p1("I'm devtools.js");
    Devtools_CreateSidebarPane();
    Devtools_network_onRequestFinished();
});
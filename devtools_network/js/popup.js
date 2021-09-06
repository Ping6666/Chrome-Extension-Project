function fill_Element_Id_p(fill_content) {
    var Element_Id_p = document.getElementById("p");
    if (Element_Id_p && fill_content) {
        Element_Id_p.innerHTML += "<br>" + fill_content;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fill_Element_Id_p("HI, I'm popup.js");
});
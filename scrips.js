const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function getKristinasTitle()
{
    var titleArray= new Array("disabled person","senior UX designer", "person", "illustrator", "video game enthusiast", "design systems expert", "design generalist");
    var random = titleArray[Math.floor(Math.random() * titleArray.length)];
   document.getElementById("res").innerHTML=random;
}
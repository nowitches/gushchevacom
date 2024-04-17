const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function getKristinasTitle()
{
    var titleArray= new Array("Kristina Gushcheva-Keippilä is a product design leader","Kristina Gushcheva-Keippilä is a product designer", "Kristina Gushcheva-Keippilä is a design generalist", "Kristina Gushcheva-Keippilä is an accessibility expert", "Kristina Gushcheva-Keippilä is a trivia collector", "Kristina Gushcheva-Keippilä thinks in systems", "Kristina Gushcheva-Keippilä is a disabled person");
    var random = titleArray[Math.floor(Math.random() * titleArray.length)];
   document.getElementById("res").innerHTML=random;
}

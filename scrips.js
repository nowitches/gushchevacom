const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function getKristinasTitle()
{
    var titleArray= new Array("Kristina Gushcheva-Keippilä is a design leader","Kristina Gushcheva-Keippilä is a product designer", "Kristina Gushcheva-Keippilä is an experienced design mentor", "Kristina Gushcheva-Keippilä is a digital illustrator", "Kristina Gushcheva-Keippilä is a video game enthusiast", "Kristina Gushcheva-Keippilä is a writer", "Kristina Gushcheva-Keippilä is a design generalist", "Kristina Gushcheva-Keippilä is an accessibility expert", "Kristina Gushcheva-Keippilä is a trivia collector", "Kristina Gushcheva-Keippilä is a systems thinking enthusiast", "Kristina Gushcheva-Keippilä is a disabled person");
    var random = titleArray[Math.floor(Math.random() * titleArray.length)];
   document.getElementById("res").innerHTML=random;
}

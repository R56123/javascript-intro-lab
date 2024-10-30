
console.info("Hello JS");

document.getElementById("myHeading").innerHTML = "Rameen Burdabar";

document.querySelector("nav>ul>li").setAttribute("class", "currentPage");

document.querySelector("nav ul li a").setAttribute("href", "https://www.google.co.uk");

let colourButtons = document.querySelectorAll(".colPicker");
console.dir(colourButtons);


for(let i=0; i< colourButtons.length; i++)
    
{
colourButtons[i].style.backgroundColor = "grey";
        
colourButtons[i].addEventListener("click", function() {
    if (colourButtons[i].classList.contains("red")) 
        {
        document.body.setAttribute("class" , "redBack");
        }
    else if (colourButtons[i].classList.contains("green")) 
        {
        document.body.setAttribute("class", "greenBack")
        }
    else if (colourButtons[i].classList.contains("blue")) 
        {
        document.body.setAttribute("class", "blueBack")
        }
    else if (colourButtons[i].classList.contains("reset")) 
        {
        document.body.removeAttribute("class");
        }
    else if (colourButtons[i].classList.contains("dark"))
        {
        document.body.setAttribute("class", "darkBack")
        }
    });
}
    
document.getElementById("myTestBtn").addEventListener("click", function() {
console.info("Hi, I was clicked");
});

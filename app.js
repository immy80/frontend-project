const links = document.getElementsByClassName('links')

for (let i = 0; i < links.length; i++){
    links[i].addEventListener('mouseover', ()=>{
        document.querySelector('.overlay').classList.remove('hide');
        document.querySelector('.overlay').classList.add('show');
        if(links[i].textContent === "Ferris Wheel-") {
            console.log(links[i].textContent)
            document.getElementById('main-image').src = "./img/fw-image.jpg"
        }else if(links[i].textContent === "Reflection-") {
            console.log(links[i].textContent)
            document.getElementById('main-image').src = "./img/r-image.jpg"
        }else if(links[i].textContent === "Underground-") {
            console.log(links[i].textContent)
            document.getElementById('main-image').src = "./img/u-image.jpg"
        }else  {
            console.log(links[i].textContent)
            document.getElementById('main-image').src = "./img/w-image.jpg"
        }
    })

    links[i].addEventListener('mouseout', ()=>{
        document.querySelector('.overlay').classList.remove('show');
        document.querySelector('.overlay').classList.add('hide');
        
    })
}
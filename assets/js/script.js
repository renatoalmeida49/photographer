let images = document.querySelectorAll('img')
let modal = document.querySelector('.modal')
let imageModal = document.querySelector('.modal img')

modal.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('show')
})

images.forEach(image => {
    image.addEventListener('click', () => {
        imageModal.setAttribute("src", image.getAttribute("src"))

        modal.classList.toggle('show')
    })
})

// ----------- SCROLL SUAVE

let linksInternos = document.querySelectorAll('a[href^="#"')

linksInternos.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        let href = event.currentTarget.getAttribute('href')
        let section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})
const balloon = document.querySelector('.balloon')

let b_width = 20
b_height = 20

balloon.style.width = b_width + 'px'
balloon.style.height = b_height + 'px'
window.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {

        b_height += 10
        b_width += 10

        balloon.style.width = b_width + 'px'
        balloon.style.height = b_height + 'px'


    } else if (event.key == 'ArrowDown') {
        b_height -= 10
        b_width -= 10

        balloon.style.width = b_width + 'px'
        balloon.style.height = b_height + 'px'

    }

})
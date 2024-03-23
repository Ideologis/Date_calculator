// Inputs
const dayipt = document.querySelector('#days')
const monthipt = document.querySelector('#month')
const yearsipt = document.querySelector('#years')
const form_input = document.querySelector('form')
const idea = document.querySelector('h2')
//output
const dayotp = document.querySelector('.d')
const monthotp = document.querySelector('.m')
const yearotp = document.querySelector('.y')
//Time format
const date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]

function validate() {
    const inputs = document.querySelectorAll('input')
    let validity = true
    inputs.forEach(item => {
        const parent = item.parentElement
        if (!item.value) {
            item.style.borderColor = 'red'
            parent.querySelector('small').innerText = 'This field is Required'
            validity = false
        } else if (monthipt.value > 12) {
            monthipt.style.borderColor = 'red'
            monthipt.parentElement.querySelector('small').innerText =
                'Must be a valid month'
            validity = false
        } else if (dayipt.value > 31) {
            dayipt.style.borderColor = 'red'
            dayipt.parentElement.querySelector('small').innerText =
                'must be a valid day'
            validity = false
        } else {
            item.style.borderColor = 'black'
            parent.querySelector('small').innerText = ''
            validity = true
        }
    })
    return validity;
}

function handleSubmit(e) {
    e.preventDefault()
    if (validate()) {

        if (dayipt.value > day) {
            day = day + months[month - 1]
            month = month - 1
        }
        if (monthipt.value > month) {
            month = month + 12
            year = year - 1
        }
        const D = day - dayipt.value
        const M = month - monthipt.value
        const Y = year - yearsipt.value

        dayotp.innerHTML = D
        monthotp.innerHTML = M
        yearotp.innerHTML = Y

        idea.classList.add('ident')
    }
}
form_input.addEventListener('submit', handleSubmit)

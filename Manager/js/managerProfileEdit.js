const name = document.getElementById('name')
const gender_select = document.getElementById('gender_select')
const father_name = document.getElementById('father_name')
const mother_name = document.getElementById('mother_name')
const dob =  document.getElementById('dob')
const email = document.getElementById('email')
const role = document.getElementById('role')
const address = document.getElementById('address')
const ph_no = document.getElementById('ph_no')
const errorElement = document.getElementById('error')

var today = new Date()
var dd = parseInt(today.getDate())
var mm = parseInt(today.getMonth()) + 1
var yyyy = parseInt(today.getFullYear());

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd

dob.setAttribute("max",today)

form.addEventListener('submit', (e) => {
    let messages = []
    var reg = '/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/'


    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (name.value.length < 3) {
        messages.push('Name too short')
    }

    if(!(reg.test(ph_no))) {
        messages.push('Phone number not valid')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = '** ' + messages.join(', ')
    }
})

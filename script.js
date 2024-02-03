const scriptURL = 'https://script.google.com/macros/s/AKfycbwJUu8_kis0PzEfWaPqaXxoBb6CF6fp98MREC-NV-6pgqr26Cwz9txtOsdzxGwaMCCdSA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "message sent sucessfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
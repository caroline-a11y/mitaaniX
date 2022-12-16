let shirts = []
let id = 0;
function dataFetch(){
    fetch (' http://localhost:3000/shirts')
    .then(response => response.json()
    ).then(data => data)
}

const form1 = document.getElementById("form1")
console.log (form1)
form1.addEventListener("submit", (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const size =e.target.sizeInput.value
    const color =e.target.colorInput.value
    const shirtNo = e.target.shirtInput.value
    const donation = e.target.donationInput.value

    fetch("http://localhost:3000/shirts", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            "email": email,
            "size": size,
            "color": color,
            "numberOfShirts": shirtNo,
            "donation": donation
        })
       
    })
    form1.reset()
})

let shirts = []
let id = 0;
fetch (' http://localhost:3000/shirts')
.then(response => response.json()
).then(data =>{
    amountDetailUpdater(data[Math.ceil(math.random()*1000) %data.length])
    amountUpdata(data)
})
function amountUpdater(shirts){
    for(let amount of shirts){
        amount(shirts)
    }
    function amount(shirts)
    const amount = document.getElementById('number_of_shirts')
    let amount = document.createElement('amount')
        amount.addEventListener('click', event=>{
            amountDetailUpdater(number)
        })
        amount.setAttribute(amount.number)
        amount.appendChild(amount)

}
function amountDetailUpdater(number){
    let amount = document.querySelector("amount")
    amount.textContent = number.amount
}
document.querySelector('form'.addEventListener('submit',(e)=>{
    e.preventDefault()
    let formData = {
        number_of_shirts: e.size.color.value
    }
    const fetchconfigure = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
        body : json.stringify(formData)
    }
    fetch(" http://localhost:3000/shirts", fetchconfigure)
    .then(response=>{
        return response.json()
    }).then(data=>{
        
    })
}))
function buyingShirts(shirts){

}
let button = document.getElementById('buy')
button.addEventListener('click',()=> {
    
})
function sizes(sizes){

}
let change = document.getElementById('size')
change.addEventListener('click', () => {

})
function colour(colour){

}
let click = document.getElementById('click')
click.addEventListener('click', () => {

})
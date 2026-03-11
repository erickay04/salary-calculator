const form = document.getElementById("incomeForm")
const salaryInput = document.getElementById("salary")
const taxInput = document.getElementById("tax")
const taxType = document.getElementById("taxType")
const netTotal = document.getElementById("netsal")


function calculateNet(e){
    e.preventDefault()
    const salary = Number(salaryInput.value) || 0
    const taxValue = Number(taxInput.value) || 0

    let taxAmount = 0

    if (taxType.value === "percent"){
        taxAmount = (taxValue / 100) * salary;
    } else {
        taxAmount = taxValue;
    }

    const netsalary = salary - taxAmount

    netTotal.innerText = netsalary.toFixed(2)

    let salLary = document.getElementsByClassName("num-inp")

    calculatExpenses()
}

salaryInput.addEventListener("input", calculateNet);
taxInput.addEventListener("input", calculateNet);
taxType.addEventListener("change", calculateNet);

const container = document.getElementById("spendings-i")
const defaultCount = 5;

const containers = document.getElementById("spendings-i")

// Attach event listener for all current and future expense inputs
container.addEventListener("input", function(e){
    if (e.target.classList.contains("num-inp")) {
        calculatExpenses();
    }
});

function addMore(){
    let div = document.createElement("div")
    div.className = "income extra-input"
    
    div.innerHTML = `<input type="text">
                        <input type="number" class="num-inp">`
    
    container.appendChild(div)
}

function removeLast() {
    const extras = container.getElementsByClassName("extra-input")

    if (extras.length > 0) {
        extras[extras.length -1].remove()
    }
}

const expenseInputs = document.querySelectorAll(".num-inp")
const totalexpenses = document.getElementById("totale")
const finalBalance = document.getElementById("bal")
const netBalance = document.getElementById("net")

function calculatExpenses() {
    let expenseInputs = document.querySelectorAll(".num-inp")

    let total = 0

    expenseInputs.forEach(input => {
        total += Number(input.value) || 0
    }) 
    totalexpenses.innerText = total

    const salary = Number(salaryInput.value) || 0
    const taxValue = Number(taxInput.value) || 0

    let taxAmount = 0

    if (taxType.value === "percent"){
        taxAmount = (taxValue / 100) * salary;
    } else {
        taxAmount = taxValue;
    }



    const netLary = salary - taxAmount
    netBalance.innerText = netLary

    const balTotal = netLary - total
    finalBalance.innerText = balTotal.toFixed(2)
}

expenseInputs.forEach(input => {
    input.addEventListener("input", calculatExpenses)
})

function resetAll() {
    let numInputs = document.getElementsByClassName("num-inp")
    let salInputs = document.getElementById("salary")
    let taxInputs = document.getElementById("tax")

    Array.from(numInputs).forEach(input => input.value = "")

    const allInputs = [salInputs, taxInputs]

    allInputs.forEach(input => input.value = "")

    document.getElementById("netsal").innerText = "0.00"
    document.getElementById("totale").innerText = "0.00"
    document.getElementById("net").innerText = "0.00"
    document.getElementById("bal").innerText = "0.00"
}


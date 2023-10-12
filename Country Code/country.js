let us = document.querySelector("#us")
let can = document.querySelector("#can")
let pak = document.querySelector("#pak")
let uk = document.querySelector("#uk")
let select_country = document.querySelector("#select-c")
let country = document.querySelector(".country")
let button = document.querySelector(".btn")
let box = document.querySelector(".box")

button.addEventListener("click", function (e) {
    alert("Your Form has been Submitted Successfully")
})

select_country.addEventListener("change", function (e) {
    let state = document.querySelector(".state")
    let code = document.querySelector(".zip1")
    if (select_country.value == "United-States") {
        state.style.display = "block"
        code.style.display = "block"
        state.setAttribute("value", "Indiana")
        code.setAttribute("value", "41600")
    }
    else if (select_country.value == "Pakistan") {
        state.style.display = "block"
        code.style.display = "block"
        state.setAttribute("value", "Punjab")
        code.setAttribute("value", "090078601")
    }
    else if (select_country.value == "Canada") {
        state.style.display = "block"
        code.style.display = "block"
        state.setAttribute("value", "Alberta")
        code.setAttribute("value", "T9W")
    }
    else if (select_country.value == "United-Kingdom") {
        state.style.display = "block"
        code.style.display = "block"
        state.setAttribute("value", "Scotland")
        code.setAttribute("value", "785623")
    }
    else if (select_country.value == "Mexico") {
        state.style.display = "block"
        code.style.display = "block"
        state.setAttribute("value", "Jalisco")
        code.setAttribute("value", "98345")
    }
})
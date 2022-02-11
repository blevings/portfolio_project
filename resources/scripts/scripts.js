let checkBox = document.querySelector("#toggle")

let theme = document.querySelector("#theme-link")


checkBox.addEventListener("click", function() {
    if (theme.getAttribute("href") === "./resources/css/light-theme.css") {
        theme.href = "./resources/css/dark-theme.css";
    } else {
        theme.href = "./resources/css/light-theme.css";
    }
})

// ("href") === "light-theme.css")


// checkBox.addEventListener("change", function() {
//     if (checkBox.checked === true) {
//         theme.href = "./resources/css/dark-theme.css";
//     } else if (checkBox.unchecked === true) {
//         theme.href = "./resources/css/light-theme.css";
//     }
// })

// let document = document.querySelector('html')



// document.addEventListener
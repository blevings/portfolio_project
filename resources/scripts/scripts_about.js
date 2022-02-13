let checkBox = document.querySelector("#toggle")

let theme = document.querySelector("#theme-link")
let githubImg = document.querySelector("#githubImg");
let toggleLabel = document.querySelector("#toggle-label");



checkBox.addEventListener("click", function() {
    if (theme.getAttribute("href") === "../css/light-theme_about.css") {
        theme.href = "../css/dark-theme_about.css";
        githubImg.src = "../images/GitHub_Logo_White.png";
        toggleLabel.textContent = "Light Mode:";
    } else {
        theme.href = "../css/light-theme_about.css";
        githubImg.src = "../images/GitHub_Logo.png";
        toggleLabel.textContent = "Dark Mode:";

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
// js for nav icon 

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("on")
    }

})

// js for second section 

document.addEventListener("click", e => {
    // for sub menus the dropdon comes here 
    const isOptionButton = e.target.matches("[data-option-button]")
    if (!isOptionButton && e.target.closest("[data-option]") != null) return

    let currentOption
    if (isOptionButton) {
        currentOption = e.target.closest("[data-option]")
        currentOption.classList.toggle("active")
    }

    document.querySelectorAll(".allOption.active").forEach(option => {
        if (option === currentOption) return
        option.classList.remove("active")
    })
})

document.addEventListener('click', e => {
    let elements = document.querySelectorAll(".active")
    // console.log(elements)
    if (elements.length > 0) {
        document.querySelectorAll(".allOption").forEach(element => {
            // console.log(element)
            if (!element.classList.contains('active')) {
                element.style.display = "none";
                document.getElementById("news").style.display = 'none';
            }
        })
    }
    else {
        document.querySelectorAll(".allOption").forEach(element => {
            // console.log(element)
            if (!element.classList.contains('active')) {
                element.style.display = "block";
                document.getElementById("news").style.display = 'block';
            }
        })

    }
})

// js for third layer 
document.addEventListener("click", e => {
    // for sub menus the dropdon comes here 
    const isOptionButton = e.target.matches("[data-second-sub-options]")
    if (!isOptionButton && e.target.closest("[data-second-sub]") != null) return

    let currentOption
    if (isOptionButton) {
        currentOption = e.target.closest("[data-second-sub]")
        currentOption.classList.toggle("activated")
    }

    document.querySelectorAll(".allOption.activated").forEach(option => {
        if (option === currentOption) return
        option.classList.remove("activated")
    })
})


// big screen options and suboptions 
document.addEventListener("click", e => {

    if (e.target.matches(".big-nav-option")) {
        e.stopPropagation();

        document.getElementById("scroll-option").classList.add("down");

        // sub options of the main options 
        if (e.target.matches("#solutions")) { 
            document.getElementById("nav-scorelled-section").innerHTML = `
            <button id ="Bank">Bank & Identity</button>
            <button id ="Retail">Retail & Healthcare</button>
            <button id ="PIN">PIN PAD</button>
            <button id ="Public">Public & Transportation</button>
            <button id ="Information">Information & Augmented Reality</button>
            <button id ="Payment">Payment terminals</button>
            <button id ="Development">Development</button>
        `;
        }

        else if (e.target.matches("#industries")) {
            document.getElementById("nav-scorelled-section").innerHTML = `
            <button>Bank</button>
            <button>Healthcare</button>
            <button>Security Informaiton</button>
        `;
        }

        else if (e.target.matches("#products")) {
            document.getElementById("nav-scorelled-section").innerHTML = `
            <button>ATM/CDM/CRS</button>
            <button>Healthcare Products</button>
            <button>PIN PAD</button>
        `;
        }

        else if (e.target.matches("#company")) {
            document.getElementById("nav-scorelled-section").innerHTML = `
            <button>About us</button>
            <button>Leadership</button>
            <button>History</button>
            <button>Certification</button>
        `;
        }

        else if (e.target.matches("#languages")) {
            document.getElementById("nav-scorelled-section").innerHTML = ` 
            <button><span>简体中文</span> <img src="../images/Flag-of-Chinese.svg" alt=""></button>

            <button><span>Deutsch</span><img src="../images/Flag_of_Germany.svg.png" alt=""></button>

            <button><span>Français</span> <img src="../images/Flag_of_France.svg.webp" alt=""></button>
        `;
        }

        else if (e.target.matches("#search")) {
             
            document.getElementById("nav-scorelled-section").innerHTML = ` 
             <input type="text">
            <button> Search</button>
           
        `;
        }

    }

    if (e.target.matches('nav')) {
        // console.log("from nav")
        document.getElementById("scroll-option").classList.remove("down");
    }
})


// if (e.target.matches("#solutions")) { 
//     document.getElementById("nav-scorelled-section").innerHTML = `
//     <button id ="Bank">Bank & Identity</button>
//     <button id ="Retail">Retail & Healthcare</button>
//     <button id ="PIN">PIN PAD</button>
//     <button id ="Public">Public & Transportation</button>
//     <button id ="Information">Information & Augmented Reality</button>
//     <button id ="Payment">Payment terminals</button>
//     <button id ="Development">Development</button>
// `;
// }

document.addEventListener("click", e=>{
    
    if(e.target.matches('#Bank')){
        document.getElementById('nav-scorelled-sub-section').innerHTML=`
        hellow world`
    }
})
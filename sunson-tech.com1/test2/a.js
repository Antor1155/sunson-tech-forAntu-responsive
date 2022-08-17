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

        // this code will handle the sub sub common section to display development status 
        document.getElementById('nav-scorelled-sub-section').innerHTML = `<div class="under-development">
        <h2>this site in still under development</h2>
        </div>`

        document.getElementById("scroll-option").classList.add("down");
        document.getElementById("nav-scorelled-sub-section").style.display = 'flex';

        // sub options of the main options 
        if (e.target.matches("#solutions")) {
            document.getElementById("scroll-option").style.gridTemplateColumns = '3fr 8fr ';

            document.getElementById("nav-scorelled-section").innerHTML = `
            <button id ="Bank">Bank & Identity</button>
            <button id ="Retail">Retail & Healthcare</button>
            <button id ="PIN">PIN PAD</button>
            <button id ="Public">Public & Transportation</button>
            <button id ="Information">Information & Augmented</button>
            <button id ="Payment">Payment terminals</button>
            <button id ="Development">Development</button>
        `;

            document.getElementById('nav-scorelled-sub-section').innerHTML = `
                    <a href="notfound.html">Cash Dispenser ATM</a>
                    <a href="notfound.html">Cash Deposit Machine ATM</a>
                    <a href="notfound.html">Smart Teller Machine STM</a>
                    <a href="notfound.html">Currency Exchange Kiosk</a>`

        }

        else if (e.target.matches("#industries")) {
            document.getElementById("scroll-option").style.gridTemplateColumns = '3fr 8fr ';

            document.getElementById("nav-scorelled-section").innerHTML = `
            <button>Bank</button>
            <button>Healthcare</button>
            <button>Security Informaiton</button>
        `;
        }

        else if (e.target.matches("#products")) {
            document.getElementById("scroll-option").style.gridTemplateColumns = '3fr 8fr ';

            document.getElementById("nav-scorelled-section").innerHTML = `
            <button>ATM/CDM/CRS</button>
            <button>Healthcare Products</button>
            <button>PIN PAD</button>
        `;
        }

        else if (e.target.matches("#company")) {
            document.getElementById("scroll-option").style.gridTemplateColumns = '1fr';
            document.getElementById("nav-scorelled-sub-section").style.display = 'none';

            document.getElementById("nav-scorelled-section").innerHTML = `
            <div>

            <div class="company-section">
            <img src="../images/underConstruction.webp" alt="">
            <button>About us</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum placeat enim temporibus, nobis necessitatibus. Molestiae ullam animi eaque sit?</p>
            <a href="notfound.html"> Learn more > </a>
            </div>

            <div class="company-section">
            <img src="../images/underConstruction.webp" alt="">
            <button>Leadership</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum placeat enim temporibus, nobis necessitatibus. Molestiae ullam animi eaque sit?</p>
            <a href="notfound.html"> Learn more > </a>
            </div>

            <div class="company-section">
            <img src="../images/underConstruction.webp" alt="">
            <button>History</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum placeat enim temporibus, nobis necessitatibus. Molestiae ullam animi eaque sit?</p>
            <a href="notfound.html"> Learn more > </a>
            </div>

            <div class="company-section">
            <img src="../images/underConstruction.webp" alt="">
            <button>Certification</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laborum placeat enim temporibus, nobis necessitatibus. Molestiae ullam animi eaque sit?</p>
            <a href="notfound.html"> Learn more > </a>
            </div>

            </div>

        `;
        }

        else if (e.target.matches("#languages")) {
            document.getElementById("scroll-option").style.gridTemplateColumns = '3fr 8fr ';

            document.getElementById("nav-scorelled-section").innerHTML = ` 
            <button><span>简体中文</span> <img src="../images/Flag-of-Chinese.svg" alt=""></button>

            <button><span>Deutsch</span><img src="../images/Flag_of_Germany.svg.png" alt=""></button>

            <button><span>Français</span> <img src="../images/Flag_of_France.svg.webp" alt=""></button>
        `;
        }

        else if (e.target.matches("#search")) {
            document.getElementById("scroll-option").style.gridTemplateColumns = '1fr';
            document.getElementById("nav-scorelled-sub-section").style.display = 'none';


            document.getElementById("nav-scorelled-section").innerHTML = ` 
            <div id='searchN'>
                <input type="text" placeholder="search" style="width: 100%; ">
                <button > Search</button>
           </div>
        `;
        }

    }

    if (e.target.matches('nav')) {
        // console.log("from nav")
        document.getElementById("scroll-option").classList.remove("down");
    }

})


document.addEventListener("click", e => {

    if (e.target.matches('#Bank')) {
        document.getElementById('nav-scorelled-sub-section').innerHTML = `
                    <a href="notfound.html">Cash Dispenser ATM</a>
                    <a href="notfound.html">Cash Deposit Machine ATM</a>
                    <a href="notfound.html">Smart Teller Machine STM</a>
                    <a href="notfound.html">Currency Exchange Kiosk</a>`
    }

    if (e.target.matches('#Retail')) {
        document.getElementById('nav-scorelled-sub-section').innerHTML = `
                        <a href="notfound.html">Hospital check-in-koisk</a>
                        <a href="notfound.html">Self-service Healthcare Kiosk</a>
                        <a href="notfound.html">Mobile Charging Station</a>
                        <a href="notfound.html">Hotel Check-in Kiosk</a>`
    }

    if (e.target.matches('#PIN')) {
        document.getElementById('nav-scorelled-sub-section').innerHTML = `
                        <a href="notfound.html">EPP V4, V5, V6</a>
                        <a href="notfound.html">Wincor EPP</a>
                        <a href="notfound.html">Full Metal Keyboard</a>
                        <a href="notfound.html">NON PCL Pinpad</a>`
    }

    if (e.target.matches('#Public')) {
        document.getElementById('nav-scorelled-sub-section').innerHTML = `
                        <a href="notfound.html">Ticket Vending Kiosk</a>
                        <a href="notfound.html">Card Dispenser Kiosk</a>
                        <a href="notfound.html">Card Top-up Kiosk</a>
                        <a href="notfound.html">Parking Payment Kiosk</a>
                        <a href="notfound.html">Un-attendant Payment Terminal</a>`
    }

    if (e.target.matches('#Information')) {
        document.getElementById('nav-scorelled-sub-section').innerHTML = `
        <a href="notfound.html">Information Kiosk</a>
        <a href="notfound.html">Digital Signage</a>
        <a href="notfound.html">Way Finding Solutions</a>
        <a href="notfound.html">Queuing System</a>
        <a href="notfound.html">Un-attendant Payment Terminal</a>`
    }

    if (e.target.matches('#Payment')) {
        document.getElementById('nav-scorelled-sub-section').innerHTML = `
        <a href="notfound.html">Bitcoin Payment Kiosk</a>
        <a href="notfound.html">Cash Payment Kiosk</a>
        <a href="notfound.html">Wall Mount Payment Kiosk</a>
        <a href="notfound.html">Cashless Payment Kiosk</a>`
    }

    if (e.target.matches('#Development')) {
        document.getElementById('nav-scorelled-sub-section').innerHTML = `
        <a href="notfound.html">Hardware</a>
        <a href="notfound.html">Software</a>
        <a href="notfound.html">Information Security</a>`
    }
})


// closing the nav 
document.addEventListener("click", e => {
    if (e.target.matches('.video-banner, .common-Width, h1, p')) {
        document.getElementById("scroll-option").classList.remove("down");
    }
})
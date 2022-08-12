// js for nav icon 

document.addEventListener('click', e =>{
    const isDropdownButton  = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest("[data-dropdown]") !=null) return

    let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("on")
    }

})

// js for second section 

document.addEventListener("click", e=>{
    // for sub menus the dropdon comes here 
    const isOptionButton  = e.target.matches("[data-option-button]")
    if(!isOptionButton && e.target.closest("[data-option]") !=null) return

    let currentOption
    if(isOptionButton) {
        currentOption = e.target.closest("[data-option]")
        currentOption.classList.toggle("active")
    }

    document.querySelectorAll(".allOption.active").forEach(option =>{
        if(option === currentOption) return
        option.classList.remove("active")
    })
})

document.addEventListener('click', e=>{
    let elements = document.querySelectorAll(".active")
    console.log(elements)
    if(elements.length >0){
        document.querySelectorAll(".allOption").forEach(element =>{
            console.log(element)
            if(!element.classList.contains('active')){
                element.style.display ="none";
                document.getElementById("news").style.display='none';
            }
        })
    }
    else{
        document.querySelectorAll(".allOption").forEach(element =>{
            console.log(element)
            if(!element.classList.contains('active')){
                element.style.display ="block";
                document.getElementById("news").style.display='block';
            }
        })

    }
})

// js for third layer 
document.addEventListener("click", e=>{
    // for sub menus the dropdon comes here 
    const isOptionButton  = e.target.matches("[data-second-sub-options]")
    if(!isOptionButton && e.target.closest("[data-second-sub]") !=null) return

    let currentOption
    if(isOptionButton) {
        currentOption = e.target.closest("[data-second-sub]")
        currentOption.classList.toggle("activated")
    }

    document.querySelectorAll(".allOption.activated").forEach(option =>{
        if(option === currentOption) return
        option.classList.remove("activated")
    })
})
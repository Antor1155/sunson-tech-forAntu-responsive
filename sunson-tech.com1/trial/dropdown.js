document.addEventListener('click', e =>{
    const isDropdownButton  = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest("[data-dropdown]") !=null) return

    let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }


    // for sub menus the dropdon comes here 
    // const isOption = e.target.matches("[data-option-button]")
    // if(!isOption && e.target.closest('[data-option]') != null) return

    // let curretnOption
    // if(isOption) {
    //     curretnOption = e.target.closest('[data-option]')
    // }

})
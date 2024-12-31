const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("list-container");

function addtask() {
    if (inputbox.value === '') {
        alert("Please add something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

// function alltaskchecked() {
//     const checkboxes = listcontainer.querySelectorAll('li')
//     const allchecked = Array.from(checkboxes).every(li => li.checked);
//     confetti();
// }


listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        confetti();
        savedata();
    }

    // else if(e.target.tagName === "LI"){
    //     e.target.classList.contains("checked");
    //     if(e.target.tagName === "LI"){
    //         e.target.classList.replace('checked','unchecked');
    //     }
    //     confetti();
    //     savedata();
    // }


    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);



function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();

function changebg() {
    const element = document.getElementById('cont');
    const currentColor = window.getComputedStyle(element).backgroundColor;
    
    if (currentColor === 'rgb(108, 92, 231)') { // Equivalent of #6c5ce7 in RGB
        element.style.backgroundColor = 'rgb(152, 255, 152)';
    } else if (currentColor === 'rgb(152, 255, 152)') { // Equivalent of red in RGB
        element.style.backgroundColor = '#6c5ce7';
    }

}


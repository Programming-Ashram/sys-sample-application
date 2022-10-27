let selection = document.querySelector('select');
let body = document.querySelector('body');
let sideNav = document.querySelectorAll('.sidebar-navigation li');

selection.addEventListener('change', function(){ 
    if(selection.value == 'default-theme'){
        body.classList.replace('sys-theme', 'default-theme');
        body.classList.replace('dark-theme', 'default-theme');
    }
    if(selection.value === 'dark-theme'){
        body.classList.replace('sys-theme', 'dark-theme');
        body.classList.replace('default-theme', 'dark-theme');
    }
})

for(let i = 0; i < sideNav.length; i++){
    sideNav[i].onclick = function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    }
}
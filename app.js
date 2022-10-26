let selection = document.querySelector('select');
let body = document.querySelector('body');

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



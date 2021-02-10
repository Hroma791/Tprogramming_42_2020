let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let table = document.querySelector('.table-main');

themeButton.onclick = function(){
    page.classList.toggle('dark-theme');
    table.classList.toggle('table-dark')
}


function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);    
}

function changeText(){
    const lightmode = 'Light Mode';
    const darkmode = 'Dark Mode';

    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightmode;
        h1.innerHTML = darkmode + ' ON';
        return;
    }
    
    button.innerHTML = darkmode;
    h1.innerHTML = lightmode + ' ON';
    return;
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode);
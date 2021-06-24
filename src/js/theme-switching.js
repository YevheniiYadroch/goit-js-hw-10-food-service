const input = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const bodyTheme = localStorage.getItem('theme');

if (bodyTheme === null) {
    localStorage.setItem('theme', 'light');
    body.classList.add('light-theme')
} if (bodyTheme === 'light') {
    body.classList.add('light-theme')
} if (bodyTheme === 'dark') {
    input.checked = 'true';
    body.classList.add('dark-theme')
};

const switchHandler = () => {
    const actualBodyTheme = localStorage.getItem('theme');
    if (actualBodyTheme === 'light') {
        localStorage.setItem('theme', 'dark');
        body.classList.remove('light-theme');
        return body.classList.add('dark-theme');
    } if (actualBodyTheme === 'dark') {
        localStorage.setItem('theme', 'light');
        body.classList.remove('dark-theme')
        return body.classList.add('light-theme');
    }
};

input.addEventListener('change', switchHandler);
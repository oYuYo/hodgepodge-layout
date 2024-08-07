
window.addEventListener('load', (event) => {
    let toggle = document.querySelector('.toggle_btn');
    toggle.addEventListener('click', NavOpen);
});

function NavOpen(){
    if(header.classList.contains('open')){
        header.classList.remove('open')
    } else {
        header.classList.add('open');
    }
}
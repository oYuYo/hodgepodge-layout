window.addEventListener('load', (event) => {
    let buttons = document.querySelectorAll('button')
    buttons.forEach(btn => {
        btn.addEventListener('click', event => {
            let el = document.getElementsByTagName('body')[0];
            switch (btn.id){
                case 'btnA':
                    el.style.setProperty('animation-name', 'bgchange-a');
                    el.style.setProperty('animation-duration', '1.5s');
                    break;
                case 'btnB':
                    el.style.setProperty('animation-name', 'bgchange-b');
                    el.style.setProperty('animation-duration', '1.0s');
                    break;
                case 'btnC':
                    el.style.setProperty('animation-name', 'bgchange-c');
                    el.style.setProperty('animation-duration', '5.0s');
                    break;
                case 'btnD':
                    el.style.setProperty('animation-name', 'bgchange-d');
                    el.style.setProperty('animation-duration', '0.5s');
                    break;
                case 'btnParticle':
                    let p = document.getElementById('particles-js');
                    if (p.style.display === 'none'){
                        p.style.setProperty('display', '')
                    } else {
                        p.style.setProperty('display', 'none')
                    }
                    break;
                }
        });
    });

});

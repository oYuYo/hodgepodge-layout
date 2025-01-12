window.addEventListener('load', ()=>{
    if('showPicker' in HTMLInputElement.prototype){ //showpickerがサポートされているか
        petSelect.addEventListener('click', (e) => {
            const input = e.srcElement.previousElementSibling;
            input.showPicker();
        })
    }

    btnPip.addEventListener('click', togglePictureInPicture);
});

function printPipWindowDimensions(e){
    const pipWindow = e.target;
    console.log(`浮動ウインドウの大きさ: ${pipWindow.width}x${pipWindow.height}px`);
}

function togglePictureInPicture(){
    if (document.pictureInPictureElement){
        document.exitPictureInPicture()
            .then(() => console.log('Document Exited from Pictrue-In-Picture mode'))
            .catch((err) => console.error(err));
    } else if (document.pictureInPictureEnabled) {
        video.requestPictureInPicture().then((pictureInPictureWindow) => {
            pictureInPictureWindow.addEventListener('resize', () => {
                pictureInPictureWindow.onresize = printPipWindowDimensions;
            })
        })
    }
}

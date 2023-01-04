const btns = document.querySelectorAll('.btn')
const audioEl = document.querySelector('audio')
btns.forEach((btn, idx) => {
    btn.addEventListener('click', ()=>{
        console.log("happy");
        audioEl.setAttribute('src', `audio${idx+1}.wav`)
        audioEl.play();
    })
});
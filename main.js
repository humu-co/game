window.addEventListener('keydown', (e)=>{
    console.log('keydown event', e.key)
    const div = document.getElementById(e.key)
    div.classList.add('pressed')
})
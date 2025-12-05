const btn = document.querySelector('.btn')
console.log(btn);

btn.addEventListener('click', ()=>{
    // alert('u clicked me!')
    
    const red = Math.round(Math.random()*255)
    const green = Math.round(Math.random()*255)
    const blue = Math.round(Math.random()*255)

    // console.log(red, green, blue);


    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    
})
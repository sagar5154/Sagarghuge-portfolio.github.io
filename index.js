document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.slidebar').classList.toggle('sidebargo');

    if( document.querySelector('.slidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display= 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.cross').style.display= 'inline'
        setTimeout(() => {
        document.querySelector('.ham').style.display = 'none'
    }, 20);
}

})
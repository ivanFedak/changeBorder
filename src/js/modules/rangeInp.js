const rangeInp = ()=>{
    
    const range = document.querySelector('.main__range'),
          box = document.querySelector('.main__box'),
          boxContent = document.querySelector('.main__text span')
    


    function changeBr(e) {
        let value = range.value;
        box.style.cssText = `border-radius: ${value}%`
        boxContent.innerHTML = value 
        console.log(value)
    }
    range.addEventListener('input', changeBr)

}
export default rangeInp;
const section=document.getElementsByTagName('section')[0];
const inputRange=Array.from(document.getElementsByTagName('input'));
const spanValue=document.querySelector('.spanV')


let red,green,black,alpha;
red=inputRange[0].style.backgroundColor='255'
green=inputRange[0].style.backgroundColor='255'
black=inputRange[0].style.backgroundColor='255'
alpha=inputRange[0].style.backgroundColor='1'
inputRange.forEach(element =>{
    element.addEventListener('input',(e)=>{
        if(e.target.id=='red'){
            red=parseInt(e.target.value);
        }
        else if(e.target.id=='green'){
            green=parseInt(e.target.value);
        }
        else if(e.target.id=='black'){
            black=parseInt(e.target.value);
        }
        else{
            alpha=(e.target.value);
        }
        section.style.backgroundColor=`rgba(${red},${green},${black},${alpha})`
        spanValue.innerHTML=`${red},${green},${black},${alpha}`
    })
})



const numberV=document.querySelector('.number')
const buttons=Array.from(document.querySelector('.buttons').getElementsByTagName('span'));
let nums=parseInt(numberV.innerHTML)
// buttons[0].addEventListener('click',()=>{
//     nums=nums-1;
//     numberV.innerHTML=nums;
// })

// buttons[1].addEventListener('click',()=>{
//     nums=0;
//     numberV.innerHTML=nums;
// })
// buttons[2].addEventListener('click',()=>{
//     nums=nums+1;
//     numberV.innerHTML=nums;
// })

buttons.forEach(element => {
    element.addEventListener('click',(e)=>{
        if (e.target==buttons[0]) {
            nums=nums-1;
            numberV.innerHTML=nums;
        }
        else if(e.target==buttons[1]){
            nums=0;
            numberV.innerHTML=nums;
        }
        else{
            nums=nums+1;
            numberV.innerHTML=nums;
        }

        if(nums>0){
            numberV.style.color='green';
        }
        else if(nums<0){
            numberV.style.color='red';
        }
        else{
            numberV.style.color='black';
        }
    })
});
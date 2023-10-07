let input = document.querySelector('#input');

let buttons = Array.from(document.querySelectorAll('.btn'));
// console.log(buttons);
let operator ='';
let data =[];
buttons.map((btn)=>{
    btn.addEventListener('click',(e)=>{
        let btnText = e.target.innerText;
        // console.log(btnText);
        // The type of inner text is a string
        if(btnText ==="AC"){
            input.innerText='';
            data=[];
            operator='';
        }else if(btnText==="DE"){
            input.innerText=input.innerText.slice(0,-1);
        }
        else if( btnText==='.'){
            if(!input.innerText.includes('.'))
            input.innerText+=btnText;
        }
        else if(btnText==='='){
            data.push(input.innerText);
            let res = eval(data.join(' '))
            input.innerText=res;
            data=[]
            operator='';
        }
        else if(isNaN(parseInt(btnText))){
            operator=btnText;
            data.push(input.innerText);
            data.push(operator);
            input.innerText=''


        }
        else{
            input.innerText+=btnText;
        }
    })
})
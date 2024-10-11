let btn=document.querySelector('button');
let input=document.querySelector('input');
let img = document.querySelector('img');

btn.addEventListener('click',()=>{
    if(input.value.trim()!=''){
        img.src = `https://quickchart.io/qr?text=${input.value.trim()}`;
        btn.innerText = 'generating QR code...'
        img.addEventListener('load',()=>{
            btn.innerText = 'Generate QR code';
        })
    }
    else{
        img.src = '';
    }
})
    

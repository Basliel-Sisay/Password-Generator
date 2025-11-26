const inp = document.querySelector('#input') as HTMLInputElement;
const button = document.querySelector('#generate') as HTMLButtonElement;
const final = document.querySelector('#output') as HTMLParagraphElement;
const small = "abcdefghijklmnopqrstuvwxyz";
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const int = "0123456789";
const signs = "!@#$%^*&)(";
function generator(length : number): string{
   const everything = small + capital + signs+ int;
   let password ='';
   let x = 0;
   while(x<length){
       const randoms = Math.floor(Math.random()* everything.length);
       password = password + everything[randoms];
       x=x+1;
   }
   return password;
}
button.addEventListener('click', function(){
   const length = parseInt(inp.value, 10);
   const password = generator(length);
   final.textContent = password;
});

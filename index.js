var result=document.getElementById('ans');
var button=document.querySelectorAll('button');
var ans='';
var display='';
for(item of button){
  item.addEventListener('click',(e)=>{
    button_text=e.target.innerText;
    if(button_text=='=')
    {
      console.log(button_text);
      ans=eval(display);
      console.log(ans);
      result.innerText=ans;
      return;

    }if(button_text=='C' || button_text=='CE'){
       display=''
       result.innerText='0';
       return;
    }
    display+=button_text;
    result.innerText=display;
   
    
  });
}
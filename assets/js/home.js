document.getElementsByTagName('a')[1].addEventListener('click',function(){
    var tasks = document.getElementsByName("checkme");
    for(let i of tasks){
        if(i.checked == true){
            document.getElementsByTagName('a')[1].setAttribute('href','/delete-task/?id='+i.value);              
        }        
    }
});
let ta = document.getElementsByClassName('typ');
for(let i of ta){
    if(i.innerText == "Work")
        i.style.backgroundColor = 'rgb(64, 218, 129)';
    if(i.innerText == "School")
        i.style.backgroundColor = 'rgb(123, 30, 104)';
    if(i.innerText == "Personal")
        i.style.backgroundColor = 'rgb(0, 204, 204) ';
    if(i.innerText == "Cleaning")
        i.style.backgroundColor = 'rgb(204, 0, 204)';
}
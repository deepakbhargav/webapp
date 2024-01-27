document.getElementById("menu").addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector(".sidebar").style.display="flex";
});


document.getElementById("cross").addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector(".sidebar").style.display="none";
});

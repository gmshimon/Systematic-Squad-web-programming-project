function darkMode()
{
    modeName= document.getElementById('mode-name');
    if(modeName.innerText=="Dark Mode")
    {
        document.getElementById('colorr').style.backgroundColor='black';
    document.getElementById('banner').style.backgroundColor='grey';
   const option=  document.getElementsByClassName('option');
   option[0].style.backgroundColor='grey';
   option[1].style.backgroundColor='grey';
   option[2].style.backgroundColor='grey';
   option[3].style.backgroundColor='grey';
   option[4].style.backgroundColor='grey';
   modeName.innerText="Light Mode"
    }
    else{
        document.getElementById('colorr').style.backgroundColor='grey';
    document.getElementById('banner').style.backgroundColor='lightblue';
   const option=  document.getElementsByClassName('option');
   option[0].style.backgroundColor='lightblue';
   option[1].style.backgroundColor='lightblue';
   option[2].style.backgroundColor='lightblue';
   option[3].style.backgroundColor='lightblue';
   option[4].style.backgroundColor='lightblue';
   modeName.innerText="Dark Mode"
    }
}




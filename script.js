let btn = document.getElementById("btn")
let progress = document.getElementById("progress")
let percent = document.getElementById("percent")

btn.addEventListener('click', moveBar)

let barWidth = 0
function moveBar()
{
  let x=setInterval(()=>{

    if (barWidth >= 100) 
    {
      clearInterval(x);
    } 
    else 
    {
      barWidth++;
      progress.style.width = barWidth + "%";
      percent.innerHTML = barWidth + "%";
    }
  }, 100)
  
}
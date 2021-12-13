
/*=========  Nav Active  ==========*/
document.addEventListener("DOMContentLoaded",()=>{
    var nav = document.querySelector(".navigation-warp");
        window.onscroll = function(){
            if(document.documentElement.scrollTop > 20){
                nav.classList.add("scroll-on");
            }
            else{
                nav.classList.remove("scroll-on");
            }
        }
})


/* ======= Counter Design ===========*/ 

//Counter increment Whenever user login for first time

//This is event listener which will start execute when DOMContent get loaded everytime
document.addEventListener("DOMContentLoaded",()=>{
    function counterIncrement(id, start, end, duration){
        let counter = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>{
            current += increment;
            counter.textContent = current;
            if(current == end){
                clearInterval(timer)
            }

        },step);

        console.log('counter', counter);

    }
    counterIncrement("People-Watched-counter",0,400,2000)
    counterIncrement("People-Followed-Facebook-counter",0,56,2000)
    counterIncrement("People-subscribed-yt-counter",0,80,2000)
    counterIncrement("New-Visitors-counter",0,1000,2000)
})



/* ================ Nav Bar close on small Size screen If we click on any menu item ========================= */
// var nav = document.querySelector('navigation-warp')
document.addEventListener('DOMContentLoaded',() =>{
    let navlinks = document.querySelectorAll('.nav-link');
    let navCollapse = document.querySelector('.navbar-collapse.collapse');
    navlinks.forEach(element =>{
        element.addEventListener('click',()=>{
            console.log('Nav link clicked')
            navCollapse.classList.remove('show');
        })
    })
})
  


/* skills fill*/

let skills=document.querySelector('.our-skills');
let spans=document.querySelectorAll('.our-skills .con .skills li .fill');
window.addEventListener('scroll',  function () {
    if (window.scrollY >= skills.offsetTop) {
        spans.forEach(function (e) {
            e.style.width = e.getAttribute('data-num');
        })
    }
})

/* End skills */
/* type writer */

let text='Welcome, To My World';
let i=0;
document.querySelector('.landing .con .text p:first-child').textContent='';
window.onload =function(){ let h=setInterval(function(){
    document.querySelector('.landing .con .text p:first-child').textContent+=text[i];
    i++;
    if(i>=text.length){
        clearInterval(h)
    }
},200)}

/*End type writer */

/* timer */
let lastDate = new Date('Dec 31,2021 23:59:59').getTime();
let count = setInterval(function () {
    let nowDate = new Date().getTime();
    let dif = lastDate - nowDate;
    let days = Math.floor(dif / (1000 * 60 * 60 * 24))
    let hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)
    let minutes = Math.floor((dif % (1000 * 60 * 60)) / 1000 / 60)
    let Seconds = Math.floor((dif % (1000 * 60)) / 1000)
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = Seconds;
}, 500)
/*End timer */
/* count */
let countSpans = document.querySelectorAll('.stats .count');
let start=false;
window.onscroll=function(){
    if(window.scrollY>document.querySelector('.stats').offsetTop){
        if(!start){
        countSpans.forEach(function (e) {
            let inf = e.getAttribute('info');
            let count = setInterval(function () {
                e.textContent++
                if (e.textContent == inf) {
                    clearInterval(count)
                }
            }, 2000 / inf)
            start=true;
        })}
    }
}
console.log(spans)
/* countSpans.forEach(function (e) {
    let inf = e.getAttribute('info');
    let count = setInterval(function () {
        e.textContent++
        if (e.textContent == inf) {
            clearInterval(count)
        }
    }, 2000 / inf)
}) */

/* count */
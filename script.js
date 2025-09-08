let que1 = document.getElementById("1");
que1.onclick = function () {
    let answer1 = document.createTextNode(" Yes, Frontend Mentor offers both free and premium coding challenges,with the free option providing access to a range of projects suitable for all skill levels");
    que1.src = 'images/icon-minus.svg';
    let span1=document.getElementById("ans1");
    span1.classList.add("style");
    span1.appendChild(answer1);
    que1.onclick = function (){
        span1.removeChild(answer1);
        span1.classList.remove("style");
        que1.src ='images/icon-plus.svg';
        window.location.reload();
    };
};
let que2 =document.getElementById("2");
que2.onclick = function() {
    let answer2 = document.createTextNode(" Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!");
    que2.src = 'images/icon-minus.svg';
    let span2=document.getElementById("ans2");
    span2.classList.add("style");
    span2.appendChild(answer2);
    que2.onclick = function (){
        span2.removeChild(answer2);
        span2.classList.remove("style");
        que2.src ='images/icon-plus.svg';
        window.location.reload();
    };
};
let que3 =document.getElementById("3");
que3.onclick = function() {
    let answer3 = document.createTextNode(" The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.");
    que3.src = 'images/icon-minus.svg';
    let span3=document.getElementById("ans3");
    span3.classList.add("style");
    span3.appendChild(answer3);
    que3.onclick = function (){
        span3.removeChild(answer3);
        span3.classList.remove("style");
        que3.src ='images/icon-plus.svg';
        window.location.reload();
    };
};
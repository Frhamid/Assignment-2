let ul = document.getElementsByClassName('hide');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2')
btn1.addEventListener('click', function Hide() {
    for (let i = 0; i < ul.length; i++) {


        if (ul[i].style.display != "none") {
            ul[i].style.display = "none";
            btn1.innerHTML = 'Show';

        }
        else {
            ul[i].style.display = 'block';
            btn1.innerHTML = 'Hide';
        }
    }
})

btn2.addEventListener("click", function shuffleNodes() {
    for (let j = 0; j < ul.length; j++) {

        for (var k = ul[j].children.length; k >= 0; k--) {
            ul[j].appendChild(ul[j].children[Math.random() * k | 0]);
        }
    }


})



for (let j = 0; j < ul.length; j++) {

    for (var k = ul[j].children.length; k >= 0; k--) {
        ul[j].appendChild(ul[j].children[Math.random() * k | 0]);
    }
}


/////////////////////////////////////////////sort
function sortList() {
    for (let j = 0; j < ul.length; j++) {

        let list = ul[j].children;
        console.log(list[0])
        let ar = new Array()
        for (let i = 0; i < list.length; i++) {

            ar.push(list[i].innerHTML)

        }
        ar = ar.sort()
        for (let i = 0; i < ar.length; i++) {
            list[i].innerHTML = ar[i]

        }

    }
}


//////////////////////bonus

function alert1() {
    let i = document.getElementById('f1').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert2() {
    let i = document.getElementById('f2').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert3() {
    let i = document.getElementById('f3').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert4() {
    let i = document.getElementById('f4').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert5() {
    let i = document.getElementById('f5').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert6() {
    let i = document.getElementById('f6').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert7() {
    let i = document.getElementById('f7').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert8() {
    let i = document.getElementById('f8').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert9() {
    let i = document.getElementById('f9').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert10() {
    let i = document.getElementById('f10').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert11() {
    let i = document.getElementById('f11').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert12() {
    let i = document.getElementById('f12').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert13() {
    let i = document.getElementById('f13').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert14() {
    let i = document.getElementById('f14').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert15() {
    let i = document.getElementById('f15').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert16() {
    let i = document.getElementById('f16').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert17() {
    let i = document.getElementById('f17').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert18() {
    let i = document.getElementById('f18').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert19() {
    let i = document.getElementById('f19').innerHTML.length
    alert(`This Item has ${i} characters`);

}
function alert20() {
    let i = document.getElementById('f20').innerHTML.length
    alert(`This Item has ${i} characters`);

}

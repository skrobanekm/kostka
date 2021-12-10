const kostka = document.getElementById('kostka');
const kostka2 = document.getElementById('kostka2');
const statistika = document.getElementById('statistika');
const tlacitko = document.getElementById('tlacitko');
let hod = 1;
let hod2 = 1;
let hody = [];
let hody2 = [];
let timer = false;

function animace(){
    hod = Math.ceil(Math.random() * 6);
    kostka.src = 'img/kostka' + hod + '.png';
    hod2 = Math.ceil(Math.random() * 6);
    kostka2.src = 'img/kostka' + hod2 + '.png';
}

tlacitko.addEventListener('click', function(){
    if (!timer){
        timer = setInterval(animace, 100);
        tlacitko.innerText = 'STOP';
    }else{
        clearInterval(timer);
        timer= false;
        tlacitko.innerText = 'HREJ';
        hody.push(hod);
        hody2.push(hod2);
        vypisStatistiky();
    }
})


function suma(){
    let sum1 = 0;
    let sum2 = 0;
    for (let i =0; i < hody.length; i++){
        sum1 += hody[i]
        sum2 += hody2[i]
        
    } 
    return sum= sum1+sum2;
}

function suma1(){
    let sum1 = 0;
    for (let i =0; i < hody.length; i++){
        sum1 += hody[i]
        
    } 
    return sum1;
}
function suma2(){
    let sum2 = 0;
    for (let j =0; j < hody2.length; j++){
        sum2 += hody2[j]
        
    } 
    return sum2;
}


/*function max(){
    let maximum = 1
    hody.forEach(function(value,index){
        if (value > maximum) maximum = value;
    })
    return maximum;
}

function min(){
    let minimum = 6
    hody.forEach(function(value,index){
        if (value < minimum) minimum = value;
    })
    return minimum;
}
*/

function vypisStatistiky(){
    statistika.innerHTML =`<p>Poslední hod: ${hod}+${hod2}</p>`;
    statistika.innerHTML +=`<p>Počet hodů: ${hody.length}</p>`;
    statistika.innerHTML +=`<p>Součet 1. kostky: ${suma1()}</p>`;
    statistika.innerHTML +=`<p>Součet 2. kostky: ${suma2()}</p>`;
    statistika.innerHTML +=`<p>Celkový součet: ${suma()}</p>`;
    statistika.innerHTML +=`<p>Průměr: ${(suma() / hody.length).toFixed(2)}</p>`;

    /*statistika.innerHTML +=`<p>Maximum: ${max()}</p>`;
    statistika.innerHTML +=`<p>Minimum: ${min()}</p>`;*/
}







let first = document.getElementById('first');

first.addEventListener('click', function(){
    alert("Vyskočil mi alert")
})

const second = document.getElementById('second');

second.addEventListener('click', function(){
    second.textContent="Nový text!"
})

const third = document.getElementById('third');

third.addEventListener('click', function(){
    text.textContent="Nový text"
})

const fourth = document.getElementById('fourth')

fourth.addEventListener('click', function(){
    objevittext.textContent="Zobrazený text"
})

let fifth = document.getElementById('fifth')

function hellhouser(){
    let user = document.getElementById('user').value;
    alert('Vítám tě' + user);
}

const hovertext = document.getElementById('hovertext')

hovertext.addEventListener('mouseover', function(){
    hovertext.textContent = "Změněný text"
})

hovertext.addEventListener('mouseout', function(){
    hovertext.textContent = 'Zde najeď myší'
})

document.getElementById('buttonTime').onclick = function(){
    document.getElementById('time').textContent = new Date().toLocaleTimeString();
}


document.getElementById('buttonDate').onclick = function(){
    document.getElementById('date').textContent = new Date().toLocaleDateString();
}
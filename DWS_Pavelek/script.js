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

document.getElementById('buttonplus3').addEventListener('click', function() {
    let input = document.getElementById('input').value
    let result = parseInt(input) + 3
    document.getElementById('vysledek').textContent = "vysledek = " + result
})

document.getElementById('buttoncal').addEventListener('click', function() {
    let vstup1 = parseInt(document.getElementById('input2').value)
    let vstup2 = parseInt(document.getElementById('input3').value)
    let result = vstup1 + vstup2
    document.getElementById('vysledek2').textContent = "vysledek = " + result
})

function enlargeImage() {
    document.getElementById("obrazek").style.width = "500px";
    document.getElementById("obrazek").style.height = "500px";
}

function resetImageSize() {
    document.getElementById("obrazek").style.width = "225px";
    document.getElementById("obrazek").style.height = "225px";
}

document.getElementById('obrazek').addEventListener('mouseover', enlargeImage);
document.getElementById('obrazek').addEventListener('mouseout', resetImageSize);


const list = document.getElementById('list');
const manager = document.getElementById('manager');
const addTaskButton = document.getElementById('buttontask');

buttontask.addEventListener('click', function() {
    const taskText = manager.value.trim();
    if (!taskText) return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;    
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Odstranit';
    removeButton.addEventListener('click', () => taskItem.remove());

    taskItem.appendChild(removeButton);
    list.appendChild(taskItem);
    manager.value = '';
});

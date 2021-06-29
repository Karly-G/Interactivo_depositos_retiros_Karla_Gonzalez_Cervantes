const containerAtm = document.getElementById('container-atm');
const containerMoney = document.getElementById('container-money');
const money = document.getElementsByClassName('money');

containerAtm.addEventListener('dragover', (e) => allowDrop(e));
containerAtm.addEventListener('drop', (e) => drop(e));

containerMoney.addEventListener('dragover', (e) => allowDrop(e));
containerMoney.addEventListener('drop', (e) => dropBack(e));

for(let i=0; i<money.length; i++){
    money[i].setAttribute('draggable', 'true');
    money[i].setAttribute('id', 'money'+i);
    money[i].addEventListener('dragstart', (e) => startDrag(e))
}

function startDrag(e){
    e.dataTransfer.setData('idmoney', e.target.id);
    console.log(e.target.id);
}

function allowDrop(e){
    console.log('arrastrando');
    e.preventDefault();
}

function drop(e){
    e.preventDefault();
    let cash = e.dataTransfer.getData('idmoney');
    containerAtm.appendChild(document.getElementById(cash));
}

function dropBack(e){
    e.preventDefault();
    let cash = e.dataTransfer.getData('idmoney');
    containerMoney.appendChild(document.getElementById(cash));
}
const containerAtm = document.getElementById('container-atm');
const containerMoney = document.getElementById('container-money');
const money = document.getElementsByClassName('money');

containerAtm.addEventListener('dragover', (e) => allowDrop(e));
containerAtm.addEventListener('drop', (e) => drop(e));

containerMoney.addEventListener('dragover', (e) => allowDrop(e));
containerMoney.addEventListener('drop', (e) => dropBack(e));

for (let i = 0; i < money.length; i++) {
    money[i].setAttribute('draggable', 'true');
    money[i].setAttribute('id', `money${i}`);
    money[i].addEventListener('dragstart', (e) => startDrag(e));
    }

function startDrag(e) {
    e.dataTransfer.setData('idmoney', e.target.id);
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const cash = e.dataTransfer.getData('idmoney');
    containerAtm.appendChild(document.getElementById(cash));
    console.log(cash);
}

function dropBack(e) {
    e.preventDefault();
    const cash = e.dataTransfer.getData('idmoney');
    containerMoney.appendChild(document.getElementById(cash));
}

function goLevelOne2() {
  document.getElementById("level_One1").style.display = "none";
  document.getElementById("level_One2").style.display = "block";
}
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let fio = document.getElementById('fio').value;
    let fio2 = fio.toLowerCase().trim().replace(/\s+/g, ' ');
    
    let fioArr = fio2.split(" "); 
    let fioString = "";

    for (let i = 0; i < fioArr.length; i++) {
        let fio3 = fioArr[i].substring(0, 1).toUpperCase() +  fioArr[i].substring(1, fioArr[i].length);
        fioString += fio3 + " ";
    }
    
    let fioString2 = fioString.trim();
    console.log(fioString2);

    let surname = document.getElementById('surname');
    let name = document.getElementById('name');
    let patronymic = document.getElementById('patronymic');

    let fioArr2 = fioString2.split(' ');
    surname.value = fioArr2[0];
    name.value = fioArr2[1];
    patronymic.value = fioArr2[2];

})























// fio.oninput = function() {
    
//     let result = document.getElementById('result');
//     result.innerHTML = fio.value;
    
// };




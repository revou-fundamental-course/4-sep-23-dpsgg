console.log('test')

function ht_luas(){
    var s = document.getElementById('s').value;

    var luas = s*s;

    var element = document.getElementById('hasil');

    element.innerHTML ='ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ'+'Hasilnya adalah:'+' '+luas+'cm²'
    
}


function ht_keliling(){
    var s = document.getElementById('s').value;

    var keliling = 4*s;

    var element = document.getElementById('hasil');

    element.innerHTML = 'ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ'+'Hasilnya adalah:'+' '+keliling+'cm'
}
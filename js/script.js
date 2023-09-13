console.log('test')

function ht_luas(){
    var s = document.getElementById('s').value;

    var luas = s*s;

    document.getElementById('Luas1').innerHTML = 'Hasil Luas: ' + luas
}

function ht_keliling(){
    var s = document.getElementById('s').value;

    var keliling = 4*s;

    document.getElementById('Keliling1').innerHTML = 'Hasil Keliling: ' + keliling
}
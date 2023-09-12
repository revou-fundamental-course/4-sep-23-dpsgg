console.log('test')

function ht_luas(){
    var s = document.getElementById('s').value;

    var luas = s*s;

    document.getElementById('Luas').innerHTML = luas
}

function ht_keliling(){
    var s = document.getElementById('s').value;

    var keliling = 4*s;

    document.getElementById('Keliling').innerHTML = keliling
}
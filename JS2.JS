function terimaInput() {
    var nama = document.forms['biodataDosen']['nama'].value;
    var nim = document.forms['biodataDosen']['nim'].value;
    var fakultas = document.forms['biodataDosen']['fakultas'].value;
    var prodi = document.forms['biodataDosen']['prodi'].value;
    var nik = document.forms['biodataDosen']['nik'].value;
    var kota = document.forms['biodataDosen']['kota'].value;
    var tanggal = document.forms['biodataDosen']['tanggal'].value;
    var hp = document.forms['biodataDosen']['hp'].value;
    var kelamin = document.forms['biodataDosen']['kelamin'].value;
    var email = document.forms['biodataDosen']['email'].value;
    var alamat = document.forms['biodataDosen']['alamat'].value;
    
 var tanya = confirm("Apakah anda ingin menambahkan data?");
 if (tanya == true) {


    var tabel = document.getElementById('tableInput');
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    var cell9 = row.insertCell(8);
    var cell10 = row.insertCell(9);
    var cell11 = row.insertCell(10);
    
 
    cell1.innerHTML = nama;
    cell2.innerHTML = nim;
    cell3.innerHTML = fakultas;
    cell4.innerHTML = prodi;
    cell5.innerHTML = nik;
    cell6.innerHTML = kota;
    cell7.innerHTML = tanggal;
    cell8.innerHTML = hp;
    cell9.innerHTML = kelamin;
    cell10.innerHTML = email;
    cell11.innerHTML = alamat;
    
    alert("Data Berhasil Disimpan!");
}else {
    document.forms['biodataDosen'].reset();
}
 
    
}
var Surya = 17000;
var Surpro = 16500;
var Talijagat = 14000;
var Sampoerna = 20000;
var Nama;

function Proses(){
        var jumlah;
        jumlah = (Surya * parseInt(document.getElementById("sor").value)) + ( 
        Surpro * parseInt(document.getElementById("pro").value)) + (
        Talijagat * parseInt(document.getElementById("tali").value)) + (
        Sampoerna * parseInt(document.getElementById("sam").value));
        document.getElementById("total"). innerHTML = jumlah.toString();
    
        Nama = document.getElementById("nama").value;
        document.getElementById("nm"). innerHTML = Nama.toString();

        var bayar;
        bayar =(parseInt(document.getElementById("pembayaran").value) - jumlah);
        document.getElementById("bayar"). innerHTML = bayar.toString();

    }


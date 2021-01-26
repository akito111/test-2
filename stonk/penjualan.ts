function Proses()
{
    //deklarasi variable
    let tanggalPembelian:string;
    let namaKonsumen    :string;
    let beras           :number;
    let gula            :number;
    let mie             :number;
    let telur           :number;
    let pembayaran      :number;
    let totalPembelian  :number;
    let dibayarkan      :number;
    let kembalian       :number;

    //deklarasi html
    let txttanggalPembelian :HTMLInputElement;
    let txtnamaKonsumen     :HTMLInputElement;
    let txtBeras            :HTMLInputElement;
    let txtGula             :HTMLInputElement;
    let txtMie              :HTMLInputElement;
    let txtTelur            :HTMLInputElement;
    let txtPembayaran       :HTMLInputElement;

    let lblTanggalPembelian         :HTMLElement;
    let lblNamaKonsumen    :HTMLElement;
    let lblTotalPembelian   :HTMLElement;
    let lblDibayarkan       :HTMLElement;
    let lblKembalian        :HTMLElement;

    //input dari textbox
    txttanggalPembelian = <HTMLInputElement>document.getElementById("txt_tgl");
    tanggalPembelian =txttanggalPembelian.value;

    txtnamaKonsumen = <HTMLInputElement>document.getElementById("txt_nama");
    namaKonsumen = txtnamaKonsumen .value;

    txtBeras = <HTMLInputElement>document.getElementById("txt_beras");
    beras =parseInt(txtBeras.value);

    txtGula = <HTMLInputElement>document.getElementById("txt_gula");
    gula =parseInt(txtGula.value);

    txtMie = <HTMLInputElement>document.getElementById("txt_mie");
    mie =parseInt(txtMie.value);

    txtTelur = <HTMLInputElement>document.getElementById("txt_telur");
    telur =parseInt(txtTelur.value);

    txtPembayaran = <HTMLInputElement>document.getElementById("txt_pembayaran");
    pembayaran =parseInt(txtPembayaran.value);

    
    //Proses
    
    
    
    

    //total pembelian
    totalPembelian = ((beras * 12000)+ (gula * 11000) + (mie * 2500) + (telur * 22000));

    //dibayarkan
    dibayarkan = pembayaran;

    //kembalian
    kembalian = pembayaran - totalPembelian;




    //mengambil html elemen
    lblTanggalPembelian= document.getElementById("lbl_tanggal");
    lblNamaKonsumen = document.getElementById("lbl_konsumen");
    lblTotalPembelian= document.getElementById("lbl_pembelian");
    lblDibayarkan = document.getElementById("lbl_bayar");
    lblKembalian= document.getElementById("lbl_kembalian");
    
    //menampilkan nilai pada html element
    lblTanggalPembelian.innerHTML=tanggalPembelian;
    lblNamaKonsumen.innerHTML=namaKonsumen;
    lblTotalPembelian.innerHTML=totalPembelian.toString();
    lblDibayarkan.innerHTML=dibayarkan.toString();
    lblKembalian.innerHTML=kembalian.toString();
   

}
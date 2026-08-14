//contoh algoritma
/*
cara memasukan baju ke mesin cuci
misal mesin cuci hanya muat 3 baju saja
lalu kita butuh mencuci 4 baju

langkah awal
kita masukan 3 baju sekaligus ke mesin cuci tersebut
kalau kita memasukan 4 baju sekaligus maka akan ada peringatan dari mesin cucinya

lalu kalau sudah memasukan 3 baju atau kurang dari itu
baju yang kotor dikurangi baju yang masuk ke mesin cuci tersebut

lalu lakukan hal tersebut sampai baju kotornya habis
*/


//contoh pengerjaan
function cuciBaju(bajuKotor){ //function untul algoritma cuciBaju
    let mesinCuci = 3; //declare maksimal jumlah baju yang dapat dimasukkan ke mesin cuci
    let bajuBersih = 0; //declare variabel bajuBersih
    let sisaBaju = 0; // declare variabel sisaBaju
    if (bajuKotor > mesinCuci){ //mengecek jika bajuKotor melebihi jumlah baju yang dapat dimasukkan ke mesin cuci atau tidak
        // jika iya, jalankan perintah di bawah ini
        console.log("Melebihi Batas");
        sisaBaju = bajuKotor - mesinCuci;
        bajuBersih = bajuKotor - sisaBaju;

        console.log("Baju yang telah di Cuci: ", bajuBersih);
        console.log("Baju kotor yang tersisa: ", sisaBaju);

        console.log("/////////////////////////////////////////");
        if (sisaBaju > 0){ //mengecek jika masih ada sisaBaju atau tidak
            //jika masih ada, jalankan kembali perintah function cuciBaju
            console.log(cuciBaju(sisaBaju));
        } else { //jika tidak ada sisaBaju, maka kembali ke perintah sebelumnya
            return;
        }
    } else { //jika bajuKotor tidak melebihi jumlah baju yang dapat dimasukkan ke mesin cuci, maka jalankan perintah di bawah ini 
        bajuBersih = bajuKotor;

       console.log("Baju yang telah di Cuci: ", bajuBersih);
       console.log("Baju kotor yang tersisa: ", sisaBaju);
    }
    return;
}

console.log(cuciBaju(7)); //perintah untuk menjalankan function cuciBaju

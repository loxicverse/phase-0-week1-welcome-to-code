//# Belajar Looping | Part 3
//## Soal 1

//```js
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
//```


let maju = 0; //declare variabel maju
while (maju < 3){ //patokan loop luar mau berapa kali, bisa diset (maju < (n))
    console.log(`LOOPING PERTAMA`); //tampilkan teksnya
    
    let mundur = 0; //declare variabel mundur di dalam loop
    while (mundur > -1){ //loop dalam diset untuk jalan satu kali setiap 1 loop luar
        console.log(`LOOPING KEDUA`); //tampilkan teksnya
        mundur--; //decrement untuk membuat nilai menjadi false dan melanjutkan loop luar
    }
    maju++; //increment untuk melanjutkan loop luar
}
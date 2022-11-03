//PERTEMUAN3
class Human {
    constructor(name, address) {
      // if statement ini memastikan kelas Human tidak digunakan untuk membuat object secara langsung
      if (this.constructor === Human) {
        // berikan error jika kelas Human digunakan untuk membuat object secara langsung
        throw new Error("Cannot instantiate from Abstract Class");
      }
      this.name = name;
      this.address = address;
    }
   
    // kelas abstract boleh memiliki instance method / static method
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
   
    // kelas abstract bisa memiliki abstract method
    // ini yang akan dimanfaatkan untuk menyembunyikan detail
    work() {
      // abstract method hanya melempar error
      // ini memastikan method akan di-override oleh sub-class sebelum digunakan
      throw new Error("Cannot call abstract method");
    }
   }
   
   class Police extends Human {
    constructor (name, address, rank) {
      super(name, address);
      this.rank = rank;
    }
   
    work() {
      console.log("Enforcing law");
    }
   }
   
   class Doctor extends Human {
    constructor (name, address, specialist) {
      super(name, address);
      this.specialist = specialist;
    }
   
    work() {
      console.log("Treat patient");
    }
   }
   
   // fungsi ini adalah contoh fungsi yang memanfaatkan abstraction
   // fungsi ini menerima Object Human melalui parameter human
   // kemudian memanggil method work yang ada di abstract class Human
   function goToWork (human) {
    return human.work();
   }
   
   let binarian = new Police('Binarian', 'Jogja', 'Captain');
   let sabrina = new Doctor('Sabrina', 'Tangerang', 'General');
   
   // dengan memanggil goToWork, kita tidak tau apa yang terjadi di kelas Police ataupun Doctor
   // kita hanya tau keduanya memiliki method Work dan akan dipanggil ketika menjalankan goToWork
   goToWork(binarian);
   goToWork(sabrina);
   
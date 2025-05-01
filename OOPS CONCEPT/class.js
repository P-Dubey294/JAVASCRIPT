class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;   // Data memebers 
        // return Product;
    };
    productName(){              // memebers Functions
        console.log(this.name);
        console.log(this.price); 

    }
}
let p1 = new Product ("ASUS F17", 70000);
console.log(p1.productName());
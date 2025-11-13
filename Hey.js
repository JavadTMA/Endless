// app.js
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    discount(percent) {
        this.price = this.price - this.price * (percent / 100);
        return this.price;
    }
}

// Sample data
const users = [
    new User("Alice", 25),
    new User("Bob", 30),
    new User("Charlie", 35)
];

const products = [
    new Product("Laptop", 1500),
    new Product("Phone", 800),
    new Product("Tablet", 600)
];

// Functions
function listUsers(users) {
    users.forEach(user => user.greet());
}

function listProducts(products) {
    products.forEach(product => {
        console.log(`${product.name}: $${product.price}`);
    });
}

// Simulate transactions
function buyProduct(user, product) {
    console.log(`${user.name} buys ${product.name} for $${product.price}`);
}

listUsers(users);
listProducts(products);

for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < products.length; j++) {
        buyProduct(users[i], products[j]);
    }
}

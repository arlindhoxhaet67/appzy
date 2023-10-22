/* advanced_code.js */

// This code demonstrates a complex shopping cart system with support for adding/removing items,
// applying discounts, calculating totals, and generating receipts.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
    this.discounts = [];
  }

  addItem(product) {
    this.items.push(product);
  }

  removeItem(productName) {
    this.items = this.items.filter(item => item.name !== productName);
  }

  applyDiscount(discount) {
    this.discounts.push(discount);
  }

  calculateSubtotal() {
    let subtotal = 0;
    for (let item of this.items) {
      subtotal += item.price;
    }
    return subtotal;
  }

  calculateTotal() {
    let total = this.calculateSubtotal();
    for (let discount of this.discounts) {
      total -= discount;
    }
    return total;
  }

  generateReceipt() {
    console.log("========= RECEIPT =========");
    for (let item of this.items) {
      console.log(`${item.name}: $${item.price.toFixed(2)}`);
    }
    console.log("===========================");
    console.log(`Subtotal: $${this.calculateSubtotal().toFixed(2)}`);
    console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
    console.log("===========================");
  }
}

// Create products
const product1 = new Product("iPhone 11", 999.99);
const product2 = new Product("AirPods Pro", 249.99);
const product3 = new Product("Apple Watch", 399.99);

// Create shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product3);

// Apply discounts
cart.applyDiscount(50); // $50 discount

// Remove a product from the cart
cart.removeItem("AirPods Pro");

// Generate receipt
cart.generateReceipt();
const menu = {
  espresso: { milk: 60, cream: 75, latte: 100 },
  cappuccino: { milk: 80, cream: 90, latte: 125 },
  latte: { milk: 100, cream: 125, latte: 150 },
};

class Coffee {
  constructor(name, addOns) {
    this.name = name;
    this.addOns = addOns;
  }
  getName() {
    return this.name;
  }
  getAddOns() {
    return this.addOns;
  }
}

class Order {
  constructor() {
    this.coffees = []; //stores coffee objects
    this.orderCost = 0;
  }
  addCoffee(cofee) {
    this.coffees.push(cofee);
  }
  getTotalAmount() {
    //returns coffee cost from stored coffee objects
    this.coffees.forEach((coffee) => {
      let name = coffee.name;
      let addOns = coffee.addOns;

      addOns.forEach((addOn) => {
        this.orderCost += menu[name][addOn];
      });
    });
    return this.orderCost;
  }
}

window.onload = (event) => {
  const order = new Order();
  let orderComplete = true;
  while (orderComplete) {
    let name = prompt(
      "coffees available are : \n1)Espresso\n2)Cappuccino\n3)Latte\nEnter name coffee you want to buy :",
      "latte"
    ).toLowerCase();
    let addon = prompt(
      "addOns available are : \n1)Milk\n2)Cream\n3)Latte\nEnter name AddOns you want to add \nspace separated names ",
      "milk latte"
    ).toLowerCase();

    //create coffee from input
    let addOns = addon.split(" ");
    let coffee = new Coffee(name, addOns);
    order.addCoffee(coffee);

    orderComplete = confirm("do you want to buy more coffee?");
  }

  alert("Order Amount is : " + order.getTotalAmount());
};

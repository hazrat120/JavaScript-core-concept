// vehicale class define
class Vehicale {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  move() {
    console.log(`${this.name} is moving at ${this.speed} km/h`);
  }
}

// car extends vehicale
class Car extends Vehicale {
  constructor(name, speed, fuelType) {
    super(name, speed);
    this.fuelType = fuelType;
  }
  refuel() {
    console.log(`${this.name} is refueling with ${this.fuelType}`);
  }
}

//  bike extends vehicale
class Bike extends Vehicale {
  constructor(name, speed, hasCarrier) {
    super(name, speed);
    this.hasCarrier = hasCarrier;
  }

  carry() {
    if (this.hasCarrier) {
      console.log(
        `${this.name} has a carrier for carrying for carrying items.`
      );
    } else {
      console.log(`${this.name} does not have a carrier.`);
    }
  }
}

const myCar = new Car("Toyota", 120, "Petrol");
myCar.move();
myCar.refuel();

const myBike = new Bike("Honda", 60, false);
myBike.move();
myBike.carry();

// Another example  main class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

// dog inherite animal class
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof");
    this.breed = breed;
  }

  fetch() {
    console.log(`${this.name} if fetching the ball`);
  }
}

// bird inherite animal class
class Bird extends Animal {
  constructor(name, canFly) {
    super(name, "Chirp");
    this.canFly = canFly;
  }

  fly() {
    if (this.canFly) {
      console.log(`${this.name} is flying`);
    } else {
      console.log(`${this.name} can't fly.`);
    }
  }
}

const myDog = new Dog("Buddy", "Labrador");
myDog.makeSound();
myDog.fetch();

const myBird = new Bird("Tweety", true);
myBird.makeSound();
myBird.fly();

'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.health = 0;
      this.remove();
    }
  }

  remove() {
    const index = Animal.alive.indexOf(this);

    Animal.alive.splice(index, 1);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  decreaseHealth(amount = 50) {
    super.decreaseHealth(amount);
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.decreaseHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

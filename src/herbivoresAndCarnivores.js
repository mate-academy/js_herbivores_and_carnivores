'use strict';

class Animal {
  // write your code here
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
  }
}
Animal.alive = [];
class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  };
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }
    Animal.alive = Animal.alive.filter(beast => beast.health > 0);
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

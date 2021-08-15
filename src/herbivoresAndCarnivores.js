'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

}

class Herbivore extends Animal {
  // write your code here
  hidden = false;
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
      Animal.alive = Animal.alive.filter(beast => beast.health > 0);
    };
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

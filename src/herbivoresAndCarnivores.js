'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }
  bite(herbivore) {
    if (!herbivore.hidden && !(herbivore instanceof Carnivore)) {
      herbivore.health -= 50;
    }

    Animal.alive = Animal.alive.filter((el) => el.health > 0);

    return herbivore.health;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

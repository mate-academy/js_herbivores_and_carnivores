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
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(pray) {
    if (pray instanceof Herbivore && !pray.hidden) {
      pray.health -= 50;
    }

    if (pray.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== pray);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

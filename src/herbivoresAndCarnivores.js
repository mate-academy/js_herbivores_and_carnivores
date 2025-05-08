'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }

  getHidden() {
    return this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.getHidden() === false) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        const index = Animal.alive.indexOf(herbivore);

        if (index > -1) {
          Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

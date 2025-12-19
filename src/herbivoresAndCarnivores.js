'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  /**
   * Decreases the health of the herbivore by 50.
   * Doesn't work if it is another сarnivore,
   * or the herbivore is currently hiding.
   * @param {Herbivore} herbivore - instance of Herbivore class
   */
  bite(herbivore) {
    if (
      herbivore instanceof Herbivore &&
      !herbivore.hidden &&
      herbivore.health > 0
    ) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

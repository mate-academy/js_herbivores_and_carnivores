'use strict';

class Animal {
  static alive = [];

  /**
   * Constructor
   * @param name
   */
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  /**
   * Constructor
   * @param name
   */
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  /**
   * Hide specimen
   */
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivoreSpecimen) {
    if (herbivoreSpecimen instanceof Herbivore && !herbivoreSpecimen.hidden) {
      herbivoreSpecimen.health -= 50;

      if (herbivoreSpecimen.health <= 0) {
        Animal.alive = Animal.alive.filter(
          (specimen) => specimen !== herbivoreSpecimen,
        );
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

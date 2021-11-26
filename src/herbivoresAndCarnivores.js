'use strict';

class Animal {
  static alive = [];

  /**
   * @param {string} name - Name of an animal.
   * @param {number} health - Initial health of an animal.
   */
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  /**
   * Change the hidden property of the beast to the opposite value 
   * and help to hide from carnivores.
   */
  hide() {
    this.hidden = !this.hidden;
  }

  /**
   * Remove itself from a list of alive animals.
   */
  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

class Carnivore extends Animal {
  static BITE_DAMAGE = 50; 

  /**
   * Decrease the herbivore's health by 50.
   * @param {Object} herbivore 
   */
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= Carnivore.BITE_DAMAGE;

      if (herbivore.health <= 0) {
        herbivore.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
  static ALIVE_CREATURES = [];
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name, health) {
    super(name, health);
    Animal.ALIVE_CREATURES.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.ALIVE_CREATURES.push(this);
  }

  bite(givenAnimal) {
    if (givenAnimal instanceof Herbivore && !givenAnimal.hidden) {
      givenAnimal.health -= 50;

      if (givenAnimal.health <= 0) {
        Animal.ALIVE_CREATURES = Animal.ALIVE_CREATURES.filter((el) => {
          return el !== givenAnimal;
        });
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

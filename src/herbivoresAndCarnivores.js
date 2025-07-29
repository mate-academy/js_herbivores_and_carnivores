'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
  static alive = [];
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(givenAnimal) {
    if (givenAnimal instanceof Herbivore && !givenAnimal.hidden) {
      givenAnimal.health -= 50;

      if (givenAnimal.health <= 0) {
        Animal.alive = Animal.alive.filter((el) => {
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

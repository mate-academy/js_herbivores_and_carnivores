'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static deadHerb() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);

    return Animal.alive;
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // constructor(name, health) {
  //   super(name, health);
  // }

  bite(herb) {
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.health -= 50;

      if (herb.health <= 0) {
        Animal.deadHerb();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  // write your code here

  constructor(health, name) {
    this.name = name;
    this.health = 100 || health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(nameOfBitten) {
    const BITE_POINTS = 50;
    const LIMIT_OF_HEALTH = 0;
    const isHerbivore = nameOfBitten instanceof Herbivore;

    if (isHerbivore && nameOfBitten.hidden !== true) {
      nameOfBitten.health -= BITE_POINTS;
    }

    Animal.alive = Animal.alive.filter(item => item.health > LIMIT_OF_HEALTH);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

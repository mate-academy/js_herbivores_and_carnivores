'use strict';

const FULL_HEALTH = 100;
const HEALTH_TAKEN_BY_BITE = 50;
const DEAD_ANIMAL_HEALTH = 0;

class Animal {
  constructor(name) {
    this.name = name;
    this.health = FULL_HEALTH;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= HEALTH_TAKEN_BY_BITE;
    }

    Animal.alive = Animal.alive.filter(animal =>
      animal.health > DEAD_ANIMAL_HEALTH);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

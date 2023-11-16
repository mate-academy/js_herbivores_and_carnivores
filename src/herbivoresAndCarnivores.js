'use strict';

const ANIMAL_HEALTH = 100;

class Animal {
  constructor(name) {
    this.health = ANIMAL_HEALTH;
    this.name = name;

    Animal.alive.push(this);
  }

  static killedAnimal(victim) {
    Animal.alive = Animal.alive.filter(animal => animal !== victim);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(target) {
    const BITE_DAMAGE = 50;

    if (target instanceof Herbivore && !target.hidden) {
      target.health -= BITE_DAMAGE;
    }

    if (!target.health) {
      Animal.killedAnimal(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

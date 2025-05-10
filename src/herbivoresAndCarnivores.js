'use strict';

class Animal {
  static alive = [];
  static removeIfDead(animal) {
    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((anim) => anim !== animal);
    }
  }
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

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
    if (!(victim instanceof Herbivore)) {
      return;
    }

    if (victim.hidden) {
      return;
    }
    victim.health -= 50;

    Animal.removeIfDead(victim);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

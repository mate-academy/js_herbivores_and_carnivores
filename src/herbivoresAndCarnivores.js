'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }

  static removeFromAliveList(animal) {
    Animal.alive = Animal.alive.filter(a => a !== animal);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
      if (target.health <= 0) {
        Animal.removeFromAliveList(target);
      }
    }
  }
}


module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

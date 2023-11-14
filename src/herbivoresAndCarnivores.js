'use strict';
class Animal {
  constructor(name, health = Animal.defaultHealth) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static kill(victim) {
    Animal.alive = Animal.alive.filter(animal => animal !== victim);
  }
}

Animal.alive = [];
Animal.defaultHealth = 100;

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
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= Carnivore.damage;

      if (target.health <= 0) {
        Animal.kill(target);
      }
    }
  }
}

Carnivore.damage = 50;

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;

    return `${this.name} hide.`;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Carnivore || target.hidden) {
      return `${this.name} cannot attack ${target.name}`;
    } else {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.removeDeadAnimals();

        return `${target.name} dead.`;
      } else {
        return `${this.name}
        bite ${target.name}, health ${target.name}: ${target.health}`;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

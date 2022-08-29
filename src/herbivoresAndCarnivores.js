'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];
class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(creature) {
    const findCreature = Animal.alive.find(element => element === creature);
    const indexOfCreature = Animal.alive.indexOf(findCreature);

    if (creature.hidden === false) {
      creature.health += -50;
    }

    if (findCreature.health === 0) {
      Animal.alive.splice(indexOfCreature, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

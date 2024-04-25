'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeDead() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (
      target instanceof Carnivore ||
      (target.hidden && target instanceof Herbivore)
    ) {
      return;
    }

    target.health -= 50;
    Animal.removeDead();
  }
}

const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
const rabbit = new Herbivore('Max');

lion.bite(deer);
panther.bite(lion);

panther.bite(deer);
rabbit.hide();
panther.bite(rabbit);

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

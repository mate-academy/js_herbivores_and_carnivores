'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(goal) {
    if (goal instanceof Herbivore && !goal.hidden) {
      goal.health -= 50;

      const preyIndex = Animal.alive.indexOf(goal);

      Animal.alive.splice(preyIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

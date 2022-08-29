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
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(goal) {
    const indexOfGoal = Animal.alive.indexOf(goal);

    if (goal.hidden === false) {
      goal.health -= 50;
    }

    if (goal.health === 0) {
      Animal.alive.splice(indexOfGoal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';

class Animal {
  // write your code here
  static alive = [];
  health = 100;
  name;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hidden;

  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
  }

  bite(target) {
    if (target instanceof Herbivore) {
      return;
    }

    if (target.hidden === true) {
      return;
    }

    target.health = target.health - 50;

    Animal.alive = Animal.alive.filter((animal) => {
      return animal !== target;
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

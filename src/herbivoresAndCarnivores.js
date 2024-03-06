'use strict';

class Animal {
  // write your code here
  static alive = [];
  health = 100;
  hidden = false;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Herbivore extends Animal {
  // write your code here
}

class Carnivore extends Animal {
  // write your code here
  bite(obj) {
    if (obj instanceof Carnivore) {
      return;
    }

    if (obj.hidden === true) {
      return;
    }

    if (obj.health <= 0) {
      return;
    }

    obj.health -= 50;

    Animal.alive = Animal.alive.filter((elem) => {
      return elem.health !== 0;
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

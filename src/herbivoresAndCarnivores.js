'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
  static alive = [];
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);

    this.hidden = false;
  }
  hide() {
    (this.hidden) ? this.hidden = false : this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(name) {
    if ((name instanceof Herbivore) && (name.hidden === false)) {
      name.health -= 50;
      Animal.alive = Animal.alive.filter(everyone => everyone.health > 0)
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

'use strict';
class Animal {
  static alive = [];
  // write your code here
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.forEach((animal) => {
      if (animal === this) {
        animal['hidden'] = this.hidden;
      }
    });
  }

  hide() {
    this.hidden = true;

    Animal.alive.forEach((animal) => {
      if (animal === this) {
        animal['hidden'] = this.hidden;
      }
    });
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
    }

    if (prey.health <= 0) {
      Animal.alive = [...Animal.alive.filter((animal) => animal !== prey)];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

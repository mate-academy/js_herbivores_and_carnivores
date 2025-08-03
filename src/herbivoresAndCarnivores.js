'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(food) {
    if (food instanceof Herbivore && !food.hidden) {
      food.health -= 50;
    }

    Animal.alive = Animal.alive.filter((animal) => {
      if (animal.health >= 0 && animal !== food) {
        return animal;
      }
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

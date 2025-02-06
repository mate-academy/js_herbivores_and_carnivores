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

  bite(target) {
    const BITE_POWER = 50;

    Animal.alive.forEach((animal) => {
      if (animal === target) {
        if (animal instanceof Herbivore) {
          if (animal.hidden === false) {
            animal.health -= BITE_POWER;

            if (animal.health <= 0) {
              Animal.alive = Animal.alive.filter((a) => a.health > 0);
            }
          }
        }
      }
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

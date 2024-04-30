'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        animal.die();
      } else {
        process.stdout.write(
          this.name +
            ' bites ' +
            animal.name +
            '. ' +
            animal.name +
            "'s health is now " +
            animal.health +
            '\n',
        );
      }
    } else {
      process.stdout.write('Cannot bite this animal.\n');
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

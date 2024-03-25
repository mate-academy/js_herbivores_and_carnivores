'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.innerHealthVar = 100;
    this.name = name;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }

  set health(totalLifeDecreased) {
    this.innerHealthVar = !this.hidden
      ? totalLifeDecreased
      : this.innerHealthVar;

    if (this.innerHealthVar < 1) {
      this.innerHealthVar = 0;

      Animal.alive.splice(
        Animal.alive.findIndex((e) => e === this),
        1,
      );
    }
  }

  get health() {
    return this.innerHealthVar;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(herbivore) {
    herbivore.health -= 50;
  }

  set health(totalLifeDecreased) {}

  get health() {
    return this.innerHealthVar;
  }
}

const tiger = new Carnivore('Tiger');
const zebra = new Herbivore('Zebra');

tiger.bite(zebra);
tiger.bite(zebra);

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

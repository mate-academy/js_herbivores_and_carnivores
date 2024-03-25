'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.innerHealthVar = 100;
    this.name = name;
  }

  get health() {
    return this.innerHealthVar;
  }

  set health(totalLifeDecreased) {}
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

  // The prettier scripts don't accept this class without a pair getter
  get health() {
    return super.health;
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
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

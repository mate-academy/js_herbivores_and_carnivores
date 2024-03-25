'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.innerHealthVar = 100;
    this.name = name;
  }
  
  set health(totalLifeDecreased) {}

  get healt() {
    return this.innerHealthVar;
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

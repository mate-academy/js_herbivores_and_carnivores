'use strict';

class Animal {
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
  }

  static alive = [];
  static get alive() {
    if (this.alive === undefined) {
      this.alive = [];
      this.alive.push(this);
    }

    return this.alive;
  }

  static set alive(beast) {
    if (beast.health === 0) {
      this.alive.splice(
        this.alive.find((a, index) => {
          if (a === this) {
            return index;
          }
        }),
        1,
      );
    }
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(creature) {
    if (creature instanceof Herbivore && creature.hidden === false) {
      creature.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

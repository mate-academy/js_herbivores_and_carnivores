'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore) {
      if (victim.hidden !== true) {
        if (victim.health > 50) {
          victim.health -= 50;
        } else {
          victim.health -= 50;

          Animal.alive.filter((animal, i) => {
            if (Animal.alive[i].name === victim.name) {
              if (Animal.alive[i].health === 0) {
                Animal.alive.splice(i, 1);
              }
            }
          });
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

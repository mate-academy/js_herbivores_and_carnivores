'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
  // static alive = [];
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
    // Animal.alive.push({
    //   name: this.name,
    //   health: this.health,
    //   hidden: this.hidden,
    // });
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    // Animal.alive.push({
    //   name: this.name,
    //   health: this.health,
    // });
  }

  bite(victim) {
    if (victim.hidden === false) {
      victim.health -= 50;

      if (victim.health === 0) {
        Animal.alive = Animal.alive.filter(el => {
          if (el.name === victim.name) {
            return false;
          }

          return true;
        });
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

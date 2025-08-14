'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, hidden = false) {
    this.name = name;
    this.health = 100;
    this.hidden = hidden;

    Animal.alive.push(this);
  }

  static getAliveList() {
    return Animal.alive.map((animal) => {
      if (animal instanceof Herbivore) {
        return {
          name: animal.name,
          health: animal.health,
          hidden: animal.hidden,
        };
      } else {
        return { name: animal.name, health: animal.health };
      }
    });
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name, hidden);
  }
  // write your code here
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // No custom constructor needed as it only calls the parent constructor
  // write your code here
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

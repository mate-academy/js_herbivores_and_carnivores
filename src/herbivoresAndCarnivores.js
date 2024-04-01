'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this.constructor.name !== 'Herbivore') {
      Animal.alive.push(this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;

    Animal.alive = Animal.alive.map((objAnimal) => {
      if (objAnimal.name === this.name) {
        return { ...objAnimal, hidden: !objAnimal.hidden };
      } else {
        return objAnimal;
      }
    });
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (animal.constructor.name !== 'Carnivore' && animal.hidden !== true) {
      Animal.alive = Animal.alive
        .map((objAnimal) => {
          if (objAnimal === animal) {
            if (objAnimal.health <= 50) {
              return 'died';
            }
            objAnimal.health -= 50;
          }

          return objAnimal;
        })
        .filter((el) => el !== 'died');
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

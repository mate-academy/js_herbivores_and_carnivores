'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
  static alive = [];

  checkHealth() {
    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // The constructor is removed as it is redundant

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
      herbivore.checkHealth();
    }
  }
}

// Приклади використання:
const deer = new Herbivore('Bembi');
const panther = new Carnivore('Bagira');
const lion = new Carnivore('King');
const rabbit = new Herbivore('Max');

lion.bite(deer);
panther.bite(lion);

panther.bite(deer);
rabbit.hide();
panther.bite(rabbit);

// Додаткові дії для перевірки смерті:
deer.health = -10; // Змушуємо оленя "померти"
deer.checkHealth();

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

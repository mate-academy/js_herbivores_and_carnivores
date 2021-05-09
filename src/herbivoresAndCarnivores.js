'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) { // Почему eslint не дает мне написать
    super(name); // здесь просто hidden = false, без этого
    this.hidden = false; // тупого конструктора
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if ((victim instanceof Herbivore) && (victim.hidden === false)) {
      victim.health -= 50;

      if (victim.health <= 0) {
        const removeIndex = Animal.alive.indexOf(victim);

        Animal.alive.splice(removeIndex, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

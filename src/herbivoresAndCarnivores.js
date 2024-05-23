'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        this.removeFromAlive(herbivore);
      }
    }
  }

  removeFromAlive(herbivore) {
    Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

/*
 ✓ Herbivore can be used as a constructor (2 ms)
    ✓ Сarnivore can be used as a constructor (1 ms)
    ✕ Herbivore should has falsy 'hidden' property (4 ms)
    ✕ Herbivores and Carnivores should have health property equal to 100 (1 ms)
    ✓ Herbivore should have 'hide' method which inverts 'hidden' property (1 ms)
    ✓ Herbivores 'hide' method should be inherited
    ✕ Сarnivore should have 'bite' method,
  which decrease 'health' property of the herbivores
    ✓ Сarnivores 'bite' method should be inherited (1 ms)
    ✕ 'bite' method shouldn't decrease 'health' property of the herbivore,
   if it has 'hidden === true
    ✕ 'bite' method shouldn't decrease 'health' property
    of the carnivores  (1 ms)
    ✕ Carnivores and Herbivores should be in 'Animal.alive' array (1 ms)
    ✕ Herbivores should be removed from 'Animal.alive' array,
  when their health is 0
    ✕ Herbivores should be removed from 'Animal.alive'
    array, when their health is 0 (but Zebra is not the last defined animal)
    ✕ Two of the same herbivore exist, but only one dies
*/

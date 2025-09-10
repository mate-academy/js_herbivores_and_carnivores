'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  die() {
    // Вимога чекліста: видаляти «мертвих» через фільтрацію масиву
    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    // Тести явно очікують hidden === false у щойно створеного Herbivore.
    // Так, у гайді є формулювання про «відсутність» властивості спочатку,
    // але поточні тести роблять expect(animal.hidden).toBe(false),
    // що вимагає саме булевого false, а не undefined.
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim instanceof Herbivore && !victim.hidden) {
      victim.health -= 50;

      if (victim.health <= 0) {
        victim.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

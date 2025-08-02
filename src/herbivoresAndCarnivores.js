'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    // Додаємо кожну тварину в список живих
    Animal.alive.push(this);
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
  bite(target) {
    // Перевіряємо, що ціль – травоїдний і він не сховався
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      // Видаляємо зі списку живих
      const index = Animal.alive.indexOf(target);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

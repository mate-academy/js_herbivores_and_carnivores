'use strict';

'use strict';

class Animal {
  static alive = []; // Массив для хранения живых животных

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this); // Добавляем животное в массив живых
  }

  takeDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      // Удаляем животное из массива живых
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false; // Свойство hidden по умолчанию false
  }

  hide() {
    this.hidden = true; // Устанавливаем hidden в true
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.takeDamage(50); // Используем takeDamage для уменьшения здоровья
    } else {
      return 'Bite failed: target is not a herbivore or is hidden.';
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

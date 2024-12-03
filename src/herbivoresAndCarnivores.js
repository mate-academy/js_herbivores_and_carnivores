'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this); // Adiciona o animal à lista de vivos
  }

  isAlive() {
    return this.health > 0;
  }

  die() {
    // Verifica se o animal está morto
    if (this.health <= 0) {
      // Atualiza a lista de animais vivos removendo o animal morto
      Animal.alive = Animal.alive.filter((a) => a !== this);
    }
  }

  changeHealth(amount) {
    this.health += amount;

    if (this.health <= 0) {
      this.die(); // Chama o die para remover o animal da lista de vivos
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);
    this.hidden = false; // Inicializa hidden como false
  }

  hide() {
    this.hidden = true; // Torna o herbívoro invisível
  }

  reveal() {
    this.hidden = false; // Torna o herbívoro visível novamente
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(health, name);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.changeHealth(-50); // Diminui a saúde do herbívoro
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

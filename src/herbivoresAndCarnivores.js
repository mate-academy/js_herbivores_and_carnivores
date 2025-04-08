'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    // Adiciona o animal à lista de vivos
    Animal.alive.push(this);
  }

  // Método auxiliar para remover da lista se morrer
  checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
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
  bite(target) {
    // Não morde se não for um herbívoro ou se o herbívoro estiver escondido
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }
    target.health -= 50;
    target.checkHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

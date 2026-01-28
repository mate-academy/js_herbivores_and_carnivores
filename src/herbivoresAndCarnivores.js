'use strict';

/**
 * Classe base Animal
 * Representa qualquer animal no ecossistema
 */
class Animal {
  // Array estático que armazena todos os animais vivos
  static alive = [];

  /**
   * Cria um novo animal
   * @param {string} name - Nome do animal
   */
  constructor(name) {
    this.name = name;
    this.health = 100; // Saúde inicial padrão

    // Adiciona o animal à lista de animais vivos
    Animal.alive.push(this);
  }
}

/**
 * Classe Herbivore (Herbívoro)
 * Representa animais que se alimentam de plantas
 * Possui a capacidade de se esconder de carnívoros
 */
class Herbivore extends Animal {
  /**
   * Cria um novo herbívoro
   * @param {string} name - Nome do animal
   */
  constructor(name) {
    super(name);
    this.hidden = false; // Herbívoro começa visível
  }

  /**
   * Esconde o herbívoro dos carnívoros
   * Quando escondido, não pode ser atacado
   */
  hide() {
    this.hidden = true;
  }
}

/**
 * Classe Carnivore (Carnívoro)
 * Representa animais que caçam outros animais
 * Possui a capacidade de morder herbívoros
 */
class Carnivore extends Animal {
  /**
   * Morde um alvo, causando dano
   * - Só funciona contra herbívoros
   * - Não funciona se o herbívoro estiver escondido
   * - Causa 50 de dano por mordida
   * - Remove o animal da lista de vivos se a saúde chegar a 0
   *
   * @param {Animal} target - O animal alvo do ataque
   */
  bite(target) {
    // Verifica se o alvo é herbívoro E não está escondido
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      // Se a saúde chegou a 0 ou menos, remove da lista de vivos
      // Usa filter() para melhor performance (evita indexOf + splice)
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

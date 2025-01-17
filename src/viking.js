// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  } 
  receiveDamage(damage){
  this.health -= damage
  }
  
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super (health, strength);
    this.name = name;
    
  }
  receiveDamage(damage){
    let vikingLife = this.health -= damage;
    if(vikingLife > 0){
      return `${this.name} has received ${damage} points of damage`
    }
    if(vikingLife <= 0){
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return  `Odin Owns You All!`
  }
  
}
// Saxon
class Saxon extends Soldier{
  receiveDamage(damage){
    this.health -= damage;
    if(this.health > 0){
      return `A Saxon has received ${damage} points of damage`
    }
    if (this.health <= 0) {
      return `A Saxon has died in combat`
  }
  }
  

}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}
addViking(Viking) {
     this.vikingArmy.push(Viking);
}
addSaxon(Saxon) {
this.saxonArmy.push(Saxon);
}
vikingAttack() {
  let vikAttack = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength)
  if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.splice(0)
  }
  return vikAttack
}
saxonAttack() {
  let saxAttack = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength)
  if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.splice(0)
  }
  return saxAttack
}

showStatus() {
  const vikingWinMessage = "Vikings have won the war of the century!";
        const saxonWinMessage = "Saxons have fought for their lives and survived another day...";
        const tieMessage = "Vikings and Saxons are still in the thick of battle.";

        if (this.saxonArmy.length === 0) {
            return vikingWinMessage
        } else if (this.vikingArmy.length === 0) {
            return saxonWinMessage
        } else if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            return tieMessage
        }
}
  
}

 


let chosenMaxLife = 100
const ATTACK_VALUE = 10
const STRONG_ATTACK_VALUE=30
const MONSTER_ATTACK_VALUE = 14
let currentMonsterHealth = chosenMaxLife
let currentPlayerHealth = chosenMaxLife

const attackMonster=(playerAttack,monsterAttack)=>{
    const damage = dealMonsterDamage(playerAttack)
    const playerDamage = dealPlayerDamage(monsterAttack)
    currentMonsterHealth = currentMonsterHealth - damage
    currentPlayerHealth = currentPlayerHealth - playerDamage
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        console.log("won")
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth >= 0) {
        console.log("lost")
    } else if (currentMonsterHealth <= 0 && currentMonsterHealth <= 0) {
        console.log("draw")
    }
}

adjustHealthBars(chosenMaxLife)
//attack btn
const attackHandler = () => {
 attackMonster(ATTACK_VALUE,MONSTER_ATTACK_VALUE)

}
//strong attack btn
const strongAttackHandler=()=>{
   attackMonster(STRONG_ATTACK_VALUE,MONSTER_ATTACK_VALUE)
}

attackBtn.addEventListener('click', attackHandler)
strongAttackBtn.addEventListener('click',strongAttackHandler)
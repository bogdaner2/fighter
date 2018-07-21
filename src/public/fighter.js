// Create class Fighter
export default class Fighter
{
    constructor(name = 'Sasha',power = 20,health = '200')
    {
        this.name = name;
        this.power = power;
        this.health = health;
    }
    setDamage(damage){
        this.health -= damage;
        console.log(`${this.name}'s health : ${this.health} hp`)
    }
    hit(enemy,point)
    {
        let damage = point * this.power;
        enemy.setDamage(damage);
        return damage;
    }
    knockout(){
        return new Promise((resolve) => {
            console.log("Time is over!")
            setTimeout(() => {
                resolve('Game over!!!')
            }, 3000);
        });
    }
}

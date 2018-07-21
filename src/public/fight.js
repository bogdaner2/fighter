// create async function fight
import Fighter from './fighter';
import ImprovedFighter from './improvedFighter';

export const fight = async(fighter_weak,fighter_strogn,...points) => {
    console.log(`Points : ${points}`);
    console.log("======================");
    let turn = 0;
    while (turn < points.length){
        console.log("Turn #" + (turn+1) +" point : " + points[turn]);
        if(turn %2 == 0){
            Turn(fighter_weak,fighter_strogn,points[turn])
            if(isKnockout(fighter_strogn)){
                await GameOver(fighter_strogn);
                break;
            }
        }
        else{
            Turn(fighter_strogn,fighter_weak,points[turn])
            if(isKnockout(fighter_weak)){
                await GameOver(fighter_weak);
                break;
            }
        }
        console.log("=====================")
        turn = turn +1 ;
    }
}

const Turn = (fighter_attack,fighter_victim,point)=> {
    console.log(fighter_attack.name + " turn!")
    let damage = fighter_attack.hit(fighter_victim,point);
    if(!isKnockout(fighter_victim)) {
        console.log(fighter_attack.name + " damage " + damage + " points.")
    }
    else{
        console.log(fighter_attack.name + " kill " + fighter_victim.name)
    }
}

const isKnockout = (fighter) => {
    return fighter.health <= 0 ? true : false;}

const GameOver = async (fighter) => {
await fighter.knockout();
 console.log(fighter.name + " die!")
}


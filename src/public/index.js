// create two instances
import Fighter from './fighter';
import ImprovedFighter from './improvedFighter';
import {fight} from './fight';
console.log("Hello,fighters!")
var fighter_weak = new Fighter("Nikita",20);
console.log(`First on the boxing ring : "${fighter_weak.name}" with ${fighter_weak.health} hp.`);
var fighter_strong = new ImprovedFighter("Oleg");
console.log(`His strong opponent "${fighter_strong.name}" with ${fighter_strong.power} attack and ${fighter_strong.health} hp.`)
///Start
fight(fighter_weak,fighter_strong,0.1,0.2,0.3,0.4,0.5,0.6,3,4,5);
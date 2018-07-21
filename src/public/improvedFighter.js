// Create class ImprovedFighter
import Fighter from "./fighter";
export default class ImprovedFighter extends Fighter
{
    constructor(name = 'Big Sasha',power = '30',health = '400')
    {
        super(name,power,health);
    }
    hit(enemy,point)
    {
        return super.hit(enemy,point*2);
    }
}


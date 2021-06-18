class Role {
    constructor(health, physDmg, physRes, magDmg, magRes) {
        this.health = health;
        this.physDmg = physDmg;
        this.physRes = physRes;
        this.magDmg = magDmg;
        this.magRes = magRes;
    } 
}


class Monster extends Role {
    constructor(health, physDmg, physRes, magDmg, magRes, xp){
        super(Role)
        this.xp = xp;

    }
}

// module.exports = { Role, Monster};



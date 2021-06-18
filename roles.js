// const Role = require("./role-templates");

// class stats templates //

const alchemist = new Role(10, 2, 2, 5, 4);
const barbarian = new Role(18, 6, 3, 0, 0);
const spellbow = new Role(12, 3, 3, 4, 2)
const rogue = new Role(13, 5, 5, 0, 2)
const newMonster = new Monster(1,2,3,4,5,6);

console.log(alchemist);
console.log(barbarian);
console.log(spellbow);
console.log(rogue);
console.log(newMonster);

//////  HTML variables  ///////


// general container variables

const roleSelectContainer = document.querySelector('.role-selection-div');
const roleSelectTitle = document.querySelector('.role-select-title');

// initial role images

const alchemistImg = document.querySelector('#alchemist-img');
const barbarianImg = document.querySelector('#barbarian-img');
const spellbowImg = document.querySelector('#spellbow-img');
const rogueImg = document.querySelector('#rogue-img');


// initial character select buttons

const alchBtn = document.querySelector('.alch-btn');
const barbBtn = document.querySelector('.barb-btn');
const spellbBtn = document.querySelector('spellb-btn');
const rogueBtn = document.querySelector('rogue-btn');


// character select initial stats on selection screen

const healthNumPreview = document.querySelector('.health-num-preview');
const physDmgNumPreview = document.querySelector('.phys-dmg-num-preview');
const physResNumPreview = document.querySelector('.phys-res-num-preview');
const magicDmgNumPreview = document.querySelector('.magic-dmg-num-preview');
const magicResNumPreview = document.querySelector('.magic-res-num-preview');

console.log(healthNumPreview);


// buttons clicked changes the initial stats and un-hides


roleSelectContainer.addEventListener('click',(event) => {
    if (event.target.classList.contains('alch-btn')){
        // preview stats change
        healthNumPreview.innerText = alchemist.health;
        physDmgNumPreview.innerText = alchemist.physDmg;
        physResNumPreview.innerText = alchemist.physRes;
        magicDmgNumPreview.innerText = alchemist.magDmg;
        magicResNumPreview.innerText = alchemist.magRes;
        // remove hidden class for correct image, add to the others
        alchemistImg.classList.remove('hidden');
        barbarianImg.classList.add('hidden');
        spellbowImg.classList.add('hidden');
        rogueImg.classList.add('hidden');
        // change inner text for role specific message
        roleSelectTitle.innerText = "An Alchemist? Spending most of your time in the Halls of Knowledge I see."
    } else if (event.target.classList.contains('barb-btn')){
        // preview stats change
        healthNumPreview.innerText = barbarian.health;
        physDmgNumPreview.innerText = barbarian.physDmg;
        physResNumPreview.innerText = barbarian.physRes;
        magicDmgNumPreview.innerText = barbarian.magDmg;
        magicResNumPreview.innerText = barbarian.magRes;
        // remove hidden class for correct image, add to the others
        alchemistImg.classList.add('hidden');
        barbarianImg.classList.remove('hidden');
        spellbowImg.classList.add('hidden');
        rogueImg.classList.add('hidden');
        roleSelectTitle.innerText = "A Barbarian? How brutish...ahem.. I mean, quite the strong one you are."
    } else if (event.target.classList.contains('spellb-btn')){
        // preview stats change
        healthNumPreview.innerText = spellbow.health;
        physDmgNumPreview.innerText = spellbow.physDmg;
        physResNumPreview.innerText = spellbow.physRes;
        magicDmgNumPreview.innerText = spellbow.magDmg;
        magicResNumPreview.innerText = spellbow.magRes;
        // remove hidden class for correct image, add to the others
        alchemistImg.classList.add('hidden');
        barbarianImg.classList.add('hidden');
        spellbowImg.classList.remove('hidden');
        rogueImg.classList.add('hidden');
        roleSelectTitle.innerText = "A Spellbow? It's not often an elf of Kantra makes their way here."
    } else if (event.target.classList.contains('rogue-btn')){
        // preview stats change
        healthNumPreview.innerText = rogue.health;
        physDmgNumPreview.innerText = rogue.physDmg;
        physResNumPreview.innerText = rogue.physRes;
        magicDmgNumPreview.innerText = rogue.magDmg;
        magicResNumPreview.innerText = rogue.magRes;
        // remove hidden class for correct image, add to the others
        alchemistImg.classList.add('hidden');
        barbarianImg.classList.add('hidden');
        spellbowImg.classList.add('hidden');
        rogueImg.classList.remove('hidden');
        roleSelectTitle.innerText = "A Rogue? Your skills certainly will be welcomed in this setting."
    }
});







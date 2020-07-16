let gameConsole = document.getElementById('game-console');
let input = document.getElementById('input');
let playerHealthElement = document.getElementById('player-health');
let enemyHealthElement = document.getElementById('enemy-health');
let playerLevelElement = document.getElementById('player-level');
let playerExperienceElement = document.getElementById('player-experience');

//Player Information

function Player(name) {
    this.name = name;
    this.health;
    this.maxHealth;
    this.class;
    this.money = 0;
    this.level = 1;
    this.experience = 0;
    this.attacks;
    this.inventory = [];

    this.changeClass = function(newClass){
        if (this.experience === 0){
            this.class = newClass;
            if (newClass === 'mage'){
                this.health = 80;
                this.maxHealth = 80;
                this.attacks = ['Fireball', ' ?????? ', ' ?????? '];
            } else if (newClass === 'archer'){
                this.health = 115;
                this.maxHealth = 115;
                this.attacks = ['Sonic Arrow', ' ?????? ', ' ?????? '];
            } else if (newClass === 'warrior'){
                this.health = 150;
                this.maxHealth = 150;
                this.attacks = ['Stab', ' ?????? ', ' ?????? '];
            }
        } else {
            gameConsole.innerHTML = 'You cannot change classes after developing a character!';
        }
    }
};

const expToLevelUp = [0, 100, 300, 600, 1000, 1500, 2100, 2800, 3600, 4500, 55000, 100000000];

//End Player Information

//Multifunctional Buttons

let newPlayer;
let chosenName = false;
let chosenClass = false;
let characterComplete = false;
let itemStoreTrigger = false;
let trainingRoom = false;
let battleTrigger = false;
let inventoryOpen = false;
let craftonGrafton = false;

let submit = () =>{
    if (chosenName === false){
    newPlayer = new Player(input.value);
    gameConsole.innerHTML = `Welcome, ${newPlayer.name}! Now it's time to choose your class! What will it be? Mage, Warrior, or Archer?`;
    chosenName = true;
    } else if(chosenName === true && chosenClass === false){
        if (input.value.toLowerCase() === 'mage'){
            newPlayer.changeClass(input.value.toLowerCase());
            gameConsole.innerHTML = `${newPlayer.name} the ${newPlayer.class}? Has a nice ring to it! Click the train button to begin playing!`;
            chosenClass = true;
            characterComplete = true;
            playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
            playerLevelElement.innerHTML = `${newPlayer.name}'s Level: ${newPlayer.level}`;
            playerExperienceElement.innerHTML = `Exp to Level Up: ${expToLevelUp[newPlayer.level] - newPlayer.experience}`;
        } else if (input.value.toLowerCase() === 'warrior'){
            newPlayer.changeClass(input.value.toLowerCase());
            gameConsole.innerHTML = `${newPlayer.name} the ${newPlayer.class}? Has a nice ring to it! Click the train button to begin playing!`;
            chosenClass = true;
            characterComplete = true;
            playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
            playerLevelElement.innerHTML = `${newPlayer.name}'s Level: ${newPlayer.level}`; 
            playerExperienceElement.innerHTML = `Exp to Level Up: ${expToLevelUp[newPlayer.level] - newPlayer.experience}`;
        } else if (input.value.toLowerCase() === 'archer'){
            newPlayer.changeClass(input.value.toLowerCase());
            gameConsole.innerHTML = `${newPlayer.name} the ${newPlayer.class}? Has a nice ring to it! Click the train button to begin playing!`;
            chosenClass = true;
            characterComplete = true;
            playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
            playerLevelElement.innerHTML = `${newPlayer.name}'s Level: ${newPlayer.level}`;
            playerExperienceElement.innerHTML = `Exp to Level Up: ${expToLevelUp[newPlayer.level] - newPlayer.experience}`;
        } else {
            gameConsole.innerHTML = `${input.value} is not a class! Choose from one of these three: Mage, Warrior, Archer.`;
        }
    } else if (itemStoreTrigger === true){
        if (input.value.toLowerCase() === 'potion'){
            if(newPlayer.money >= 50){
                newPlayer.inventory.push('potion');
                newPlayer.money -= 50;
                gameConsole.innerHTML = `Thanks for your purchase! Would you like to buy anything else? Potion - 50 gold, Super Potion - 75 gold, Super Mega Potion - 150 gold. <br> Your Money: ${newPlayer.money} gold.`;
            } else if (newPlayer.money < 50){
                gameConsole.innerHTML = `You don't have enough money!`;
            }
        } else if(input.value.toLowerCase() === 'super potion'){
            if (newPlayer.money >= 75){
                newPlayer.inventory.push('super potion');
                newPlayer.money -= 75;
                gameConsole.innerHTML = `Thanks for your purchase! Would you like to buy anything else? Potion - 50 gold, Super Potion - 75 gold, Super Mega Potion - 150 gold. <br> Your Money: ${newPlayer.money} gold.`;
            } else if (newPlayer.money < 75){
                gameConsole.innerHTML = `You don't have enough money!`;
            }
        } else if (input.value.toLowerCase() === 'super mega potion'){
            if (newPlayer.money >= 150){
                newPlayer.inventory.push('super mega potion');
                newPlayer.money -= 150;
                gameConsole.innerHTML = `Thanks for your purchase! Would you like to buy anything else? Potion - 50 gold, Super Potion - 75 gold, Super Mega Potion - 150 gold. <br> Your Money: ${newPlayer.money} gold.`;
            } else if (newPlayer.money < 150){
                gameConsole.innerHTML = `You don't have enough money!`;
            }
        }
    } else if (trainingRoom === true){
        battleTrigger = true;
        if (input.value.toLowerCase() === 'goblin'){
            enemy = 'Goblin';
            newMob = new Mob(enemy);
            mobArray.push(newMob);
            enemyHealthElement.innerHTML = `${newMob.type}'s Health: ${newMob.health}`;
            gameConsole.innerHTML = `You prepare to attack the Goblin, which attack do you choose? (Type your attack and then press the attack button!) <br> Your Attacks: ${newPlayer.attacks.join(' | ')}`;
        } else if (input.value.toLowerCase() === 'giant dragonfly'){
            enemy = 'Giant Dragonfly';
            newMob = new Mob(enemy);
            mobArray.push(newMob);
            enemyHealthElement.innerHTML = `${newMob.type}'s Health: ${newMob.health}`;
            gameConsole.innerHTML = `You prepare to attack the Giant Dragonfly, which attack do you choose? (Type your attack and then press the attack button!) <br> Your Attacks: ${newPlayer.attacks.join(' | ')}`;
        } else if (input.value.toLowerCase() === 'lesser wyrm'){
            enemy = 'Lesser Wyrm';
            newMob = new Mob(enemy);
            mobArray.push(newMob);
            enemyHealthElement.innerHTML = `${newMob.type}'s Health: ${newMob.health}`;
            gameConsole.innerHTML = `You prepare to attack the Lesser Wyrm, which attack do you choose? (Type your attack and then press the attack button!) <br> Your Attacks: ${newPlayer.attacks.join(' | ')}`;
        } else if (input.value.toLowerCase() === 'greater wyrm'){
            enemy = 'Greater Wyrm';
            newMob = new Mob(enemy);
            mobArray.push(newMob);
            enemyHealthElement.innerHTML = `${newMob.type}'s Health: ${newMob.health}`;
            gameConsole.innerHTML = `You prepare to attack the Greater Wyrm, which attack do you choose? (Type your attack and then press the attack button!) <br> Your Attacks: ${newPlayer.attacks.join(' | ')}`;
        } else if (input.value.toLowerCase() === 'behemoth'){
            enemy = 'Behemoth';
            newMob = new Mob(enemy);
            mobArray.push(newMob);
            enemyHealthElement.innerHTML = `${newMob.type}'s Health: ${newMob.health}`;
            gameConsole.innerHTML = `You prepare to attack the Behemoth, which attack do you choose? (Type your attack and then press the attack button!) <br> Your Attacks: ${newPlayer.attacks.join(' | ')}`;
        }
    } else if (inventoryOpen === true){
        if (input.value.toLowerCase() === 'potion'){
            if (!newPlayer.inventory.includes('potion')){
                gameConsole.innerHTML = `You're fresh out of potions!`;
            } else {
                let p = newPlayer.inventory.indexOf('potion');
                newPlayer.inventory.splice(p, 1);
                if (newPlayer.health < newPlayer.maxHealth - 50){
                    newPlayer.health += 50;
                    gameConsole.innerHTML = `Your health has been restored by 50 points! Click the inventory button.`;
                    playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
                } else if (newPlayer.health >= newPlayer.maxHealth - 50){
                    newPlayer.health = newPlayer.maxHealth;
                    gameConsole.innerHTML = `You have been restored to max health! Click the inventory button.`;
                    playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
                }
            }
        } else if (input.value.toLowerCase() === 'super potion'){
            if (!newPlayer.inventory.includes('super potion')){
                gameConsole.innerHTML = `You're fresh out of super potions!`;
            } else {
                let sp = newPlayer.inventory.indexOf('super potion');
                newPlayer.inventory.splice(sp, 1);
                if (newPlayer.health < newPlayer.maxHealth - 75){
                    newPlayer.health += 75;
                    gameConsole.innerHTML = `Your health has been restored by 75 points! Click the inventory button.`;
                    playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
                } else if (newPlayer.health >= newPlayer.maxHealth - 75){
                    newPlayer.health = newPlayer.maxHealth;
                    gameConsole.innerHTML = `You have been restored to max health! Click the inventory button.`;
                    playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
                }
            }
        } else if (input.value.toLowerCase() === 'super mega potion'){
            if (!newPlayer.inventory.includes('super mega potion')){
                gameConsole.innerHTML = `You're fresh out of super mega potions!`;
            } else {
                let smp = newPlayer.inventory.indexOf('super mega potion');
                newPlayer.inventory.splice(smp, 1);
                if (newPlayer.health < newPlayer.maxHealth - 150){
                    newPlayer.health += 150;
                    gameConsole.innerHTML = `Your health has been restored by 150 points! Click the inventory button.`;
                    playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
                } else if (newPlayer.health >= newPlayer.maxHealth - 150){
                    newPlayer.health = newPlayer.maxHealth;
                    gameConsole.innerHTML = `You have been restored to max health! Click the inventory button.`;
                    playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
                }
            }
        }
    } 
};

//End Multifunctional Buttons

//Mob Creation

let mobArray = [];

let enemy;
let newMob;

function Mob (type){
    this.type = type;
    this.health;
    this.attacks;
    this.money;
    this.experience;
    this.inventory;

    this.generate = function(){
        if (this.type === 'Goblin'){
            this.health = 50;
            this.attacks = ['Punch'];
            this.money = 25;
            this.experience = 20;
        } else if (this.type === 'Giant Dragonfly'){
            this.health = 75;
            this.attacks = ['Pin Needle'];
            this.money = 35;
            this.experience = 35;
        } else if (this.type === 'Lesser Wyrm'){
            this.health = 100;
            this.attacks = ['Fire Breath', 'Ice Breath'];
            this.money = 50;
            this.experience = 55;
        } else if (this.type === 'Greater Wyrm'){
            this.health = 150;
            this.attacks = ['Ice Breath', 'Lightning Breath'];
            this.money = 75;
            this.experience = 75;
        } else if (this.type === 'Behemoth'){
            this.health = 200;
            this.attacks = ['Charge', 'Impale', 'Earthquake'];
            this.money = 100;
            this.experience = 125;
        } else if (this.type === 'Crafton Grafton'){
            this.health = 500;
            this.attacks = ['Computer Mouse Crush', 'Monitor Slam', 'Read Emails', 'Super Mega Potion'];
            this.money = 1000;
            this.experience = 500;
            this.inventory = ['super mega potion', 'super mega potion'];
        }
    };
    this.generate();
};

//End Mob Creation

//Attack Damages

let levelScale = () =>{
    stab += 5;
    slash += 5;
    reapingBlade += 5;
    fireball += 5;
    shrapnelIce += 5;
    thunderbolt += 5;
    sonicArrow += 5;
    doubleArrow += 5;
    heartStrike += 5;
    newPlayer.maxHealth += 25;
    if (newPlayer.level === 10){
        playerLevelElement.innerHTML = `${newPlayer.name}'s Level: Max`;
    }
    let index;
    if (newPlayer.class.toLowerCase() === 'warrior'){
        if (newPlayer.level === 3){
            index = newPlayer.attacks.indexOf(' ?????? ');
            newPlayer.attacks.splice(index, 2);
            newPlayer.attacks.push('Slash', ' ?????? ');
        } else if (newPlayer.level === 5){
            index = newPlayer.attacks.indexOf(' ?????? ');
            newPlayer.attacks.splice(index, 1);
            newPlayer.attacks.push('Reaping Blade');
        }
    } else if (newPlayer.class.toLowerCase() === 'mage'){
        if (newPlayer.level === 3){
            index = newPlayer.attacks.indexOf(' ?????? ');
            newPlayer.attacks.splice(index, 2);
            newPlayer.attacks.push('Shrapnel Ice', ' ?????? ');
        } else if (newPlayer.level === 5){
            index = newPlayer.attacks.indexOf(' ?????? ');
            newPlayer.attacks.splice(index, 1);
            newPlayer.attacks.push('Thunderbolt');
        }
    } else if (newPlayer.class.toLowerCase() === 'archer'){
        if (newPlayer.level === 3){
            index = newPlayer.attacks.indexOf(' ?????? ');
            newPlayer.attacks.splice(index, 2);
            newPlayer.attacks.push('Double Arrow', ' ?????? ');
        } else if (newPlayer.level === 5){
            index = newPlayer.attacks.indexOf(' ?????? ');
            newPlayer.attacks.splice(index, 1);
            newPlayer.attacks.push('Heart Strike');
        }
    }
};

let stab = 25;
let slash = 35;
let reapingBlade = 50;
let fireball = 35;
let shrapnelIce = 45;
let thunderbolt = 60;
let sonicArrow = 30;
let doubleArrow = 40;
let heartStrike = 55;
let punch = 15;
let pinNeedle = 25;
let fireBreath = 35;
let iceBreath = 40;
let lightningBreath = 50;
let charge = 60;
let impale = 65;
let earthquake = 70;
let computerMouseCrush = 100;
let monitorSlam = 125;
let readEmails = 150;
let superMegaPotionAttack = 0;

let findPlayerAttack = () =>{
    if (input.value.toLowerCase() === 'stab'){
        return stab;
    } else if (input.value.toLowerCase() === 'slash'){
        return slash;
    } else if (input.value.toLowerCase() === 'reaping blade'){
        return reapingBlade;
    } else if (input.value.toLowerCase() === 'fireball'){
        return fireball;
    } else if (input.value.toLowerCase() === 'shrapnel ice'){
        return shrapnelIce;
    } else if (input.value.toLowerCase() === 'thunderbolt'){
        return thunderbolt;
    } else if (input.value.toLowerCase() === 'sonic arrow'){
        return sonicArrow;
    } else if (input.value.toLowerCase() === 'double arrow'){
        return doubleArrow;
    } else if (input.value.toLowerCase() === 'heart strike'){
        return heartStrike;
    }
};

let potionFlag = 0;

let generateMobAttack = (random) =>{
    if (random === 'Punch'){
        return punch;
    } else if (random === 'Pin Needle'){
        return pinNeedle;
    } else if (random === 'Fire Breath'){
        return fireBreath;
    } else if (random === 'Ice Breath'){
        return iceBreath;
    } else if (random === 'Lightning Breath'){
        return lightningBreath;
    } else if (random === 'Charge'){
        return charge;
    } else if (random === 'Impale'){
        return impale;
    } else if (random === 'Earthquake'){
        return earthquake;
    } else if (random === 'Computer Mouse Crush'){
        return computerMouseCrush;
    } else if (random ===  'Monitor Slam'){
        return monitorSlam;
    } else if (random === 'Read Emails'){
        return readEmails;
    } else if (random === 'Super Mega Potion'){
        if (newMob.inventory.includes('super mega potion')){
        potionFlag = 150;
        return superMegaPotionAttack;
        } else if (!newMob.inventory.includes('super mega potion')){
            potionFlag = 0;
            return computerMouseCrush;
        }
    }
};



//End Attack Damage Information 

//Gameplay Functions

let itemStore = () =>{
    inventoryOpen = false;
    if (battleTrigger === false){
        itemStoreTrigger = true;
        trainingRoom = false;
        gameConsole.innerHTML = 'Welcome to the Item Store! What would you like to buy? Potions cost 50 gold, Super Potions cost 75 gold, and Super Mega Potions cost 150 gold. (You can only buy them one at a time)' + '<br> Your Money: ' + newPlayer.money;
    } else if (battleTrigger === true){
        gameConsole.innerHTML = `You can't visit the Item Store during battle! Which attack do you choose? ${newPlayer.attacks.join(' | ')}`;
    }
};

let train = () =>{
    itemStoreTrigger = false;
    inventoryOpen = false;
    trainingRoom = true;
    if (characterComplete === false){
        gameConsole.innerHTML = `You can't fight without a character! Type in your name and press submit to get started!`;
    } else if (battleTrigger === true){
        gameConsole.innerHTML = `You're already in a fight! Which attack do you choose? ${newPlayer.attacks.join(' | ')}`;
    } else {
        gameConsole.innerHTML = `What do you want to fight? Goblin, Giant Dragonfly, Lesser Wyrm, Greater Wyrm, or the Behemoth? (Just type the name of the enemy and press submit!)`;
    }
};

let rest = () =>{
    inventoryOpen = false;
    itemStoreTrigger = false;
    if (battleTrigger === true){
        gameConsole.innerHTML = `You can't rest during battle! Which attack do you choose? ${newPlayer.attacks.join(' | ')}`;
    } else if (battleTrigger === false){
        newPlayer.health = newPlayer.maxHealth;
        gameConsole.innerHTML = `You take a moment to regain your strength. You are now back to full health!`;
        playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.maxHealth}`;
    }
};

let mouse = '??????';

let inventory = () =>{
    itemStoreTrigger = false;
    if (inventoryOpen === false){
        inventoryOpen = true;
        trainingRoom = false;
        let potions = newPlayer.inventory.filter(item=>{
            return item === 'potion';
        });
        
        let superPotions = newPlayer.inventory.filter(item=>{
            return item === 'super potion';
        });
        
        let superMegaPotions = newPlayer.inventory.filter(item=>{
            return item === 'super mega potion';
        });
        let crushedComputerMouse = newPlayer.inventory.filter(item=>{
            return item === 'Crushed Computer Mouse';
        });
        gameConsole.innerHTML = `You have the following Items: Potions: ${potions.length} | Super Potions: ${superPotions.length} | Super Mega Potions: ${superMegaPotions.length} | ${mouse}: ${crushedComputerMouse.length}. <br> Type the potion you wish to use and press submit, or click the inventory button again to close.`;
    } else if (inventoryOpen === true && battleTrigger === true){
        inventoryOpen = false;
        trainingRoom = true;
        gameConsole.innerHTML = `You prepare to attack the Lesser Wyrm, which attack do you choose? (Type your attack and then press the attack button!) <br> Your Attacks: ${newPlayer.attacks.join(' | ')}`;
    } else if (inventoryOpen === true && battleTrigger === false){
        gameConsole.innerHTML = `Click the train button to get stronger or click the Item Store to visit the Item Store`;
        inventoryOpen = false;
        titleScreenAnimate = true;
    }
};



//End Gameplay Functions

//Battle Functions

let pendingPlayerHealth;

let attack = () =>{
    if (battleTrigger === false || trainingRoom === false){
        gameConsole.innerHTML = `You need to be in a fight before you can attack something! Click the train button to enter a fight!`;
    } else if (battleTrigger === true && craftonGrafton === false){
        if (input.value.toLowerCase() === newPlayer.attacks[0].toLowerCase()){
            let mobAttack = newMob.attacks[Math.floor(Math.random() * newMob.attacks.length)];
            gameConsole.innerHTML = `You use ${input.value} on the ${enemy} and deal ${findPlayerAttack()} damage! The ${enemy} uses ${mobAttack} and deals ${generateMobAttack(mobAttack)} damage! <br> Which attack do you choose? Your Attacks: ${newPlayer.attacks.join(' | ')}`;
            pendingPlayerHealth = newPlayer.health - generateMobAttack(mobAttack);
            newMob.health -= findPlayerAttack();
            checkMobStatus();
        } else if (input.value.toLowerCase() === newPlayer.attacks[1].toLowerCase()){
            let mobAttack = newMob.attacks[Math.floor(Math.random() * newMob.attacks.length)];
            gameConsole.innerHTML = `You use ${input.value} on the ${enemy} and deal ${findPlayerAttack()} damage! The ${enemy} uses ${mobAttack} and deals ${generateMobAttack(mobAttack)} damage! <br> Which attack do you choose? Your Attacks: ${newPlayer.attacks.join(' | ')}`;
            pendingPlayerHealth = newPlayer.health - generateMobAttack(mobAttack);
            newMob.health -= findPlayerAttack();
            checkMobStatus();
        } else if (input.value.toLowerCase() === newPlayer.attacks[2].toLowerCase()){
            let mobAttack = newMob.attacks[Math.floor(Math.random() * newMob.attacks.length)];
            gameConsole.innerHTML = `You use ${input.value} on the ${enemy} and deal ${findPlayerAttack()} damage! The ${enemy} uses ${mobAttack} and deals ${generateMobAttack(mobAttack)} damage! <br> Which attack do you choose? Your Attacks: ${newPlayer.attacks.join(' | ')}`;
            pendingPlayerHealth = newPlayer.health - generateMobAttack(mobAttack);
            newMob.health -= findPlayerAttack();
            checkMobStatus();
        } else {
            gameConsole.innerHTML = `You don't have a ${input.value} attack. Try again! <br> Your Attacks: ${newPlayer.attacks.join(' | ')}`;
        }
    } else if (craftonGrafton === true && battleTrigger === true){
        if (input.value.toLowerCase() === newPlayer.attacks[0].toLowerCase()){
            let mobAttack = newMob.attacks[Math.floor(Math.random() * newMob.attacks.length)];
            if (mobAttack === 'Super Mega Potion' && !newMob.inventory.includes('super mega potion')){
                mobAttack = 'Computer Mouse Crush';
            };
            gameConsole.innerHTML = `You use ${input.value} on ${enemy} and deal ${findPlayerAttack()} damage! ${enemy} uses ${mobAttack} and deals ${generateMobAttack(mobAttack)} damage! <br> Which attack do you choose? Your Attacks: ${newPlayer.attacks.join(' | ')}`;
            pendingPlayerHealth = newPlayer.health - generateMobAttack(mobAttack);
            newMob.health -= findPlayerAttack() - potionFlag;
            if (potionFlag === 150){
                let index = newMob.inventory.indexOf('super mega potion');
                newMob.inventory.splice(index, 1);
            };
            potionFlag = 0;
            checkMobStatus();
        } else if (input.value.toLowerCase() === newPlayer.attacks[1].toLowerCase()){
            let mobAttack = newMob.attacks[Math.floor(Math.random() * newMob.attacks.length)];
            if (mobAttack === 'Super Mega Potion' && !newMob.inventory.includes('super mega potion')){
                mobAttack = 'Computer Mouse Crush';
            };
            gameConsole.innerHTML = `You use ${input.value} on ${enemy} and deal ${findPlayerAttack()} damage! ${enemy} uses ${mobAttack} and deals ${generateMobAttack(mobAttack)} damage! <br> Which attack do you choose? Your Attacks: ${newPlayer.attacks.join(' | ')}`;
            pendingPlayerHealth = newPlayer.health - generateMobAttack(mobAttack);
            newMob.health -= findPlayerAttack() - potionFlag;
            if (potionFlag === 150){
                let index = newMob.inventory.indexOf('super mega potion');
                newMob.inventory.splice(index, 1);
            };
            potionFlag = 0;
            checkMobStatus();
        } else if (input.value.toLowerCase() === newPlayer.attacks[2].toLowerCase()){
            let mobAttack = newMob.attacks[Math.floor(Math.random() * newMob.attacks.length)];
            if (mobAttack === 'Super Mega Potion' && !newMob.inventory.includes('super mega potion')){
                mobAttack = 'Computer Mouse Crush';
            };
            gameConsole.innerHTML = `You use ${input.value} on ${enemy} and deal ${findPlayerAttack()} damage! ${enemy} uses ${mobAttack} and deals ${generateMobAttack(mobAttack)} damage! <br> Which attack do you choose? Your Attacks: ${newPlayer.attacks.join(' | ')}`;
            pendingPlayerHealth = newPlayer.health - generateMobAttack(mobAttack);
            newMob.health -= findPlayerAttack() - potionFlag;
            if (potionFlag === 150){
                let index = newMob.inventory.indexOf('super mega potion');
                newMob.inventory.splice(index, 1);
            };
            potionFlag = 0;
            checkMobStatus();
        } else {
            gameConsole.innerHTML = `You don't have a ${input.value} attack. Try again! <br> Your Attacks: ${newPlayer.attacks.join(' | ')}`;
        }
    }
};

let checkMobStatus = () =>{
    if (newMob.type === 'Crafton Grafton'){
        if (newMob.health <= 0 ){
            if (newPlayer.experience < expToLevelUp[newPlayer.level] - newMob.experience){
                gameConsole.innerHTML = `You have defeated ${enemy}! Crafton Grafton: What!? How is this possible?! No one has ever defeated me before! <br>You gained ${newMob.experience} experience! You received ${newMob.money} gold`;
                newPlayer.experience += newMob.experience;
                newPlayer.money += newMob.money;
                battleTrigger = false;
                trainingRoom = false;
                newMob = undefined;
                enemy = undefined;
                pendingPlayerHealth = undefined;
                playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
                enemyHealthElement.innerHTML = `Enemy Health:`;
                playerExperienceElement.innerHTML = `Exp to Level Up: ${expToLevelUp[newPlayer.level] - newPlayer.experience}`;
                setTimeout(endGame, 8000);
            } else if (newPlayer.experience >= expToLevelUp[newPlayer.level] - newMob.experience){
                newPlayer.experience += newMob.experience;
                newPlayer.level += 1;
                levelScale();
                newPlayer.health = newPlayer.maxHealth;
                newPlayer.money += newMob.money;
                gameConsole.innerHTML = `You have defeated ${enemy}! <br>Crafton Grafton: What!? How is this possible?! No one has ever defeated me before! <br>You gained ${newMob.experience} experience! Congratulations, you leveled up! You are now level ${newPlayer.level}! <br> You received ${newMob.money} gold.`;
                playerLevelElement.innerHTML = `${newPlayer.name}'s Level: ${newPlayer.level}`;
                battleTrigger = false;
                trainingRoom = false;
                newMob = undefined;
                enemy = undefined;
                pendingPlayerHealth = undefined;
                playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.maxHealth}`;
                enemyHealthElement.innerHTML = `Enemy Health:`;
                playerExperienceElement.innerHTML = `Exp to Level Up: ${expToLevelUp[newPlayer.level] - newPlayer.experience}`;
                setTimeout(endGame, 8000);
            }
        } else if (newMob.health > 0){
            newPlayer.health = pendingPlayerHealth;
            checkPlayerStatus();
        }
    } else if (newMob.health <= 0 ){
        if (newPlayer.experience < expToLevelUp[newPlayer.level] - newMob.experience){
            gameConsole.innerHTML = `You have defeated the ${enemy}! You gained ${newMob.experience} experience! You received ${newMob.money} gold.`;
            newPlayer.experience += newMob.experience;
            newPlayer.money += newMob.money;
            battleTrigger = false;
            trainingRoom = false;
            newMob = undefined;
            enemy = undefined;
            pendingPlayerHealth = undefined;
            playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
            enemyHealthElement.innerHTML = `Enemy Health:`;
            playerExperienceElement.innerHTML = `Exp to Level Up: ${expToLevelUp[newPlayer.level] - newPlayer.experience}`;
        } else if (newPlayer.experience >= expToLevelUp[newPlayer.level] - newMob.experience){
            newPlayer.experience += newMob.experience;
            newPlayer.level += 1;
            levelScale();
            newPlayer.health = newPlayer.maxHealth;
            newPlayer.money += newMob.money;
            gameConsole.innerHTML = `You have defeated the ${enemy}! You gained ${newMob.experience} experience! Congratulations, you leveled up! You are now level ${newPlayer.level}! <br> You received ${newMob.money} gold.`;
            playerLevelElement.innerHTML = `${newPlayer.name}'s Level: ${newPlayer.level}`;
            battleTrigger = false;
            trainingRoom = false;
            newMob = undefined;
            enemy = undefined;
            pendingPlayerHealth = undefined;
            playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.maxHealth}`;
            enemyHealthElement.innerHTML = `Enemy Health:`;
            playerExperienceElement.innerHTML = `Exp to Level Up: ${expToLevelUp[newPlayer.level] - newPlayer.experience}`;
        }
    } else if (newMob.health > 0){
        newPlayer.health = pendingPlayerHealth;
        checkPlayerStatus();
    }
};

let checkPlayerStatus = () =>{
    if (newPlayer.health <= 0){
        gameConsole.innerHTML = `Oh dear! You have died! You awaken after a blackout with half of your money missing...`;
        newPlayer.money /= 2;
        newPlayer.health = newPlayer.maxHealth;
        battleTrigger = false;
        trainingRoom = false;
        newMob = undefined;
        enemy = undefined;
        pendingPlayerHealth = undefined;
        playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
        enemyHealthElement.innerHTML = `Enemy Health:`;
    } else if (newPlayer.health > 0){
        playerHealthElement.innerHTML = `${newPlayer.name}'s Health: ${newPlayer.health}`;
        enemyHealthElement.innerHTML = `${newMob.type}'s Health: ${newMob.health}`;
        pendingPlayerHealth = undefined;
    }
};

//End Battle Functions

//Final Boss Fight

let craftonGraftonDefeated = false;

let finalBossFight = () =>{
    if (craftonGrafton === false){
        craftonGrafton = true;
        inventoryOpen = false;
        itemStoreTrigger = false;
        trainingRoom = false;
        battleTrigger = false;
        gameConsole.innerHTML = 'Crafton Grafton: HAHAHAHAHAHA! You really think you can defeat me!? We will see about that! <br> Crafton Grafton is not to be taken lightly...Type yes or no and press the Final Boss Fight button to make your decision.';
    } else if (craftonGrafton === true){
        if (input.value.toLowerCase() === 'no'){
            craftonGrafton = false;
            gameConsole.innerHTML = `Crafton Grafton: PATHETIC. I knew you were too scared to face me! HAHAHAHAHAHAHA!`;
        } else if (input.value.toLowerCase() === 'yes'){
            trainingRoom = true;
            battleTrigger = true;
            enemy = 'Crafton Grafton';
            newMob = new Mob(enemy);
            mobArray.push(newMob);
            enemyHealthElement.innerHTML = `${newMob.type}'s Health: ${newMob.health}`;
            gameConsole.innerHTML = `You prepare to attack Crafton Grafton, which attack do you choose? (Type your attack and then press the attack button!) <br> Your Attacks: ${newPlayer.attacks.join(' | ')}`;
        }
    }
};

let endGame = () =>{
    gameConsole.innerHTML = `Your hard work has paid off. Congratulations, you have beaten the game! As Crafton Grafton fades away, all that is left is an old crushed computer mouse...<br> ${newPlayer.name} received Crushed Computer Mouse.`;
    mouse = 'Crushed Computer Mouse';
    newPlayer.inventory.push('Crushed Computer Mouse');
};

//End of Game Functionality


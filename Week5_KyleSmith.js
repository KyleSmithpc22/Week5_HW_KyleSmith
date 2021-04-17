// a class for making the a Pokémon for your team by haveong a name and level
class Pokémon {
    constructor(name, level){
        this.name = name;
        this.level = level;
    }
}

// a class for the teams that hold the Pokémon thats a name and also holds the Pokémon in an array
class Team {
    constructor(name){
        this.name = name;
        this.pokémons = [];
    }

    // This is a Function within the class Team
    addPlayer(pokémon){
        if (pokémon instanceof Pokémon){
            this.pokémon.push(pokémon); // Pushes the pokemon to the array
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${pokémon}`);
        }
    }
}

// a class for the menu
class Menu {
    constructor(){
        this.teams = []; // is the array that holds the teams
        this.selectedTeam = null;
    }

    // is the options for the menu and brings you to the correct function on a case by case bases
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection) {
                case `1`:
                    this.createTeam(); // goes to function createTeam
                    break;
                case `2`:
                    this.viewTeam(); // goes to function viewTeam
                    break;
                case `3`:
                    this.deleteTeam(); // goes to function deleteTeam
                    break;
                case `4`:
                    this.displayTeams(); // goes to function displayTeams
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        // gives them a farewell alert
        alert(`Good luck out there!`); 
    }

    // the function that will show the user the options in the main menu
    showMainMenuOptions(){
        return prompt(`
        Welcome to Pokémon Dream Team Maker!

            0) Exit
            1) Create a new Pokémon team
            2) View a Pokémon team
            3) Delete a Pokémon team
            4) Display all Pokémon teams

            PS: Plz dont sue me Nintendo also if you know nothing about 
                  Pokémon this is a weird one
        `)
    }


    // the function that will show the user the options in the team they picked
    showTeammenuOptions(teamInfo) {
        return prompt(`
        0) back
        1) Add Pokémon
        2) Remove Pokémon
        -------------------
        ${teamInfo}
        `);
    }

    // the function that will display all teams
    displayTeams(){
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + `) ` + this.teams[i].name + '\n';
        }
        alert(teamString);
    }

// the function that is called to create a now team
createTeam() {
    let name = prompt(`Enter name for your new Pokémon team!:`);
    this.teams.push(new Team(name));
}

// the function that will show the teams and the pokemon/levels
viewTeam(){
    let index = prompt(`Enter the index of the Pokémon team wish to view:`);
    if (index > -1 && index < this.teams.length){
        this.selectedTeam = this.teams[index];
        let description = `Pokémon Team Name: ` + this.selectedTeam.name + '\n';

        for (let i = 0; i < this.selectedTeam.pokémons.length; i++){
            description += i + `) Lvl ` + this.selectedTeam.pokémons[i].level
            + ` ` + this.selectedTeam.pokémons[i].name + `\n`;
        }

        // is the options for the team menu and brings you to the correct function on a case by case bases
        let selection = this.showTeammenuOptions(description);
        switch (selection){
            case `1`:
                this.addPokémon();
                break;
            case `2`:
                this.removePokémon();
        }
    }
}


// the function that will delete a team
deleteTeam(){
    let index = prompt(`Enter the index of the Pokémon team you wish to delete:`);
    if (index > -1 && index < this.teams.length){
        this.teams.splice(index, 1);
    }
}

// the function for adding pokemon
addPokémon() {

    // prompt is a pop up that can also have a var set to it
    let name = prompt(`Enter the name of any Pokémon for your new team member:
    Examples - Gengar, Tympole, Shelgon, Patrat, Rookidee, Nidoran`);

    // prompt is a pop up that can also have a var set to it
    let level = prompt(`Enter the level for new Pokémon:
    Note Pokémon must be between 1 and 100`);

    // checks to see if the level you entered is above 0 and less then 101
    if( level >= 1 && level <= 100){
        this.selectedTeam.pokémons.push(new Pokémon(name, level))
    }

    else{
        let fail = prompt(`Sorry you seemed to have given your Pokémon a higher or lower level then the rules allow plz try again`);
    }

    
    
}

// the function for removeing pokemon
removePokémon(){
    let index = prompt('Enter the index of the Pokémon you wish to remove from your team:');
    if (index > -1 && index < this.selectedTeam.pokémons.length){
        this.selectedTeam.pokémons.splice(index, 1);
    }
}
}

let menu = new Menu();
menu.start(); // starts it all



















let myRoster = [];

//Create Player Object
function Player(name, position, number) {
    this.name = name
    this.position = position
    this.number = number
    this.info = function(){
        console.log(number, name, position)
    }
}

//Add Player to your current Roster
function addPlayerToRoster(Player) {
    myRoster.push(Player)
}

function removePlayerFromRoster(playerIndex) {
    myRoster.splice(playerIndex,1);
}

//Loops through roster and displays each Player Object
function displayRoster(myRoster){
    let section = document.querySelector('section');

    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }

    myRoster.forEach(function(item, index){

        //Create Elements
        let section = document.querySelector('section');
        let player = document.createElement('div');
        let playerInfo = document.createElement('div');
        let playerStatus = document.createElement('input');
        let removeBtn = document.createElement('button');

        //Modify Elements
        playerInfo.textContent = "#"+item.number + " " + item.name + " " + item.position;
        removeBtn.setAttribute('class','removeBtn');
        playerInfo.setAttribute('class','playerInfo');
        playerStatus.setAttribute('class','playerStatus');
        playerStatus.setAttribute('type','checkbox');

        //Modify Player Container
        player.setAttribute('class','roster')
        section.appendChild(player);

        //Add to DOM
        player.appendChild(playerInfo);
        player.appendChild(removeBtn);
        player.appendChild(playerStatus);

        //Create Remove Functionality
        removeBtn.setAttribute('data-index',index)
        removeBtn.addEventListener('click', function(event){
    
         removePlayerFromRoster(event.target.getAttribute('data-index'))
         displayRoster(myRoster)
    
        });
    });
}

let button = document.querySelector('#submit');
let name = document.querySelector('#name');
let number = document.querySelector('#number');
let position = document.querySelector('#position');


//Create Event Listen for When User is Ready to Add A Player
button.addEventListener('click', function(name, number, position){
    const player = new Player(document.getElementById('name').value, document.getElementById('position').value, document.getElementById('number').value)
    addPlayerToRoster(player);
    displayRoster(myRoster)
})




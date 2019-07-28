// Rover Object 
// ======================

let rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
}

// ======================

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case 'N': rover.direction = 'W'
    break;
    case 'W': rover.direction = 'S'
    break;
    case 'S': rover.direction = 'E'
    break;
    case 'E': rover.direction = 'N'
    break;
  };
  console.log(`Mars Rover now faces ${rover.direction}`);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case 'N': rover.direction = 'E'
    break;
    case 'E': rover.direction = 'S'
    break;
    case 'S': rover.direction = 'W'
    break;
    case 'W': rover.direction = 'N'
    break;
  };
  console.log(`Mars Rover now faces ${rover.direction}`);
};

function moveForward(){
  console.log("moveForward was called");
  switch (rover.direction) {
    case 'N': rover.y -= 1
    break;
    case 'E': rover.x += 1
    break; 
    case 'S': rover.y += 1
    break;
    case 'W': rover.x -= 1
    break; 
  };
  console.log(`Mars Rover is now located in XY ${rover.x},${rover.y} on the grid.`);
  rover.travelLog.push([rover.x, rover.y]);
  gridBoundary(rover);
};

function moveBackwards(){
  console.log("moveBackwards was called");
  switch (rover.direction) {
    case 'N': rover.y += 1
    break;
    case 'E': rover.x -= 1
    break; 
    case 'S': rover.y -= 1
    break;
    case 'W': rover.x += 1
    break; 
  };
  console.log(`Mars Rover is now located in XY ${rover.x},${rover.y} on the grid.`);
  rover.travelLog.push([rover.x, rover.y]);
  gridBoundary(rover);
};

let commandList = '';
const command = commandList => {
  for (let i = 0; i < commandList.length; i++) {
    switch (commandList[i]) {
      case 'f': moveForward();
      break;
      case 'b': moveBackwards();
      break;
      case 'r': turnRight(rover);
      break;
      case 'l': turnLeft(rover);
      break;
      default: console.log('Please enter a valid command');
    };
  };
};


const gridBoundary = (rover) => {
    if (rover.y < 0 && rover.direction === 'N') {
    console.log('Grid limit - do not continue North! -- RETURN NOW');
  } if (rover.x < 0 && rover.direction === 'W') {
    console.log('Grid limit - do not continue West! -- RETURN NOW');
  } if (rover.y > 9 && rover.direction === 'S') {
    console.log('Grid limit - do not continue South! -- RETURN NOW');
  } if (rover.x > 9 && rover.direction === 'E') {
    console.log('Grid limit - do not continue East! -- RETURN NOW');
  } 
};


/*
const obstacle = [['','','X','','','','','','',''],
                  ['','','','','','','','X','',''],
                  ['X','','','','','','','','',''],
                  ['','','','','X','','','','',''],
                  ['','X','','','','','','','',''],
                  ['','','','','','','','','X',''],
                  ['','','','X','','','','','',''],
                  ['','','','','','','','','X',''],
                  ['X','','','','','','','','',''],
                  ['','','','','','','','','','X']];

const gridObstacle = (rover) => {
  if (rover.x && rover.y == obstacle[0][3]){
    console.log('Bump! Rock Ahead')
  }
  if (rover.x && rover.y == obstacle[1][7]){
    console.log('Bump! Rock Ahead')
  }
  if (rover.x && rover.y == obstacle[2][0]){
    console.log('Bump! Rock Ahead')
  
  }
}
*/


command('r')
command('f')

console.log(rover.direction)
console.log(rover.x, rover.y);
console.log(rover.travelLog);

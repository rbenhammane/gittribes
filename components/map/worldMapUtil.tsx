
export function generateVillagesCoords (mapCoords: any, repos = []) {

  let coordinates = new Array(repos.length);

  let direction = 0;
  let currentX = 0;
  let currentY = 0;

  let stepPadding = 1;
  repos.forEach((item, index) => {

    stepPadding += 1;
    let step = Math.round(Math.random() * 10 + stepPadding);

    for (let i = 0; i < step; i++) {
      switch (direction) {
        case 0:
          currentY++;
          if (currentY == mapCoords.rotationRadius) {
            direction = 1;
          }
          break;
        case 1:
          currentX++;
          if (currentX == mapCoords.rotationRadius) {
            direction = 2;
          }
          break;
        case 2:
          currentY--;
          if (Math.abs(currentY) == mapCoords.rotationRadius) {
            direction = 3;
          }
          break;
        case 3:
          currentX--;
          if (Math.abs(currentX) == mapCoords.rotationRadius) {
            direction = 0;
            mapCoords.rotationRadius++;
          }
          break;
      }
    }

    mapCoords.diameter = (600 * (2 * Math.floor((mapCoords.rotationRadius + 7) / 15) + 1));
    mapCoords.top = (600 - mapCoords.diameter) / 2;
    mapCoords.left = (600 - mapCoords.diameter) / 2;
    mapCoords.worldRadius = mapCoords.diameter / 2 + 20;
    coordinates[index] = {x: currentX, y: currentY, repo: item};
  });

  return coordinates;
}

export function generateLakesCoords (mapCoords: any, coords:any[] = []) {

  let coordinates = [];

  let rotationRadius = 1;
  let direction = 0;
  let currentX = 0;
  let currentY = 0;

  let stepPadding = 1;
  for (let i = 0; i < mapCoords.diameter; i++) {

    stepPadding += 4;
    let step = Math.round(Math.random() * 10 + stepPadding);

    for (let i = 0; i < step; i++) {
      switch (direction) {
        case 0:
          currentY++;
          if (currentY == rotationRadius) {
            direction = 1;
          }
          break;
        case 1:
          currentX++;
          if (currentX == rotationRadius) {
            direction = 2;
          }
          break;
        case 2:
          currentY--;
          if (Math.abs(currentY) == rotationRadius) {
            direction = 3;
          }
          break;
        case 3:
          currentX--;
          if (Math.abs(currentX) == rotationRadius) {
            direction = 0;
            rotationRadius += 2;
          }
          break;
      }
    }

    let overlap = false;

    coords.forEach(coord => {
      if ((coord.x == currentX && coord.y == currentY)
        || (coord.x == currentX && coord.y == (currentY - 1))
        || (coord.x == (currentX - 1) && coord.y == currentY)
        || (coord.x == (currentX - 1) && coord.y == (currentY - 1))) {
        overlap = true;
      }
    });

    if (!overlap) {
      coordinates.push({x: currentX, y: currentY});
    }
  }

  return coordinates;
}

export function generateForestsCoordinates (mapCoords: any, coords: any[], bigCoords: any[]) {

  let coordinates = [];

  let rotationRadius = 1;
  let direction = 0;
  let currentX = 0;
  let currentY = 0;

  let diameter = 15 + 2 * Math.floor((mapCoords.rotationRadius + 7) / 15) * 15;

  let stepPadding = 1;
  for (let i = 0; i < diameter; i++) {

    stepPadding += 2;
    let step = Math.round(Math.random() * 10 + stepPadding);

    for (let i = 0; i < step; i++) {
      switch (direction) {
        case 0:
          currentY++;
          if (currentY == rotationRadius) {
            direction = 1;
          }
          break;
        case 1:
          currentX++;
          if (currentX == rotationRadius) {
            direction = 2;
          }
          break;
        case 2:
          currentY--;
          if (Math.abs(currentY) == rotationRadius) {
            direction = 3;
          }
          break;
        case 3:
          currentX--;
          if (Math.abs(currentX) == rotationRadius) {
            direction = 0;
            rotationRadius += 3;
          }
          break;
      }
    }

    let overlap = false;

    coords.forEach(coord => {
      if (coord.x <= currentX && coord.x >= currentX - 2 && coord.y <= currentY && coord.y >= currentY - 1) {
        overlap = true;
      }
    });

    bigCoords.forEach(coord => {
      if (coord.x <= currentX + 2 && coord.x >= currentX - 1 && coord.y <= currentY + 1 && coord.y >= currentY - 1) {
        overlap = true;
      }
    });

    if (!overlap) {
      coordinates.push({x: currentX, y: currentY});
    }
  }

  return coordinates;
}

export function generateTreesCoordinates (mapCoords: any, smallCoords: any[], coords: any[], bigCoords: any[]) {

  let coordinates = [];

  let rotationRadius = 1;
  let direction = 0;
  let currentX = 0;
  let currentY = 0;

  let diameter = 15 + 2 * Math.floor((mapCoords.rotationRadius + 7) / 15) * 15;

  let stepPadding = 1;
  for (let i = 0; i < diameter * 5; i++) {

    stepPadding += 1;
    let step = Math.round(Math.random() * 5);

    for (let i = 0; i < step; i++) {
      switch (direction) {
        case 0:
          currentY++;
          if (currentY == rotationRadius) {
            direction = 1;
          }
          break;
        case 1:
          currentX++;
          if (currentX == rotationRadius) {
            direction = 2;
          }
          break;
        case 2:
          currentY--;
          if (Math.abs(currentY) == rotationRadius) {
            direction = 3;
          }
          break;
        case 3:
          currentX--;
          if (Math.abs(currentX) == rotationRadius) {
            direction = 0;
            rotationRadius += 3;
          }
          break;
      }
    }

    let overlap = false;

    smallCoords.forEach(coord => {
      if (coord.x == currentX && coord.y == currentY) {
        overlap = true;
      }
    });

    coords.forEach(coord => {
      if (coord.x <= currentX + 1 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
        overlap = true;
      }
    });

    bigCoords.forEach(coord => {
      if (coord.x <= currentX + 2 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
        overlap = true;
      }
    });

    if (!overlap) {
      coordinates.push({x: currentX, y: currentY});
    }
  }

  return coordinates;
}

export function generateStonesCoordinates (mapCoords:any, smallCoords: any[], coords: any[], bigCoords: any[], smallCoords1: any[]) {

  let coordinates = [];

  let rotationRadius = 1;
  let direction = 0;
  let currentX = 0;
  let currentY = 0;

  let diameter = 15 + 2 * Math.floor((mapCoords.rotationRadius + 7) / 15) * 15;

  let stepPadding = 1;
  for (let i = 0; i < diameter * 5; i++) {

    stepPadding += 1;
    let step = Math.round(Math.random() * 5);

    for (let i = 0; i < step; i++) {
      switch (direction) {
        case 0:
          currentY++;
          if (currentY == rotationRadius) {
            direction = 1;
          }
          break;
        case 1:
          currentX++;
          if (currentX == rotationRadius) {
            direction = 2;
          }
          break;
        case 2:
          currentY--;
          if (Math.abs(currentY) == rotationRadius) {
            direction = 3;
          }
          break;
        case 3:
          currentX--;
          if (Math.abs(currentX) == rotationRadius) {
            direction = 0;
            rotationRadius += 3;
          }
          break;
      }
    }

    let overlap = false;

    smallCoords.forEach(coord => {
      if (coord.x == currentX && coord.y == currentY) {
        overlap = true;
      }
    });

    smallCoords1.forEach(coord => {
      if (coord.x == currentX && coord.y == currentY) {
        overlap = true;
      }
    });

    coords.forEach(coord => {
      if (coord.x <= currentX + 1 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
        overlap = true;
      }
    });

    bigCoords.forEach(coord => {
      if (coord.x <= currentX + 2 && coord.x >= currentX && coord.y <= currentY + 1 && coord.y >= currentY) {
        overlap = true;
      }
    });

    if (!overlap) {
      coordinates.push({x: currentX, y: currentY});
    }
  }

  return coordinates;
}
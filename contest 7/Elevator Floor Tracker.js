function trackElevator(startFloor, minFloor, maxFloor, commands) {
    // TODO: Return final floor aftshowHiddenFilesommands
   for (let com of commands) {
     if (com === "UP" && startFloor < maxFloor) startFloor++;
     else if (com === "DOWN" && startFloor > minFloor) startFloor--;
   }

   return startFloor;
}

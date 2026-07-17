w.doGoToCoord(0,16);
let x = 0;
let y = 0;
let availCoords = [[0,0]];
w.on("cursorMove", function(e) {
  if(e.tileX >= x*128+61 && e.tileX <= x*128+66 && e.tileY >= y*128-2 && e.tileY <= y*128+1) {} else {
    // Runs if the condition ISN'T true
    let xTemp = x;
    let yTemp = y;
    if(e.tileX <= x*128+61) {
      x = x-1;
    } else {
      x = x+1;
    }
    if(e.tileY <= y*128-2) {
      y = y-1;
    } else {
      y = y+1;
    }
    if(availCoords.includes([x,y])) {} else {
      x = xTemp;
      y = yTemp;
    }
    w.doGoToCoord(y*32,x*32+16);
  }
  let [tileX,tileY,charX,charY] = cursorCoords;
});
w.on('writeBefore', function(e) {
  if(e.tileX >= x*128+62 && e.tileX <= x*128+65 && e.tileY >= y*128-1 && e.tileY <= y*128) {
    let owner = "";
    for (let i = 0; i < 15; i++) {
      owner = owner + getChar(x*128+62,y*128+1,i,1);
    }
    w.chat.send(owner);
  }
});

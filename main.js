w.doGoToCoord(0,16);
let x = 0;
let y = 0;
let temp = null;
let activeCoords = [[0,0],[1,0]]
w.on("cursorMove", function(e) {
  if(e.tileX >= x*128+61 && e.tileX <= x*128+66 && e.tileY >= y*128-2 && e.tileY <= y*128+1) {
    temp = getCharInfo(e.tileX,e.tileY,e.charX,e.charY);
  } else {
    let xTemp = x;
    let yTemp = y;
    if(e.tileX <= x*128+61) {
      x = x-1;
    } else if(e.tileX >= x*128+66) {
      x = x+1;
    }
    if(e.tileY <= y*128-2) {
      y = y-1;
    } else if(e.tileY >= y*128+1) {
      y = y+1;
    }
    if(activeCoords.includes([x,y])) {
      x = xTemp;
      y = yTemp;
    }
    w.doGoToCoord(-y*32,x*32+16);
  }
  let [tileX,tileY,charX,charY] = cursorCoords;
});
w.on('writeBefore', function(e) {
  if(e.tileX >= x*128+62 && e.tileX <= x*128+65 && e.tileY >= y*128-1 && e.tileY <= y*128) {
    let owner = "";
    for(let i = 0; i < 15; i++) {
      owner = owner + getChar(x*128+62,y*128+1,i,1);
    }
    owner = owner.trimEnd();
    if(owner == "[UNCLAIMABLE]" || owner == "[NONE]" || owner == state.userModel.username) {} else {
      e.char = temp.char;
      e.color = temp.color;
      e.bgColor = temp.bgColor;
      e.decoration = temp.decoration;
    }
  }
});

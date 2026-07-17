w.doGoToCoord(0,16);
let x = 0;
let y = 0;
let temp = null;
const activeCoords = ["-1,0","0,0","1,0"];
const mods = ["Ӻ"];
w.on("cursorMove", function(e) {
  if(e.tileX >= x*128+61 && e.tileX <= x*128+66 && e.tileY >= y*128-2 && e.tileY <= y*128+1) {
    temp = [getCharInfo(e.tileX,e.tileY,e.charX,e.charY),getCharInfo(e.tileX-1,e.tileY,15,e.charY),getCharInfo(e.tileX,e.tileY,e.charX-1,e.charY)];
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
    if(activeCoords.includes(String(x)+","+String(y))) {} else {
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
    if(owner == "[UNCLAIMABLE]" || owner == "[NONE]" || owner == state.userModel.username || mods.includes(state.userModel.username)) {} else {
      if(e.char == "\b") {
        temp = temp[0];
      } else {
        if(e.charX == 0) {
          temp = temp[1];
        } else {
          temp = temp[2];
        }
      }
      e.char = temp.char;
      e.color = temp.color;
      e.bgColor = temp.bgColor;
      e.decoration = temp.decoration;
    }
  }
});

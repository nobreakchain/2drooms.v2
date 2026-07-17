w.doGoToCoord(0,16);
let x = 0;
let y = 0;
let temp = null;
const mods = ["Ӻ"];
w.on("cursorMove", function(e) {
  if(e.tileX >= x*128+61 && e.tileX <= x*128+66 && e.tileY >= y*128-2 && e.tileY <= y*128+1) {
    temp = [getCharInfo(e.tileX,e.tileY,e.charX,e.charY),getCharInfo(e.tileX-1,e.tileY,15,e.charY),getCharInfo(e.tileX,e.tileY,e.charX-1,e.charY)];
  } else {
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
    w.doGoToCoord(-y*32,x*32+16);
  }
});
w.on('writeBefore', function(e) {
  if(e.tileX >= x*128+62 && e.tileX <= x*128+65 && e.tileY >= y*128-1 && e.tileY <= y*128) {
    let owner = "";
    for(let i = 0; i < 15; i++) {
      owner = owner + getChar(x*128+62,y*128+1,i,1);
    }
    owner = owner.trimEnd();
    let members = ["","","","",""];
    for(let i = 1; i < 5; i++) {
      for(let j = 0; j < 15; j++) {
        members[i] = members[i] + getChar(x*128+62,y*128+1,j,i+2);
      }
      members[i] = members[i].trimEnd();
    }
    if(owner == "[UNCLAIMABLE]" || owner == "[NONE]" || owner == state.userModel.username || mods.includes(state.userModel.username) || members.includes("[ALL]") || members.filter(a => a !== "").includes(state.userModel.username)) {} else {
      if(e.char == "\b") {
        temp = temp[0];
      } else {
        if(e.charX == 15) {
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

w.doGoToCoord(0,16);
let x = 0;
let y = 0;
w.on("cursorMove", function(e) {
  if(e.tileX >= x*128+61 && e.tileX <= x*128+66 && e.tileY >= y*128-2 && e.tileY <= y*128+1) {} else {
    // Runs if the condition ISN'T true
    w.doGoToCoord(y*32,x*32+16);
  }
  let [tileX,tileY,charX,charY] = cursorCoords;
});
w.on('writeBefore', function(e) {
  if(e.tileX >= x*128+62 && e.tileX <= x*128+65 && e.tileY >= y*128-1 && e.tileY <= y*128) {
    w.chat.send(getChar(x*128+62,y*128+1,0,1));
  }
});

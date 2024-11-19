for (let i = 0; i < lines.length; i++) {
    for (let marker of markers) {
      let index = lines[i].indexOf(marker); 
      if (index !== -1) {
      
        lines[i] = lines[i].slice(0, index).replace(/\s+$/,'').trimEnd();
      }
    }
  }
 
  if(lines.join("\n").charAt(lines.join("\n").length-1 )==" "){
   return lines.join("\n").trimEnd()
   
  }
  else{
    return lines.join("\n");
  }
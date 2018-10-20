function homeawayLoop() {
  let i = 100;
  while (i <= 200) {
    if ((i%3 === 0) && (i%4 === 0)) 
    console.log("HomeAway");
     else if (i%3 === 0) 
      console.log("Home");
     else if (i%4 === 0) 
      console.log("Away");
     else 
      console.log(i);
    i++;
  }
}

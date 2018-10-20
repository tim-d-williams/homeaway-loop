function homeawayLoop(range, multiples, words) {
    let i = range[0];
    while (i <= range[1]) {
      if ((i%multiples[0] === 0) && (i%multiples[1] === 0)) 
        console.log(words[0]+words[1]);
       else if (i%multiples[0] === 0) 
        console.log(words[0]);
       else if (i%multiples[1] === 0) 
        console.log(words[1]);
       else 
        console.log(i);
     i++;
  }
}
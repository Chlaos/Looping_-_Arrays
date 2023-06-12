// Task 1: Logging even numbers from 1000 to 0
for (let i = 1000; i >= 0; i -= 2) {
    console.log(i);
  }
  
  // Task 2: Alert messages at specific loop iterations
  const totalLoops = 10000;
  const quarterLoops = totalLoops / 4;
  const halfLoops = totalLoops / 2;
  
  for (let i = 0; i <= totalLoops; i++) {
    if (i === quarterLoops) {
      alert("A quarter of the way there!");
    } else if (i === halfLoops) {
      alert("Halfway there!");
    } else if (i === totalLoops) {
      alert("The loop is done!");
    }
  }
  
  // Task 3: Array of top 5 favorite TV shows
  const favoriteShows = ["Sherlock Holmes", "Doctor Who", "Game of Thrones", "Rick and Morty", "Adventure Time"];
  
  // Task 4: Logging favorite TV shows with message
  for (let i = 0; i < favoriteShows.length; i++) {
    console.log(`My #${i + 1} favorite TV show is ${favoriteShows[i]}`);
  }
  
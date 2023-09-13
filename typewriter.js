const sentence = "live from new york its saturday night live";

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
    //i is our index of the character of sentence being looped through, for each index it wil be multplied by 50ms to give each index the correct time delay, 50ms apart
  }, i * 50);
}


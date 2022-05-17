// Code your solutions in this file

function writeCards(names, event) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(
      "Thank you, " + names[i] + ", for the wonderful " + event + " gift!"
    );
  }
  return messages;
}

function countDown(number) {
  for (let i = 0; i < number; i++) {
    console.log(number - i);
  }
  console.log(0);
}

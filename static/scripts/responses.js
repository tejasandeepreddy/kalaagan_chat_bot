function getBotResponse(input) {
  //rock paper scissors
  if (input == "democlass") {
    return "https://kalaagan.com/free-demo/  book your free trial class today.";
  } else if (input == "dance") {
    return "We teach Kathak, Kuchipudi, Bollywood dance, Bharathanatyam, Garba with one of the finest teachers in the field.";
  } else if (input == "singer" || input == "singers" || input == "singing") {
    return "We teach Classical and Bollywood Singing.";
  } else if (input == "music" || input == "instruments" || input == "songs") {
    return "We teach Basuri, Guitar, Piano, Tabla, Violin to a master level.";
  } else if (input == "courses" || input=="available courses") {
    return "https://kalaagan.com/courses/  visit the link for all course details";
  }else if (input == "hello") {
    return "Hello there!, I am Shiksha your virtual assistant";
  } else if (input == "Thank you"||input == "thanks"||input == "thank you"||input == "Bye"||input == "bye") {
    return "Happy to assist always... https://kalaagan.com/free-demo/  try our free demo class today";
  } else {
    return "Try asking democlass, dance, singing, music, courses";
  }
}

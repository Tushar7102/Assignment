// Define an array of strings to be displayed and erased
const textArray = [
    "Hello!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, cumque. Ducimus maiores necessitatibus at, quia dicta aut earum? Praesentium, quos. Beatae quae vero perspiciatis iste reiciendis nam soluta labore itaque.",

    // Add more strings as needed
  ];
  
  // Initialize variables
  let typeJsText = document.querySelector(".animatedText");
  let stringIndex = 0; // Index of the current string in the array
  let charIndex = 0; // Index of the current character in the current string
  let isTyping = true; // Whether we are currently typing or erasing
  
  function typeJs() {
    if (stringIndex < textArray.length) {
      // Check if there are more strings to display or erase
      const currentString = textArray[stringIndex];
  
      if (isTyping) {
        // Typing animation
        if (charIndex < currentString.length) {
          typeJsText.innerHTML += currentString.charAt(charIndex);
          charIndex++;
        } else {
          isTyping = false; // Switch to erasing mode
        }
      } else {
        // Erasing animation
        if (charIndex > 0) {
          typeJsText.innerHTML = currentString.substring(0, charIndex - 1);
          charIndex--;
        } else {
          isTyping = true; // Switch back to typing mode
          stringIndex++; // Move to the next string
  
          if (stringIndex >= textArray.length) {
            stringIndex = 0; // Reset to the beginning of the array
          }
  
          charIndex = 0; // Reset character index
          typeJsText.innerHTML = ""; // Clear the content for the new string
        }
      }
    }
  }
  
  // Set an interval to call the typeJs function
  setInterval(typeJs, 100); // You can adjust the animation speed as needed

  new WOW().init();
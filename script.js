// Select elements
const startBtn = document.getElementById('start-btn');
const output = document.getElementById('output');

// Check for browser support
if ('speechRecognition' in window || 'webkitSpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  // Configure recognition
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  // Start recognition on button click
  startBtn.addEventListener('click', () => {
    recognition.start();
    output.textContent = 'Listening...';
  });

  // Process results
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    output.textContent = "You said: ${transcript}";
    respond(transcript);
  };

  // Handle errors
  recognition.onerror = (event) => {
    output.textContent = "Error: ${event.error}";
  };

  // Provide a response
  function respond(transcript) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();

    if (transcript.includes('hello')) {
      utterance.text = 'Hello! How can I assist you today?';
    } else if (transcript.includes('time')) {
      const now = new Date();
      utterance.text = "The time is ${now.getHours()}:${now.getMinutes()}";
    } else {
      utterance.text = "I'm sorry, I didn't understand that.";
    }

    speechSynthesis.speak(utterance);
  }
} else {
  output.textContent = 'Your browser does not support the Speech API.';
}
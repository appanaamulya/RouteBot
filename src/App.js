import React from 'react';
import ChatbotComponent from "./Chatbot";
import './chatbot.css'; 

function App() {
  return (
    <div>
      <ChatbotComponent className="chatbot-message chatbot-user-message chatbot-bot-message"/>
    </div>
  );
}

export default App;

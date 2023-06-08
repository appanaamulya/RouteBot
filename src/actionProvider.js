class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleDefault = () => {
        const message = this.createChatBotMessage("Sorry, I didn't understand.");
        this.setChatbotMessage(message);
      };
    
      greetUser = () => {
        const message = this.createChatBotMessage("Hello! How can I assist you today?");
        this.setChatbotMessage(message);
      };
    
      setChatbotMessage = (message) => {
        this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, message],
        }));
      };
  }
  
  export default ActionProvider;
  
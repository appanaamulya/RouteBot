class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
    parse = (message) => {
        const lowercaseMessage = message.toLowerCase();
    
        if (lowercaseMessage.includes("hello") || lowercaseMessage.includes("hi")) {
          this.actionProvider.greetUser();
        } else {
          this.actionProvider.handleDefault();
        }
      };
  }
  
  export default MessageParser;
  
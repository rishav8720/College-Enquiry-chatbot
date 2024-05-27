from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer

def train_bot():
    # Initialize ChatBot
    chatbot = ChatBot('CollegeBot')

    # Custom data for training
    custom_data = [
        'How do I apply for courses?', 'You can apply for courses through the college website.',
        'What are the admission requirements?', 'The admission requirements vary for different courses. You can find detailed information on the college website.',
        'When are the holidays?', 'The holiday schedule can be found on the college website.',
        'What is Diwali?', 'Diwali, also known as the Festival of Lights, is a Hindu festival celebrated every autumn in India.',
        'When is Holi?', 'Holi is a Hindu spring festival celebrated in India, also known as the Festival of Colors.',
        'What is Eid?', 'Eid is an Islamic festival celebrated by Muslims worldwide that marks the end of Ramadan, the Islamic holy month of fasting.'
    ]

    # Train the chatbot with custom data
    trainer = ListTrainer(chatbot)
    trainer.train(custom_data)

    print("Training completed.")
    
    return chatbot

if __name__ == "__main__":
    train_bot()

import requests
from flask import Flask, request, jsonify

# Botpress server URL and bot ID
BOTPRESS_URL = 'http://localhost:3000/api/v1/bots/my-bot/mod/webchat/send'

app = Flask(__name__)

@app.route('/get_response', methods=['POST'])
def get_response():
    user_message = request.json['message']

    # Send user message to Botpress
    response = send_message_to_botpress(user_message)

    return jsonify({'response': response})

def send_message_to_botpress(message):
    payload = {
        "type": "text",
        "text": message
    }

    try:
        response = requests.post(BOTPRESS_URL, json=payload)
        response_data = response.json()
        return response_data['text']
    except Exception as e:
        return str(e)

if __name__ == '__main__':
    app.run(debug=True)

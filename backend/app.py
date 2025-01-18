from flask import Flask, request, jsonify
from flask_cors import CORS
from auth import auth_bp
from models import db
from ai_models import analyze_sentiment, classify_intent
from telephony import make_call, route_call

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://user:password@localhost:5432/ai_voice_agent'
db.init_app(app)

# Register Blueprints
app.register_blueprint(auth_bp)

@app.route('/api/analyze-sentiment', methods=['POST'])
def analyze_sentiment_endpoint():
    text = request.json.get('text')
    result = analyze_sentiment(text)
    return jsonify(result)

@app.route('/api/make-call', methods=['POST'])
def make_call_endpoint():
    data = request.json
    phone_number = data.get('phone_number')
    country_code = data.get('country_code')
    call_sid = route_call(phone_number, country_code)
    return jsonify({"call_sid": call_sid})

if __name__ == '__main__':
    app.run(debug=True)

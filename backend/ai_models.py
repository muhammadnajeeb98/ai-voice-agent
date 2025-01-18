from transformers import pipeline

# Load pre-trained models
sentiment_analyzer = pipeline("sentiment-analysis")
intent_classifier = pipeline("zero-shot-classification")

def analyze_sentiment(text):
    return sentiment_analyzer(text)

def classify_intent(text, candidate_labels):
    return intent_classifier(text, candidate_labels)

from twilio.rest import Client

TWILIO_ACCOUNT_SID = 'your_account_sid'
TWILIO_AUTH_TOKEN = 'your_auth_token'
TWILIO_PHONE_NUMBER = 'your_twilio_number'

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

def make_call(to, message):
    call = client.calls.create(
        url='http://demo.twilio.com/docs/voice.xml',  # Replace with your TwiML URL
        to=to,
        from_=TWILIO_PHONE_NUMBER
    )
    return call.sid

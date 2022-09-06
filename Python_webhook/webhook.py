import json
import datetime
import requests
from urllib import response

webhook_url = "https://localhost:8080/webhook"

data = {
    "description": "Data coming from the webhook",
    "timestamp": datetime.datetime.now().isoformat()
}

response = requests.post(webhook_url, json=json.dumps(
    data), headers={"Content-Type:"})

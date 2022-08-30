from fastapi import FastAPI

import requests

app = FastAPI()

@app.get("/")
def _():
    response = requests.get("http://localhost:3000/endpoint")
    print(response.content)
    return {"Hello": "World"}

@app.get("/otherendpoint")
def _():
    return {"Endpoint": True }

@app.get("/mymessage")
def _():
    return {"Message": "This message comes from the Python server." }


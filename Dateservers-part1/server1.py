from typing import Union

from fastapi import FastAPI

from datetime import datetime


app = FastAPI()


@app.get("/")
def read_root():
    iso_date = datetime.now()
    return {'ISO DateTime:', iso_date}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}

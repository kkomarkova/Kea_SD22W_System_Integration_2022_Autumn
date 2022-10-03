from typing import Union

from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi

from datetime import datetime


app = FastAPI()


@app.get("/time")
def read_root():
    iso_date = datetime.now()
    return {'ISO DateTime:', iso_date}


def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="Date API documentation",
        version="2.5.0",
        description="This is a very custom Date API documentation schema",
        routes=app.routes,
    )
    openapi_schema["info"]["x-logo"] = {
        "url": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
    }
    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.openapi = custom_openapi
# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}

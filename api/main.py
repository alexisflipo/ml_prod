from typing import Optional

from fastapi import FastAPI
from pkg_ml_prod import model_predictions

from pkg_ml_prod.preprocessing import drop_na, train_test_split
from pkg_ml_prod import get_data, preprocessing, pipeline, model


df = get_data.get_data()

df = preprocessing.drop_na(df)

X_train, X_test, y_train, y_test = preprocessing.split(df)

pipe = pipeline.create_pipeline()

best_model = model.create_model(pipe,X_train,y_train)


app = FastAPI()


@app.get("/predict")
def index(island='Torgersen',bill_length_mm=39.1,bill_depth_mm=18.7,flipper_length_mm=181.0,body_mass_g=3750.0,sex='MALE'):
    island = str(island)
    bill_length_mm = float(bill_length_mm)
    bill_depth_mm = float(bill_depth_mm)
    flipper_length_mm = float(flipper_length_mm)
    body_mass_g = float(body_mass_g)
    sex= str(sex)
    prediction = model.prediction(island,bill_length_mm,bill_depth_mm,flipper_length_mm,body_mass_g, sex, best_model)

    return {"Prediction": prediction[0]}

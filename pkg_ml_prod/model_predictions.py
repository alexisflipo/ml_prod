from pkg_ml_prod.preprocessing import drop_na, train_test_split
from pkg_ml_prod import get_data, preprocessing, pipeline, model


df = get_data.get_data()

df = preprocessing.drop_na(df)

X_train, X_test, y_train, y_test = preprocessing.split(df)

pipe = pipeline.create_pipeline()

best_model = model.create_model(pipe,X_train,y_train)

prediction = model.prediction('Reunion',44,18.2,196,3750,'MALE', best_model)

print(prediction)
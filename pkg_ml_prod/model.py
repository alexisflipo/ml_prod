from sklearn.neighbors import KNeighborsClassifier
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import GridSearchCV
import pandas as pd


def create_model(pipe, X_train, y_train):

    neigh = KNeighborsClassifier()
    params = {'n_neighbors' : range(3,7)}
    grid = make_pipeline(pipe, GridSearchCV(neigh, param_grid=params,cv=5))

    model_fit = grid.fit(X_train, y_train)
    model = model_fit['gridsearchcv'].best_estimator_
    best_model =  make_pipeline(pipe, model)

    return best_model

def prediction(island, bill_length_mm, bill_depth_mm, flipper_length_mm, body_mass_g, sex, best_model ):

    inputs = [island,bill_length_mm,bill_depth_mm,flipper_length_mm,body_mass_g,sex]
    inputs = pd.DataFrame([inputs], columns=['island','bill_length_mm','bill_depth_mm','flipper_length_mm','body_mass_g','sex'])

    
    prediction = best_model.predict(inputs)

    return prediction
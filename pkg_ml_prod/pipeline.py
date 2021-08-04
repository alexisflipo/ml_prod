from sklearn.preprocessing import StandardScaler
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.pipeline import make_pipeline
from sklearn.compose import make_column_transformer


def create_pipeline():


    numerical_columns =['bill_length_mm', 'bill_depth_mm', 'flipper_length_mm',
       'body_mass_g']

    categorical_columns = ['island','sex']


    categorical_pipeline= make_pipeline(OneHotEncoder(handle_unknown='ignore'))
    numerical_pipeline = make_pipeline(StandardScaler())

    pipe = make_column_transformer((categorical_pipeline,categorical_columns),
                                    (numerical_pipeline, numerical_columns))

    return pipe



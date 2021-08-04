import pandas as pd
from sklearn.model_selection import train_test_split


def drop_na(df):
    df = df.dropna()
    return df

def split(df):
    X = df.drop('species', axis=1)
    y = df['species']

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    return X_train, X_test, y_train, y_test
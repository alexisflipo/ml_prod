import pandas as pd


def get_data():
    df = pd.read_csv('data/penguins.csv')
    return df

    
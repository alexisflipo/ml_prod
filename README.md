# ARCHITECTURE

## Création d'un modèle de Machine Learning et d'un api en production via Docker & Google Cloud Platform

## Composition de l'app :

**Dossier API :**

Un fichier `main.py` qui permet de créer l'api avec FastAPI en se basant sur le modèle ML

**Dossier Data :**

Un fichier `penguins.csv` correspondant au jeu de données nécessaire à la création du modèle de ML

**Un dossier Front :**

Dossier composé de `index.html`, `script.js` et d'un `style.css` permettant la création d'une page web

**Un dossier Notebooks :**

Un fichier `viz.ipynb` qui représente l'analyse du jeu de données ainsi que l'élaboration du modèle de Machine Learning permettant de prédire l'espèce d'un pingouin 

**Un dosssier pkg_ml_prod :**

Dossier composé de `__init__.py`, `get_data.py`, `model_predictions.py`, `model.py`, `pipeline.py`, `preprocessing.py`.
Ces fichiers permettent de mieux structurer l'architecture de la création du modèle de ML déjà réalisé dans le fichier viz.py

**Un dossier scripts :**

Vous pouvez créer des scripts afin d'executer certaines commandes automatiquement

**Fichiers CONFIG :**

`.dockerignore` permet de déclarer des fichiers que vous ne souhaitez pas envoyer sur Docker

`.gitignore` permet de déclarer des fichiers que vous ne souhaitez pas envoyer sur Github

`Dockerfile` permet de créer l'image Docker

`Makefile` permet d'exécuter un ensemble d'actions, comme la compilation d'un projet, l'archivage de document, la mise à jour de site, etc

`requirements.txt` permet de déclarer les librairies souhaitées ou nécessaires lors de l'installation pour le bon fonctionnement de l'app

`setup.py` permet de créer un pkg en python si vous le souhaitez

# Comment déployer sur GCP(Google Cloud Platform) ? 

1 – Installer le gcp CLI  => https://cloud.google.com/sdk

2 – Créer un projet sur GCP :
`gcloud projects create project_id`

3 – Construire l'image directement sur GCP:

`gcloud builds submit  "path_to_directory " -–tag=gcr.io/project_id/image_name`

Note : L'id du projet doit être le même que celui que vous avez fourni dans l'étape 2

Si besoin vous pouvez trouver vos projets à cette adresse https://console.cloud.google.com/home/ et l'id du projet ici : 

Une fois cela terminé, vous pourrez voir votre conteneur dans votre Cloud Storage :
https://console.cloud.google.com/storage/

4 - Maintenant c'est l'heure de faire tourner votre image créée sur GCP:

`gcloud run deploy –image gcr.io/project_id/image_name`

5 – Bien joué, vous pouvez maintenant accéder à votre grâce à l'url fournie


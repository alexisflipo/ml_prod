FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

#WORKDIR /app
LABEL author="Alex-P    ierre"
COPY . .
RUN pip install -r requirements.txt
EXPOSE 80
CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "80"] 
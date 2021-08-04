FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

#WORKDIR /app
LABEL author="Alex"
COPY . .
RUN pip install fastapi 
RUN pip install uvicorn
RUN pip install gunicorn
EXPOSE 80
CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]
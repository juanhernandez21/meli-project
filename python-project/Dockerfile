FROM python:3.11-buster

COPY requirements.txt /
RUN pip install -r /requirements.txt

COPY src /app
WORKDIR /app

ARG COMMIT=local
ENV COMMIT=${COMMIT}

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]

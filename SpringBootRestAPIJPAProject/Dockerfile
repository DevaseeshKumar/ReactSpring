FROM openjdk:21-jdk-slim

WORKDIR /app

COPY target/*.war app.war

EXPOSE 2013

ENTRYPOINT ["java", "-jar", "app.war"]

# Step 1: Use an official Java runtime as the base image
FROM eclipse-temurin:21-jdk-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy the .env file into the container
COPY .env .env

# Step 4: Copy the JAR file into the container
COPY target/server-0.0.1-SNAPSHOT.jar app.jar

# Step 5: Expose port
EXPOSE 8080

# Step 6: Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]

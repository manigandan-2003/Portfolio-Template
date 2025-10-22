# 1️⃣ Use a lightweight OpenJDK 23 image as the base
FROM eclipse-temurin:23-jdk

# 2️⃣ Set the working directory inside the container
WORKDIR /app

# 3️⃣ Copy Maven wrapper and project files first (caches dependencies)
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

# 4️⃣ Make the Maven wrapper executable
RUN chmod +x mvnw

# 5️⃣ Download dependencies (offline, cached if pom.xml unchanged)
RUN ./mvnw dependency:go-offline -B

# 6️⃣ Copy the full source code into the container
COPY src ./src

# 7️⃣ Build the Spring Boot app (skip tests for faster build)
RUN ./mvnw clean package -DskipTests

# 8️⃣ Expose the port your app runs on
EXPOSE 8080

# 9️⃣ Run the Spring Boot jar
CMD ["java", "-jar", "target/server-0.0.1-SNAPSHOT.jar"]

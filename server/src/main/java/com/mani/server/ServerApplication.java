package com.mani.server;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {

//        // Load the .env file before Spring starts
//        Dotenv dotenv = Dotenv.load();
//
//        // This sets the environment variables for the JVM/Spring context
//        // so Spring can read them as standard environment variables.
//        dotenv.entries().forEach(entry -> {
//            System.setProperty(entry.getKey(), entry.getValue());
//        });

        SpringApplication.run(ServerApplication.class, args);
	}

}

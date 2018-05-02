package com.joaofreitas.serverapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ServerApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApiApplication.class, args);
	}
}

package com.uninter_back.script;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import com.uninter_back.model.User;
import com.uninter_back.repository.UserRepository;

import jakarta.annotation.PostConstruct;

@Configuration
public class DataLoader {

    private final UserRepository userRepository;

    @Autowired
    public DataLoader(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Bean
    public CommandLineRunner initData() {
        return args -> {
            User user = new User(null, "admin", "123456");
            this.userRepository.save(user);
            System.out.println("Usuário admin criado com sucesso!");
        };
    }
}

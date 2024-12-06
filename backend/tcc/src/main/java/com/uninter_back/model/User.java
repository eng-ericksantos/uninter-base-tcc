package com.uninter_back.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data // Gera getters, setters, toString, equals, hashCode
@NoArgsConstructor // Gera o construtor sem argumentos
@AllArgsConstructor // Gera o construtor com todos os argumentos
@Table(name = "USUARIO") // Renomeando a tabela para APP_USERS
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

}

package com.uninter_back.controller;

import com.uninter_back.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.uninter_back.service.UserService;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        if (userService.validateUser(user.getUsername(), user.getPassword())) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "Login realizado com sucesso");
            response.put("username", user.getUsername());
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401).body("Usuário ou senha inválidos.");
        }
    }
}

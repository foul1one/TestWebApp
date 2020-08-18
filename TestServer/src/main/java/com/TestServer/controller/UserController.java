package com.TestServer.controller;

import com.TestServer.entity.User;
import com.TestServer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/*---Данный класс обрабатывает поступающие HTTP запросы---*/

@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/")
public class UserController {

    @Autowired
    public UserService userService;

    /*---Добавляем нового Юзера---*/
    @PostMapping("/api/user")
    public ResponseEntity<?> save(@RequestBody User user) {
        userService.save(user);
        return ResponseEntity.ok().body("New User has been saved");
    }

    /*---Выдаем Юзера по ID---*/
    @GetMapping("/api/user/{id}")
    public ResponseEntity<User> get(@PathVariable("id") int id) {
        User user = userService.getById(id);
        return ResponseEntity.ok().body(user);
    }

    /*---Выдаем всех Юзеров---*/
    @GetMapping("/api/user")
    public ResponseEntity<List<User>> list() {
        List<User> list = userService.findAll();
        return ResponseEntity.ok().body(list);
    }

    /*---Изменяем Юзера по ID---*/
    @PutMapping("/api/user/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody User user) {
        userService.update(id, user);
        return ResponseEntity.ok().body("User has been updated successfully.");
    }

    /*---Удаляем Юзера---*/
    @DeleteMapping("/api/user/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        userService.delete(id);
        return ResponseEntity.ok().body("User has been deleted.");
    }
}

package com.TestServer.service;

import com.TestServer.entity.User;

import java.util.List;

public interface UserService {

    int save(User user);

    User getById(int id);

    void delete (int id);

    void update (int id, User user);

    List<User> findAll();
}

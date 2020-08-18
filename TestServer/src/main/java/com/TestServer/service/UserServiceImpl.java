package com.TestServer.service;

import com.TestServer.dao.UserDao;
import com.TestServer.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/*---Данный класс передает приходящие данные из UserController класса в интерфейс UserDao---*/
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    public UserDao userDao;

    /*---Добавляем нового Юзера---*/
    public int save(User user) {
       return userDao.save(user);
    }

    /*---Выдаем Юзера по ID---*/
    public User getById(int id) {
        return userDao.getById(id);
    }

    /*---Удаляем Юзера---*/
    public void delete(int id) {
        userDao.delete(id);
    }

    /*---Изменяем Юзера по ID---*/
    public void update(int id, User user) {
        userDao.update(id, user);
    }

    /*---Выдаем всех Юзеров---*/
    public List<User> findAll() {
        return userDao.findAll();

    }
}

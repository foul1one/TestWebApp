package com.TestServer.dao;

import com.TestServer.entity.User;
import com.TestServer.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

/*---Данный класс передает запросы в БД---*/

public class UserDaoImpl implements UserDao {

    @Autowired
    public JdbcTemplate jdbcTemplate;

    public UserDaoImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    /*---Добавляем нового Юзера---*/
    public int save(User user) {
        String sql = "insert into user (name, email) values (?, ?)";
        return jdbcTemplate.update(sql, user.getName(), user.getEmail());
    }

    /*---Выдаем Юзера по ID---*/
    public User getById(int id) {
        String sql = "select * from user where id = ?";
        return jdbcTemplate.queryForObject(sql, new UserMapper(), id);
    }

    /*---Удаляем Юзера---*/
    public void delete(int id) {
        String sql = "delete from user where id = ?";
        jdbcTemplate.update(sql, id);
    }

    /*---Изменяем Юзера по ID---*/
    public void update(int id, User user) {
        String sql = "UPDATE user SET email= ?, name= ?  WHERE id= ?";
        jdbcTemplate.update(sql, user.getEmail(), user.getName(), id);
    }

    /*---Выдаем всех Юзеров---*/
    public List<User> findAll() {
        String sql = "select * from user;";
        return jdbcTemplate.query(sql, new UserMapper());
    }
}

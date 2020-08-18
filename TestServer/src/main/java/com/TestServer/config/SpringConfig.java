package com.TestServer.config;

import com.TestServer.dao.UserDao;
import com.TestServer.dao.UserDaoImpl;
import com.TestServer.service.UserService;
import com.TestServer.service.UserServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@Configuration

public class SpringConfig {

    @Bean
    public JdbcTemplate getJdbcTemplate () {
        return new JdbcTemplate(getDataSource());
    }
    /*Указываем информацию для подключение к БД*/
    @Bean
    public DataSource getDataSource() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setUrl("jdbc:mysql://localhost:3306/userdb?useSSL=false");
        dataSource.setUsername("admin");
        dataSource.setPassword("123");
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        return dataSource;
    }

    @Bean
    public UserDao getUserDao() {
        return new UserDaoImpl(getJdbcTemplate());
    }

    @Bean
    public UserService getUserService() {
        return new UserServiceImpl();
    }
}

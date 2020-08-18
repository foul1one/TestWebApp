# Простое Web приложение для работы с базой данных

Данное приложение включает в себя:

1. TestServer - Серверная часть написана с использованием Spring MVC, Sping-jdbc, REST API и MySQL

2. TestClient - Клиентская часть написана с использованием Angular

Для работы с приложением скачайте данный репозиторий Code -> Download ZIP

## Настройка сервера

**1. Создайте базу данных MySQL**

```bash
CREATE DATABASE userdb
USE userdb
CREATE TABLE user (id INT AUTO_INCREMENT, email CHAR(60), name CHAR(60), PRIMARY KEY(id))
```

**2. Измените username и password MySQL в соответствии с вашей установкой**

+ открыть `TestServer/src/main/java/com/TestServer/config/SpringConfig.java`

+ изменить `dataSource.setUsername` и `dataSource.setPassword` в соответствии с вашей установкой

**3. Соберите проект при помощи Maven**

Перейдите в каталог TestServer и выполните следующую команду в терминале

```bash
mvn package
```

Будет создан новый файл WAR TestServer/target/TestServer-1.0-SNAPSHOT.war 
Скопируйте его и разверните на своем Tomcat сервере.

Приложение начнет работать по адресу <localhost:8080/TestServer_war/>.

## Настрока клиента

**1. Установите Node.js**

<https://nodejs.org/en/download/>

**2. Установите Angular CLI**

Выполните следующую команду в терминале

```bash
npm install -g @ angular / cli
```

**3. Добавте модули npm в проект**

Перейдите в каталог TestClient и выполните следующую команду в терминале

```bash
npm install
```

**4. Запустите приложение**

В каталоге TestClient и выполните следующую команду в терминале

```bash
ng serve --open
```

Приложение автоматически откроется в браузере по адресу <http://localhost:4200/users>

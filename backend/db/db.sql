CREATE DATABASE jogos;
USE jogos;

CREATE TABLE jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    genero VARCHAR(50),
    plataforma VARCHAR(50),
    preco DECIMAL(10,2),
    ano_lancamento YEAR,
    desenvolvedora VARCHAR(100)
);


INSERT INTO jogos (nome, genero, plataforma, preco, ano_lancamento, desenvolvedora) VALUES
('The Witcher 3', 'RPG', 'PC', 99.90, 2015, 'CD Projekt'),
('FIFA 23', 'Esporte', 'PS5', 299.90, 2022, 'EA Sports'),
('Minecraft', 'Sandbox', 'PC', 89.90, 2011, 'Mojang'),
('God of War', 'Ação', 'PS4', 149.90, 2018, 'Santa Monica Studio'),
('GTA V', 'Ação', 'PC', 79.90, 2013, 'Rockstar Games'),
('Valorant', 'FPS', 'PC', 0.00, 2020, 'Riot Games'),
('Cyberpunk 2077', 'RPG', 'PC', 199.90, 2020, 'CD Projekt'),
('Call of Duty: Warzone', 'FPS', 'PC', 0.00, 2020, 'Activision'),
('Elden Ring', 'RPG', 'PS5', 299.90, 2022, 'FromSoftware'),
('Hollow Knight', 'Metroidvania', 'PC', 46.99, 2017, 'Team Cherry'),
('League of Legends', 'MOBA', 'PC', 0.00, 2009, 'Riot Games');

SELECT * FROM jogos;
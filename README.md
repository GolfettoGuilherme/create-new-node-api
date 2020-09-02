
### :page_with_curl: Sobre
Esse projeto é uma aplicaçao para barbearia, contendo agendamentos de horarios, cadastro de usuarios e autenticaçao
This project is based on an application for a hair salon. Containing scheduling, appointments, session and authentication.

#### Para Começar, **Docker**

### :rocket: How to install and start
- `git clone`
- **Pasta do Projeto**
- `docker-compose up` (in Backend)
- `yarn start` (in Frontend)

### :page_facing_up: Rotas

- **post('/users')** - Criar usuario
- **post('/sessions')** - Logar

#### Tudo aqui precisa de autenticação

- **put('/users')** - Atualizar um usuario
- **get('/providers')** - Listar cabeleiros
- **get('/providers/:providerId/available')** - Checar disponibilidade
- **post('/appointments')** - Criar um agendamento
- **get('/appointments')** - Listar os agendamentos de um usuario
- **delete('/appointments/:id')** - Deletar um agendamento
- **post('/files')** - Fotos de perfil (porque todos gostamos disso)
- **get('/notifications')** - Listar as notificações de um usuário
- **put('/notifications/:id')** - Confirmar que a notificação foi lida

---

<p align="center">
Made with ♥ by <a href="https://www.linkedin.com/in/guilhermegolfetto/">Guilherme</a>
</p>

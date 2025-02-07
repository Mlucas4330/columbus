# Teste Técnico - Columbus

Este é o projeto de teste técnico para a empresa Columbus, desenvolvido com React.

## Requisitos

Antes de rodar o projeto, certifique-se de ter o Docker instalado e rodando.

## Como Rodar o Projeto

### 1. Clonar o Repositório

```git clone https://github.com/Mlucas4330/Columbus.git```

### 2. Entrar no Diretório do Projeto

```cd columbus```

### 3. Crie um arquivo .env e preencha o JWT_SECRET com seu secret

### 4. Rodar o Docker Compose para Subir os Containers

```docker-compose up -d```

### 5. Entrar no Container do Backend

```docker exec -it app bash```

### 6. Rodar as Migrations do Banco de Dados

```npm run sync```

### 7. Rodar os Seeds do Banco de Dados

```npm run seed```

### 8. Acessar o projeto

```http://localhost:3000``` 

## Tecnologias Utilizadas

- React
- Vite
- Chakra UI (para estilização)
- Zod (Validação de formulários)
- React Icons (para ícones)
- React Router (para rotas)
- Chart.js & react-chartjs-2 (para gráficos)
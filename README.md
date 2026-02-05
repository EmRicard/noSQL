# 📂 Atividade NoSQL: Armazenamento em JSON

Este repositório contém uma atividade prática de Banco de Dados NoSQL, focada no armazenamento e manipulação de dados utilizando o formato **JSON** e lógica de programação pura.

---

## 🚀 Sobre o Projeto

O objetivo desta atividade é simular o comportamento de um banco de dados orientado a documentos, explorando a flexibilidade do NoSQL sem a necessidade de um servidor de banco de dados externo. A persistência é feita diretamente em arquivos locais.

### 🛠️ Tecnologias Utilizadas

* **JavaScript Vanilla:** Lógica central para manipulação, filtragem e gestão dos dados.
* **Mongoso:** Ferramenta/padrão utilizado para a interface e gestão dos documentos.
* **JSON (JavaScript Object Notation):** Formato semiestruturado para o armazenamento dos dados.

---

## 📄 Estrutura dos Dados

Os documentos seguem o modelo de cadastro de usuários com identificadores baseados em tempo:

| Campo | Tipo | Descrição |
| :--- | :--- | :--- |
| `id` | Number | Identificador único (Timestamp). |
| `nome` | String | Nome completo do usuário. |
| `cpf` | String | Cadastro de Pessoa Física. |
| `data_criacao` | ISO8601 | Registro de data e hora da inserção. |

### Exemplo de Documento:
```json
{
    "id": 1761098893591,
    "nome": "Maria Silva",
    "cpf": "123.456.789-00",
    "data_criacao": "2025-10-22T02:08:13.591Z"
}

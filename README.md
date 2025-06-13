# Descubra PE
https://github.com/user-attachments/assets/abc6d40a-55ef-4a5d-b593-ea5277cc3b18

O **Descubra PE** é uma plataforma digital unificada que visa centralizar e organizar informações culturais e turísticas do estado de Pernambuco. Desenvolvido como parte da Residência Tecnológica do Porto Digital - RiseUp 2025.1 pelo Squad 13 da Accenture, o projeto foi criado para facilitar o acesso a eventos, pontos históricos e gastronomia local tanto para turistas quanto para moradores.

Utilizando uma navegação intuitiva e recursos de personalização, a plataforma transforma a maneira como a cultura é vivenciada por meio da gamificação. Os usuários são incentivados a se envolver continuamente através de missões, desafios e recompensas, promovendo a valorização da rica cultura pernambucana.

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/src
|-- assets/         # Imagens, ícones e outros recursos estáticos
|-- components/     # Componentes reutilizáveis (Header, Footer, etc.)
|-- mocks/          # Dados simulados para desenvolvimento
|-- pages/          # Componentes de página (Home, Login, etc.)
|-- services/       # Configuração do Firebase e serviços de autenticação
|-- App.jsx         # Roteamento principal da aplicação
|-- main.jsx        # Ponto de entrada da aplicação
```

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- **Frontend:** React.js, Tailwind CSS, Material-Tailwind
- **Backend & Autenticação:** Firebase (Firestore, Authentication)
- **Roteamento:** React Router
- **Gamificação e Interatividade:**
  - `react-markdown` para renderização de conteúdo dinâmico
  - `@dnd-kit` para funcionalidades de arrastar e soltar
- **Build Tool:** Vite
- **Linting:** ESLint

## ✨ Funcionalidades Principais

O Descubra PE oferece uma série de funcionalidades para enriquecer a experiência do usuário:

- **Autenticação de Usuários:**
  - Cadastro e login com e-mail e senha.
  - Login social com Google e Facebook.

- **Exploração e Descoberta:**
  - **Trilhas Personalizadas:** Crie e gerencie suas próprias trilhas de exploração.
  - **Categorias de Locais:** Navegue por atrações, cidades e outros pontos de interesse.
  - **Favoritos:** Salve seus locais preferidos para fácil acesso.

- **Gamificação:**
  - **Missões e Recompensas:** Participe de missões para ganhar pontos e recompensas.
  - **Ranking de Exploradores:** Compare seu progresso com outros usuários.

- **Interatividade:**
  - **Chatbot com IA:** Obtenha recomendações e informações sobre destinos turísticos através de um chatbot integrado.
  - **Avaliações:** Deixe sua opinião e veja a avaliação de outros usuários sobre os locais.

## 📦 Como Executar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/AdrianoBispo/descubraPe.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto e adicione as chaves da API do Firebase e da Gemini:
   ```env
   VITE_FIREBASE_API_KEY=sua_api_key
   VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
   VITE_FIREBASE_PROJECT_ID=seu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
   VITE_FIREBASE_APP_ID=seu_app_id
   VITE_MEASUREMENT_ID=seu_measurement_id
   VITE_API_GEMINI=sua_api_gemini
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

![Banner Squad 13](https://github.com/user-attachments/assets/2e5b24d9-a802-4961-9c17-dac7ba933aef)

**Nossas mentoras:** [**Thifanny Sistelos** - Mentora da Accenture](https://www.linkedin.com/in/thifannyux/), [**Nicole Charron** - Mentora do Porto Digital](https://www.linkedin.com/in/nicole-charron/)

---

# Espaco Pet - Website Institucional

Landing page moderna, responsiva e de alta performance desenvolvida para o petshop e centro de estetica animal Espaco Pet. O projeto foi concebido como um cartao de visitas digital interativo e portfolio de servicos, facilitando a navegacao de clientes e o contato direto para agendamentos via WhatsApp.

---

## Demonstracao e Identidade Visual

O design foi estruturado respeitando a identidade da marca, priorizando uma interface acolhedora, limpa e com tipografia legivel:
- Cores Principais: Roxo Brand (#874E9E / #622E79) e Turquesa / Ciano (#00B5B8).
- Tons Neutros: Lavanda suave (#F7EFFF), branco e tons de slate para contraste.
- Navegacao Single-Page: Rolagem suave (smooth scroll) com ancoras para acesso rapido a cada secao.

---

## Tecnologias Utilizadas

- React: Biblioteca para componentizacao modular e declarativa da interface.
- Vite: Ambiente de desenvolvimento ultrarrapido e bundler otimizado para producao.
- Tailwind CSS: Framework utilitario de CSS para estilizacao consistente e responsiva.
- Lucide React: Pacote de icones vetoriais leves e consistentes.

---

## Estrutura do Site

O site e organizado em secoes modulares:
1. Header / Navbar: Logo da marca, links de navegacao com rolagem ancora e botao de CTA destacado.
2. Hero Section: Apresentacao acolhedora do negocio, foto de destaque e atalho direto para agendamento.
3. Quem Somos: Proposta de valor, respeito ao tempo do pet e cuidados esteticos.
4. Catalogo de Servicos:
   - Grade de Banhos e Tosas (Higienica, Maquina e Tesoura, com itens inclusos destacados).
   - Banner de destaque centralizado para o Banho Terapeutico com Ozonioterapia.
   - Servicos adicionais (escovacao de dentes, hidratacao profunda, desembolo, banho clareador).
   - Comodidades: Taxi Dog e Boutique e Pet Shop.
5. Galeria: Grade responsiva com fotos de caes atendidos e legendas interativas com tags.
6. Onde Estamos: Informacoes de endereco e horario de atendimento.
7. Footer: Links institucionais, canais de atendimento e icones de redes sociais.

---

## Arquitetura de Pastas

espaco-pet/
|-- public/              # Arquivos estaticos servidos diretamente (favicon, etc.)
|-- src/
|   |-- assets/          # Logos e imagens da aplicacao
|   |-- components/      # Componentes reutilizaveis
|   |   |-- About.jsx    # Secao Quem Somos
|   |   |-- Footer.jsx   # Rodape e contatos
|   |   |-- Gallery.jsx  # Galeria de fotos de clientes
|   |   |-- Hero.jsx     # Secao principal de boas-vindas
|   |   |-- Location.jsx # Endereco e horarios
|   |   |-- Navbar.jsx   # Barra de navegacao fixa
|   |   `-- Services.jsx # Catalogo de banhos, tosas e spa
|   |-- App.jsx          # Montagem da pagina principal
|   |-- index.css        # Configuracoes globais e tema do Tailwind
|   `-- main.jsx         # Ponto de entrada do React
|-- package.json
`-- vite.config.js

---

## Como Executar Localmente

### Pre-requisitos
- Node.js (versao 18 ou superior)
- Gerenciador de pacotes npm

### Passo a passo

1. Clone o repositorio:
```bash
   git clone <URL_DO_SEU_REPOSITORIO>
```
2. Acesse a pasta do projeto:
```bash
   cd site-petshop/espaco-pet
```
3. Instale as dependencias:
```bash
   npm install
```
4. Inicie o servidor de desenvolvimento:
```bash
   npm run dev
```
5. Acesse http://localhost:5173 no seu navegador.

---

## Build para Producao e Deploy

Para compilar os arquivos estaticos otimizados e minificados para producao:
```bash
npm run build
```
Os arquivos prontos serao gerados dentro da pasta dist/. O projeto esta 100% preparado para deploy continuo em plataformas estaticas gratuitas como Vercel ou Cloudflare Pages, bastando vincular o repositorio do GitHub.

---

## Licenca

Este projeto foi desenvolvido para fins institucionais e comerciais do Espaco Pet. Todos os direitos reservados.


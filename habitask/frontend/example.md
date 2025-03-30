/meu-projeto
│── /src                # Código-fonte principal
│   ├── /app            # Diretório para rotas (se usando App Router - Next 13+)
│   │   ├── layout.tsx  # Layout principal da aplicação
│   │   ├── page.tsx    # Página inicial ("/")
│   │   ├── /about      # Exemplo de página "Sobre"
│   │   │   ├── page.tsx
│   │   │   ├── styles.module.css  # Estilização específica
│   │   ├── /api        # Rotas de API (server actions ou route handlers)
│   ├── /components     # Componentes reutilizáveis
│   ├── /hooks          # Custom hooks
│   ├── /lib            # Utilitários, funções auxiliares
│   ├── /styles         # Estilos globais (CSS, Tailwind, etc.)
│   ├── /context        # Context API para estados globais
│   ├── /services       # Integrações com APIs externas
│   ├── /store          # Gerenciamento de estado (Zustand, Redux, etc.)
│   ├── /public         # Arquivos estáticos (imagens, favicons, etc.)
│── /node_modules       # Dependências do projeto
│── .gitignore          # Arquivos ignorados pelo Git
│── package.json        # Dependências e scripts do projeto
│── tsconfig.json       # Configuração do TypeScript (se aplicável)
│── next.config.js      # Configuração do Next.js
│── README.md           # Documentação do projeto

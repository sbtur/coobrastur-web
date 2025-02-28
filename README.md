![logo-grupo-coobrastur-light](https://github.com/user-attachments/assets/8dba9677-d2d5-43c4-a886-abf0a150fee7)


## Tecnologias Utilizadas

- **Frontend**: Next.js 15, React 19
- **Estilização**: Tailwind CSS, Shadcn UI
- **Gerenciamento de Estado**:
- **Monorepo**: Turborepo com pnpm
- **Tipagem**: TypeScript
- **Componentes**: Design System próprio baseado em Shadcn UI

## Estrutura do Projeto

O projeto segue uma arquitetura de monorepo, organizada da seguinte forma:

```
coobrastur/
├── apps/                  # Aplicações
│   ├── web/               # Site principal
│   └── fast-travel/       # Aplicação complementar
├── packages/              # Pacotes compartilhados
│   ├── ui/                # Biblioteca de componentes
│   ├── eslint-config/     # Configurações de linting
│   └── typescript-config/ # Configurações de TypeScript
```

## Instalação e Execução

### Pré-requisitos

- Node.js 20 ou superior
- pnpm 9.12.3 ou superior

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/coobrastur.git
cd coobrastur

# Instale as dependências
pnpm install
```

### Execução

```bash
# Desenvolvimento
pnpm dev

# Build
pnpm build

# Storybook (documentação de componentes)
pnpm storybook
```

## Desenvolvimento

### Estrutura de Componentes

Os componentes seguem uma estrutura organizada:

- **Layouts**: Componentes estruturais
- **DataDisplay**: Componentes para exibição de dados
- **DataEntry**: Componentes de formulário
- **Navigation**: Componentes de navegação

### Convenções de Código

- Utilizamos ESLint e Prettier para manter a consistência do código
- Componentes são criados seguindo o padrão de composição
- Tipagem estrita com TypeScript

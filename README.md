# Dashboard MFE - Documentação

## Stack Tecnológica

- React 18
- TypeScript 5
- Tailwind CSS
- Module Federation (Webpack 5)
- Lucide React (ícones)

## Estrutura do Projeto

```
dashboard-mfe/
├── src/
│   ├── api/
│   │   └── dashboardApi.ts       # Chamadas de API
│   ├── components/
│   │   ├── Dashboard.tsx         # Componente principal
│   │   └── DashboardCard.tsx     # Card do dashboard
│   ├── types/
│   │   └── index.ts             # Definições de tipos TypeScript
│   ├── utils/
│   │   └── formatters.ts        # Funções utilitárias
│   ├── App.tsx                  # Componente raiz
│   ├── bootstrap.tsx            # Ponto de entrada do MFE
│   └── index.tsx               # Ponto de entrada da aplicação
├── public/
│   └── index.html
├── webpack/
│   ├── webpack.common.js       # Configurações comuns do Webpack
│   ├── webpack.dev.js         # Configurações de desenvolvimento
│   └── webpack.prod.js        # Configurações de produção
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Iniciando o Projeto

1. **Crie um novo projeto**:
```bash
mkdir dashboard-mfe
cd dashboard-mfe
npm init -y
```

2. **Instale as dependências principais**:
```bash
npm install react react-dom @types/react @types/react-dom typescript
npm install -D @babel/core @babel/preset-react @babel/preset-typescript
npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
npm install -D babel-loader ts-loader css-loader style-loader
npm install -D tailwindcss postcss autoprefixer
npm install lucide-react
```

3. **Configure o TypeScript** (tsconfig.json):
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": false,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

4. **Configure o Tailwind** (tailwind.config.js):
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. **Crie o arquivo PostCSS** (postcss.config.js):
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

## Scripts do package.json

```json
{
  "scripts": {
    "start": "webpack serve --config webpack/webpack.dev.js",
    "build": "webpack --config webpack/webpack.prod.js",
    "test": "jest",
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "type-check": "tsc --noEmit"
  }
}
```

## Configuração do Module Federation

O projeto está configurado como um Micro Frontend usando Webpack Module Federation. Isso permite que o dashboard seja:
1. Executado de forma independente durante o desenvolvimento
2. Integrado em outras aplicações como um módulo remoto

### Expondo o Módulo

O dashboard expõe seu componente principal através do arquivo `remoteEntry.js`, que pode ser consumido por outras aplicações.

### Compartilhamento de Dependências

As dependências principais (React, ReactDOM) são configuradas como `singleton` para garantir que apenas uma instância seja carregada, mesmo quando múltiplos MFEs estão sendo executados.

## Padrões de Desenvolvimento

### Componentes

- Use componentes funcionais com TypeScript
- Implemente interfaces para props
- Use hooks do React para gerenciamento de estado

Exemplo:
```typescript
interface Props {
  title: string;
  data: DataType;
}

const ExampleComponent: React.FC<Props> = ({ title, data }) => {
  // implementação
};
```

### Estado

- Use Context API para estado global quando necessário
- Considere Redux apenas para casos complexos
- Mantenha o estado o mais local possível

### Estilos

- Use Tailwind CSS para estilização
- Mantenha classes organizadas e legíveis
- Use prefixos específicos para evitar conflitos

## Build e Deploy

1. **Desenvolvimento**:
```bash
npm start
```
- Inicia o servidor de desenvolvimento na porta 3001
- Hot reload ativado
- Source maps para debugging

2. **Produção**:
```bash
npm run build
```
- Gera arquivos otimizados na pasta `dist`
- Minificação e tree shaking aplicados
- Arquivos com hash para cache busting

## Integração com Host

Para integrar este MFE em uma aplicação host:

1. Configure o remote no webpack do host
2. Importe o componente usando import dinâmico
3. Monte o componente no local desejado

Exemplo de integração:
```typescript
// No host
const Dashboard = React.lazy(() => import('dashboard/Dashboard'));

function App() {
  return (
    <Suspense fallback="Loading Dashboard...">
      <Dashboard />
    </Suspense>
  );
}
```
```
dashboard-mfe
├─ .eslintrc.js
├─ babel.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
│  │  └─ dashboardApi.ts
│  ├─ App.tsx
│  ├─ bootstrap.tsx
│  ├─ components
│  │  ├─ Dashboard.tsx
│  │  └─ DashboardCard.tsx
│  ├─ index.tsx
│  └─ types
│     └─ index.ts
├─ tailwind.config.js
├─ tsconfig.json
├─ webpack
│  ├─ webpack.common.js
│  ├─ webpack.dev.js
│  └─ webpack.prod.js
└─ webpack.config.js

```
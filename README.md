# Testes
 

npm init -y -> para criar o package.json
npm install --save-dev jest -> instalar o jest
Colocar o nome da ferramente no scripts do package json -> "scripts": {
  "test": "jest"
}
 
npm test -> rodar o teste


Para rodar o Cypress:
Ter o projeto rodando localmente (ex: npm run dev)
npm install cypress --save-dev
npx cypress open
Criar um arquivo de teste (por padrão em cypress/e2e)
Rodar e assistir ele no navegador 🧙‍♂️
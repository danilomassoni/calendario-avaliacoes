# Calendário de Avalações 2026

## Descrição

Aplicação estática que apresenta o calendário de avaliações para 2026. Fornece visualização das datas por turma e provas, com interface simples em HTML/CSS/JS para facilitar consulta rápida.

## Questões do projeto

- Quais são as datas das avaliações para cada turma?
- Como exibir as provas de forma clara e acessível no navegador?
- O calendário deve ser responsivo para dispositivos móveis?
- Como organizar os arquivos para fácil manutenção e atualização das datas?
- Como publicar o calendário publicamente (GitHub + Vercel)?

## Objetivos

- Listar todas as datas de avaliações de 2026.
- Permitir fácil atualização dos dados no arquivo JavaScript.
- Publicar o projeto no GitHub e hospedar no Vercel para exposição pública das datas.

## Estrutura do projeto

- `index.html` — página principal que carrega o calendário.
- `turma.html` — página para visualização por turma.
- `style.css` — estilos da aplicação.
- `script.js` — script principal (interação e renderização).
- `provas.js` — dados das provas e das datas.
- `rms.js` — (auxiliar) funções relacionadas a regras/filtragem.
- `README.md` — este arquivo.

## Como usar localmente

1. Abra `index.html` no navegador diretamente ou rode um servidor estático rápido:

```sh
# Usando Python 3 (na pasta do projeto)
python -m http.server 8000

# Abrir http://localhost:8000
```

2. Para atualizar datas: edite `provas.js` seguindo o formato já presente no arquivo.

## Deploy (GitHub → Vercel)

1. Crie um repositório no GitHub e envie o projeto:

```sh
git init
git add .
git commit -m "Adicionar calendário de avaliações 2026"
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO>
git push -u origin main
```

2. Publique no Vercel (opção web ou CLI):

- Pela interface web do Vercel:
	- Acesse vercel.com e conecte sua conta ao GitHub.
	- Importe o repositório criado.
	- Configure como projeto estático (normalmente não precisa build). Clique em "Deploy".

- Pela Vercel CLI:

```sh
npm i -g vercel
vercel login
vercel
# Siga as instruções para vincular ao repositório e fazer deploy
```

3. Após o deploy, o site estará disponível numa URL fornecida pelo Vercel e as datas estarão publicamente acessíveis.

> Observação: cada vez que você alterar `provas.js` e fizer push para o `main`, o Vercel automaticamente redeployará e atualizará o site.

## Contribuição

- Abra uma issue no GitHub para reportar erros nas datas.
- Faça um fork, crie uma branch com a correção e envie um pull request.

## Licença

Sinta-se à vontade para usar e adaptar este projeto. (Adicione uma licença específica se necessário, ex: MIT)

## Contato

Para dúvidas ou solicitações, abra uma issue no repositório do GitHub.

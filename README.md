# Afya Labs : )
## Sistema de Atendimento Médico 

## 📑 Sobre
<p>Projeto Acadêmico realizado junto com Afya Educacional e Gama Academy, onde foi desenvolvido uma aplicação de uma clínica de atendimento médico, onde é possível realizar o cadastro do paciente, agendamento dos atendimentos, registrar novo prontuário e consultar histórico do prontuário. </p>

</br>
</br>

## 🎯 Objetivo
 <p> Maisha tem como objetivo trazer mais agilidade para o dia a dia da clínica, facilitando o acesso e organização dos dados do paciente quando necessário, tanto pelo usuário Recepcionista e também para o usuário Especialista. É uma aplicação que busca contribuir com a produtividade do usuário, atribuindo várias telas em apenas uma, sendo um grande diferencial. Além disso, a segurança das informações é de extrema importância e levado muito em consideração. 
 </p>
 <p>
 - Recepcionista: poderá realizar cadastro de paciente, verificar agendamentos lançados, realizar novos agendamentos.
 </p>
 <p>
 - Especialista: poderá verificar sua agenda e seus respectivos pacientes, terá acesso ao histórico dos prontuários dos seus pacientes e poderá fazer anotações referente aos novos atendimentos.
 </p>

</br>
</br>

## 🚀 Acesso ao projeto:

## Aconselhado ter instalado NODEJS versão 14.x em diante.

Para instalar o node [clique aqui](https://nodejs.org/en/)
</br>

Para iniciar o projeto:

## Para iniciar o Backend : link para o repositório do [backend](https://github.com/ofernandovegano/g2t2-backend)

```
git clone https://github.com/ofernandovegano/g2t2-backend.git
```

Para instalar as dependências:

```
cd g2t2-backend 
```

```
yarn 
```
</br>

**Siga as etapas abaixo**

Edite o arquivo "env.example" com as configurações do seu banco de dados:

```
DB_DIALECT=postgres
DB_HOST=<seu_host>
DB_USERNAME=<seu_username>
DB_PASSWORD=<sua_senha>
DB_DATABASE=<nome_do_banco>
MONGO_PASSWORD=<sua_senha>
PUSHER_ID=<seu_id>
PUSHER_KEY=<sua_chave>
PUSHER_SECRET=<sua_senha>
PUSHER_CLUSTER=<seu_cluster>
```
</br>

Crie seu banco de dados

```
 yarn sequelize db:create
```

Rode as migrations

```
 yarn sequelize db:migrate
```
Rode os seeds

```
yarn sequelize db:seed:all
```

Para iniciar em modo de desenvolvimento:

```
yarn dev
```

</br>

Tudo pronto! Agora, basta acessar a aplicação, disponível em:
localhost:5000

Documentação dos endpoints disponível na rota:
localhost:5000/
</br>
</br>
## Para acessar o Frontend


```
git clone https://github.com/carolcasagrande/G2T2Front
```

Para instalar as dependências:

```
cd g2t2Front
```

```
yarn 
```

Para iniciar o app

```
start
```


## 📅 Gestão do Projeto
<p align="left">Nosso trello</p>
<a href="https://trello.com/b/TVbFVJJj/grupo2-afya" target="_blank"> <img src="https://image.flaticon.com/icons/png/512/174/174874.png" alt="trello" width="30" height="30"/> </a> 

</br>
</br>

## 🎨 Protótipo
<p align="left">Nosso protótipo inicial</p>
<a href="https://www.figma.com/file/gL6xbMilgPsOVZ668WQ7lH/DesafioGama%26Afya?node-id=0%3A1" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 

</br>
</br>

## ⚙️ Funcionalidades
Funcionalidades que o sistema oferece:
- Cadastro de Clientes
- Cadastro de Atendimentos e de Históricos de Prontuários
- Criação de Agendamentos
- Criptografia de senhas
- Sistema de autenticação de usuário
- Mensagens de erro 
- Documentação dos endpoints

</br>
</br>

## 💻 Tecnologias
</br>
<p align="left">
<a href="https://trello.com/pt-BR" target="_blank"> <img src="https://image.flaticon.com/icons/png/512/174/174874.png" alt="trello" width="30" height="30"/> </a> 
<a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> 
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> 
<a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> 
<a href="https://jwt.io/" target="_blank"> <img src="https://cdnlogo.com/logos/j/20/jwt.svg" alt="" width="40" height="40"/> </a> 
</p>

</br>

### Front-end
<p align="left"> 
<a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> 
<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
<a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> 
<a href="https://redux.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a>
<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>
<a href="https://axios-http.com/docs/intro" target="_blank"> <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/axios_logo_icon_168545.png" alt="axios" width="40" height="40"/></a> 
<a href="https://material-ui.com/pt/" target="_blank"> <img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/material_ui_icon_137419.png" alt="material-ui" width="45" height="45"/></a> 
</p>

</br>

### Backend

<p align="left">
<a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> 
<a href="https://www.postgresql.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> 
<a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>
<a href="http://sequelize.org/" target="_blank"> <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/sequelize_original_logo_icon_146348.png" alt="sequelize" width="40" height="40"/> </a> 
<a href="https://swagger.io/" target="_blank"> <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_swagger_icon_130134.png" alt="swagger" width="40" height="40"/></a> 
<p><a href="" target="_blank"> Bcrypt </a></p> 
<p><a href="" target="_blank"> Sucrase </a></p>
</p>

</br>
</br>

<h3 align="left">
Feito com 💜 por 
</h3>
</br>
<p align="left"> Andre Ludwig:
<a href="https://github.com/andreludwig" target="blank"><img align="center" src="https://image.flaticon.com/icons/png/512/733/733609.png" alt="andreludwig-almeida" height="25" width="25" /></a>
<a href="www.linkedin.com/in/andreludwig-almeida" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="andreludwig-almeida" height="25" width="25" /></a>
</p>

<p align="left"> Ariele Mendonça:
<a href="https://github.com/ArieleM" target="blank"><img align="center" src="https://image.flaticon.com/icons/png/512/733/733609.png" alt="ArieleM" height="25" width="25" /></a>
<a href="https://www.linkedin.com/in/pereiramendonca" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="carolinecasagrande" height="30" width="40" /></a> 
</p>
<p align="left">Caroline Casagrande:
<a href="https://github.com/carolcasagrande" target="blank"><img align="center" src="https://image.flaticon.com/icons/png/512/733/733609.png" alt="carolcasagrande" height="25" width="25" /></a>
<a href="https://linkedin.com/in/carolinecasagrande" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="carolinecasagrande" height="30" width="40" /></a> 
</p>
<p align="left"> Fernando Gomes Rodrigues:
<a href="https://github.com/ofernandovegano" target="blank"><img align="center" src="https://image.flaticon.com/icons/png/512/733/733609.png" alt="ofernandovegano" height="25" width="25" /></a>
<a href="https://www.linkedin.com/in/fernandogomesrodrigues/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="carolinecasagrande" height="30" width="40" /></a> 
</p>

</br>

<h4 align="center"> 
	 Maisha 🚀 Concluído... 💚💗
</h4>

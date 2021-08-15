<h1 align="center">
	<img alt="Logo do GamePlay" title="Logo do GamePlay" src="./assets/icon.png">
</h1>
<p align="center">
	<img src="img/Capa.png">
</p>
<hr>
<h1 align="center">GamePlay</h1>
<p align="center">Aplicativo mobile desenvolvido em React Native com Expo, durante uma edição da NLW realizada pela <a href="https://www.youtube.com/rocketseat">Rocketseat</a>. Contêm diversas funções, como autenticação e consumo de dados pela API do Discord, armazenamento de dados no dispositivo do usuário, compartilhamento e utilização de hiperlink e vários outros recursos visuais e funcionais.</p>
<h4>Projeto base finalizado 🚀</h4>
<hr>
<h3>Funcionalidades</h3>

- [x] Autenticação e login utilizando a conta do Discord
- [x] Armazenamento de dados de autenticação no dispositivo do usuário
- [x] Criação de agendamentos que interagem diretamente com a API do Discord
- [x] Visualização de servidores do Discord e dos membros presentes no momento. Esses são os recursos de interação dos agendamentos. 
- [x] Listagem com filtros dos agendamentos feitos
- [x] Recursos visuais como: modal, gradiente, imagens de fundo, uso de PNG e SVG, indicador de loading, etc.
- [x] Recursos funcionais como: formulários, logout e rotas de navegação privadas

<h2 align="center">Teste a aplicação no seu dispositivo Android</h2>
<p>Você só precisa ter um dispositivo Android funcional para testar essa aplicação da forma mais simples possível, instalando o arquivo .apk no seu dispositivo diretamente. Para isso, basta extrair o arquivo "gameplay.zip" presente nesse repositório e instalar o .apk</p>

<h2 align="center">Teste a aplicação na sua máquina via emulador/dispositivo real</h2>
<p>Primeiramente, você vai precisar ter o Node e o NPM instalados na sua máquina (<a href="https://nodejs.org/en/download/">você pode baixá-los aqui</a>) , assim como o Yarn e o Expo. 

- Você pode instalar o <strong>yarn</strong> da seguinte forma: acesse o terminal do seu Sistema e execute o seguinte comando:

		npm install --global yarn
- Após isso você pode verificar se a instalação funcionou, executando
		
		yarn --version
- Você pode instalar o <strong>expo</strong> da seguinte forma: acesseo terminal do seu Sistema e execute o seguinte comando:

		npm install expo-cli --global
- Após isso você pode verificar se a instalação funcionou, executando

		expo --version
Obs: um erro comum na instalação dessas ferramentas <strong>no Windows</strong> está relacionado à políticas de segurança do Windows Powershell. Caso enfrente esse erro, você pode ver formas de resolvê-lo <a href="https://pt.stackoverflow.com/questions/220078/o-que-significa-o-erro-execu%C3%A7%C3%A3o-de-scripts-foi-desabilitada-neste-sistema">aqui</a> 

<p>Após isso, acesse o terminal do seu sistema operacional, navegue até a pasta em que você quer testar a aplicação e dê o seguinte comando:</p>
		
	expo init gameplay 

- "gameplay" é o nome do seu projeto no expo. Espere alguns instantes e então aparecerão opções no terminal para escolha, essas são opções de template para o seu aplicativo. Escolha a opção que mostra <strong>blank (TypeScript)</strong>
- Então, espere até que o seu projeto expo seja criado, e então copie os arquivos desse repositório para dentro da pasta criada pelo expo, permitindo que os arquivos do repositório sobrescrevam os arquivos originais. 
- Logo você precisará utilizar um emulador ou um dispositivo físico para o teste do aplicativo, e então inicie o servidor do expo para conseguir rodar a aplicação, você pode fazer isso executando:

		expo start

	Aguarde enquanto o Expo abre uma janela no seu navegador que irá gerenciar a conexão entre sua máquina e o emulador/dispositivo físico. 

	- Caso esteja usando um dispositivo físico, baixe o app do Expo na loja de aplicativos do seu celular (Android ou IOS) e então use-o para scannear o código QR que aparece na janela aberta na sua máquina.
	- Caso esteja usando um emulador, abra-o e clique em <strong>Run on Android device/emulator.

Lembrando que para utilizar a autenticação com o Discord, você precisará entender sobre o uso da API deles e aplicar as informações devidas num arquivo .env. Você pode ler mais sobre na <a href="https://discord.com/developers/docs/intro">documentação</a>



<h2>🛠 Tecnologias</h2>

As ferramentas utilizadas para o desenvolvimento da aplicação foram:

- React Native com Expo
- TypeScript
- OAuth2

### Autor
---

<a href="https://github.com/0horaa">
 <img style="border-radius: 50px" src="https://github.com/0horaa.png" width="110px;" height="100px" alt=""/>
 <br />
 <sub><b>Sérgio Gabriel</b></sub></a> 🚀<br>
<a href="https://twitter.com/0hora_">Twitter</a><br>
<a href="https://www.instagram.com/sergio_gbrl/">Instagram</a>
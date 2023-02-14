## Wpp-API
Wpp-API é uma aplicação de envio de mensagens do WhatsApp, que usa o pacote Venom e Express para criar uma API que recebe solicitações POST para enviar mensagens através do cliente do Venom.

### Pré-requisitos
Antes de começar, certifique-se de que o seguinte software esteja instalado em sua máquina:
* Node.js (versão 14 ou superior)
* npm (ou yarn)

### Instalação
1. Clone o repositório:

```
git clone https://github.com/gabrielcarreira/wpp-api.git
```

2. Instale as dependências:

```
cd wpp-api
npm install
```

### Como Usar

1. Inicie a aplicação:

```
npm start
```

2. Abra o navegador e navegue até http://localhost:8080. Você deve ver a mensagem "API On-line" na saída do console.

3. Para enviar uma mensagem pelo WhatsApp, envie uma solicitação POST para http://localhost:8080/wpp com o seguinte corpo da solicitação:

```
{
  "user": "<número_do_telefone>",
  "msg": "<mensagem>"
}
```

Certifique-se de substituir <número_do_telefone> pelo número de telefone no formato `556381032288@c.us` para o qual você deseja enviar a mensagem e <mensagem> pela mensagem que deseja enviar.

4. Você receberá uma resposta com um status HTTP 200 e uma mensagem "Enviado!" quando a mensagem for enviada com sucesso.

### Como Contribuir
Se você quiser contribuir para o projeto Wpp-API, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie uma nova branch com a sua alteração:

```
git checkout -b minha-alteracao
```
3. Faça as alterações e confira se está tudo funcionando corretamente.
4. Faça o commit das alterações:

```
git commit -m "Minha alteração"
```
5. Envie a sua branch para o seu fork:

```
git push origin minha-alteracao
```

6. Crie um novo Pull Request e aguarde a revisão.

### Licença
O Wpp-API é licenciado sob a Licença MIT. Veja o arquivo `LICENSE` para obter mais detalhes.
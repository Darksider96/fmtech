const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', message => {
	if (message.body.toLocaleLowerCase() === 'oi') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Oi Seja Bem-vindo a FMTec, sou Stark seu guia virtual.');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Orçamentos para smartphones e tablets.');
        client.sendMessage(message.from, '(2) - Orçamentos para notebooks e computadores.');
        client.sendMessage(message.from, '(3) - Consultar seu pedido.');
        client.sendMessage(message.from, '(4) - Quero montar um PCZão.');
        client.sendMessage(message.from, '(5) - Encerrar atendimento.');
	}

    if (message.body.toLocaleLowerCase() === '1') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Troca de tela.');
        client.sendMessage(message.from, '(2) - Troca do conector de carga.');
        client.sendMessage(message.from, '(3) - Troca de bateria.');
        client.sendMessage(message.from, '(4) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '2') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Formatação');
        client.sendMessage(message.from, '(2) - Troca de tela(Notebooks)');
        client.sendMessage(message.from, '(3) - Upgrade.');
        client.sendMessage(message.from, '(4) - Manutenção preventiva.');
        client.sendMessage(message.from, '(5) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '3') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Por favor digite seu CPF e numero do orçamento para que possamos consultar com nosso especialista.');
        
	}

    if (message.body.toLocaleLowerCase() === '4') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Está a fim de montar aquela maquina para trabalho ou jogar com os amigos?');
        client.sendMessage(message.from, 'Aqui na FMTech montamos o seu pc na medida certa com o orçamento que cabe no seu bolso!');
        client.sendMessage(message.from, 'Aguarde nosso especilalista ja te chama para conversar.');
        
	}

    if (message.body.toLocaleLowerCase() === '5') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'FMTech agradece o seu contato e a preferencia!');
        
	}
});

client.on('message_create', message => {
	if (message.body.toLocaleLowerCase() === 'oii') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Oii Seja Bem-vindo a FMTec, sou Stark seu guia virtual.');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Orçamentos para smartphones e tablets.');
        client.sendMessage(message.from, '(2) - Orçamentos para notebooks e computadores.');
        client.sendMessage(message.from, '(3) - Consultar seu pedido.');
        client.sendMessage(message.from, '(4) - Quero montar um PCZão.');
        client.sendMessage(message.from, '(5) - Encerrar atendimento.');
	}

    if (message.body.toLocaleLowerCase() === '1') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Troca de tela.');
        client.sendMessage(message.from, '(2) - Troca do conector de carga.');
        client.sendMessage(message.from, '(3) - Troca de bateria.');
        client.sendMessage(message.from, '(4) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '2') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Formatação');
        client.sendMessage(message.from, '(2) - Troca de tela(Notebooks)');
        client.sendMessage(message.from, '(3) - Upgrade.');
        client.sendMessage(message.from, '(4) - Manutenção preventiva.');
        client.sendMessage(message.from, '(5) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '3') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Por favor digite seu CPF e numero do orçamento para que possamos consultar com nosso especialista.');
        
	}

    if (message.body.toLocaleLowerCase() === '4') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Está a fim de montar aquela maquina para trabalho ou jogar com os amigos?');
        client.sendMessage(message.from, 'Aqui na FMTech montamos o seu pc na medida certa com o orçamento que cabe no seu bolso!');
        client.sendMessage(message.from, 'Aguarde nosso especilalista ja te chama para conversar.');
        
	}

    if (message.body.toLocaleLowerCase() === '5') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'FMTech agradece o seu contato e a preferencia!');
        
	}	
});

client.on('message_create', message => {
	if (message.body.toLocaleLowerCase() === 'olá') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Olá Seja Bem-vindo a FMTec, sou Stark seu guia virtual.');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Orçamentos para smartphones e tablets.');
        client.sendMessage(message.from, '(2) - Orçamentos para notebooks e computadores.');
        client.sendMessage(message.from, '(3) - Consultar seu pedido.');
        client.sendMessage(message.from, '(4) - Quero montar um PCZão.');
        client.sendMessage(message.from, '(5) - Encerrar atendimento.');
    }

    if (message.body.toLocaleLowerCase() === '1') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Troca de tela.');
        client.sendMessage(message.from, '(2) - Troca do conector de carga.');
        client.sendMessage(message.from, '(3) - Troca de bateria.');
        client.sendMessage(message.from, '(4) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '2') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Formatação');
        client.sendMessage(message.from, '(2) - Troca de tela(Notebooks)');
        client.sendMessage(message.from, '(3) - Upgrade.');
        client.sendMessage(message.from, '(4) - Manutenção preventiva.');
        client.sendMessage(message.from, '(5) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '3') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Por favor digite seu CPF e numero do orçamento para que possamos consultar com nosso especialista.');
        
	}

    if (message.body.toLocaleLowerCase() === '4') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Está a fim de montar aquela maquina para trabalho ou jogar com os amigos?');
        client.sendMessage(message.from, 'Aqui na FMTech montamos o seu pc na medida certa com o orçamento que cabe no seu bolso!');
        client.sendMessage(message.from, 'Aguarde nosso especilalista ja te chama para conversar.');
        
	}

    if (message.body.toLocaleLowerCase() === '5') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'FMTech agradece o seu contato e a preferencia!');
        
	
	}
});

client.on('message_create', message => {
	if (message.body.toLocaleLowerCase() === 'ola') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Olá Seja Bem-vindo a FMTec, sou Stark seu guia virtual.');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Orçamentos para smartphones e tablets.');
        client.sendMessage(message.from, '(2) - Orçamentos para notebooks e computadores.');
        client.sendMessage(message.from, '(3) - Consultar seu pedido.');
        client.sendMessage(message.from, '(4) - Quero montar um PCZão.');
        client.sendMessage(message.from, '(5) - Encerrar atendimento.');
	}

    if (message.body.toLocaleLowerCase() === '1') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Troca de tela.');
        client.sendMessage(message.from, '(2) - Troca do conector de carga.');
        client.sendMessage(message.from, '(3) - Troca de bateria.');
        client.sendMessage(message.from, '(4) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '2') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Formatação');
        client.sendMessage(message.from, '(2) - Troca de tela(Notebooks)');
        client.sendMessage(message.from, '(3) - Upgrade.');
        client.sendMessage(message.from, '(4) - Manutenção preventiva.');
        client.sendMessage(message.from, '(5) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '3') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Por favor digite seu CPF e numero do orçamento para que possamos consultar com nosso especialista.');
        
	}

    if (message.body.toLocaleLowerCase() === '4') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Está a fim de montar aquela maquina para trabalho ou jogar com os amigos?');
        client.sendMessage(message.from, 'Aqui na FMTech montamos o seu pc na medida certa com o orçamento que cabe no seu bolso!');
        client.sendMessage(message.from, 'Aguarde nosso especilalista ja te chama para conversar.');
        
	}

    if (message.body.toLocaleLowerCase() === '5') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'FMTech agradece o seu contato e a preferencia!');

	}
});

client.on('message_create', message => {
	if (message.body.toLocaleLowerCase() === 'bom dia') {
    	// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Bom dia Seja Bem-vindo a FMTec, sou Stark seu guia virtual.');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Orçamentos para smartphones e tablets.');
        client.sendMessage(message.from, '(2) - Orçamentos para notebooks e computadores.');
        client.sendMessage(message.from, '(3) - Consultar seu pedido.');
        client.sendMessage(message.from, '(4) - Quero montar um PCZão.');
        client.sendMessage(message.from, '(5) - Encerrar atendimento.');;
	}

    if (message.body.toLocaleLowerCase() === '1') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Troca de tela.');
        client.sendMessage(message.from, '(2) - Troca do conector de carga.');
        client.sendMessage(message.from, '(3) - Troca de bateria.');
        client.sendMessage(message.from, '(4) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '2') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Formatação');
        client.sendMessage(message.from, '(2) - Troca de tela(Notebooks)');
        client.sendMessage(message.from, '(3) - Upgrade.');
        client.sendMessage(message.from, '(4) - Manutenção preventiva.');
        client.sendMessage(message.from, '(5) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '3') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Por favor digite seu CPF e numero do orçamento para que possamos consultar com nosso especialista.');
        
	}

    if (message.body.toLocaleLowerCase() === '4') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Está a fim de montar aquela maquina para trabalho ou jogar com os amigos?');
        client.sendMessage(message.from, 'Aqui na FMTech montamos o seu pc na medida certa com o orçamento que cabe no seu bolso!');
        client.sendMessage(message.from, 'Aguarde nosso especilalista ja te chama para conversar.');
        
	}

    if (message.body.toLocaleLowerCase() === '5') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'FMTech agradece o seu contato e a preferencia!');
        
	}
});

client.on('message_create', message => {
	if (message.body.toLocaleLowerCase() === 'boa tarde') {
    	// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Boa tarde Seja Bem-vindo a FMTec, sou Stark seu guia virtual.');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Orçamentos para smartphones e tablets.');
        client.sendMessage(message.from, '(2) - Orçamentos para notebooks e computadores.');
        client.sendMessage(message.from, '(3) - Consultar seu pedido.');
        client.sendMessage(message.from, '(4) - Quero montar um PCZão.');
        client.sendMessage(message.from, '(5) - Encerrar atendimento.');
	}

    if (message.body.toLocaleLowerCase() === '1') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Troca de tela.');
        client.sendMessage(message.from, '(2) - Troca do conector de carga.');
        client.sendMessage(message.from, '(3) - Troca de bateria.');
        client.sendMessage(message.from, '(4) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '2') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Formatação');
        client.sendMessage(message.from, '(2) - Troca de tela(Notebooks)');
        client.sendMessage(message.from, '(3) - Upgrade.');
        client.sendMessage(message.from, '(4) - Manutenção preventiva.');
        client.sendMessage(message.from, '(5) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '3') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Por favor digite seu CPF e numero do orçamento para que possamos consultar com nosso especialista.');
        
	}

    if (message.body.toLocaleLowerCase() === '4') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Está a fim de montar aquela maquina para trabalho ou jogar com os amigos?');
        client.sendMessage(message.from, 'Aqui na FMTech montamos o seu pc na medida certa com o orçamento que cabe no seu bolso!');
        client.sendMessage(message.from, 'Aguarde nosso especilalista ja te chama para conversar.');
        
	}

    if (message.body.toLocaleLowerCase() === '5') {
		// encerrar
		client.sendMessage(message.from, 'FMTech agradece o seu contato e a preferencia!');
        
	}
});

client.on('message_create', message => {
	if (message.body.toLocaleLowerCase() === 'boa noite') {
    	// menu
		client.sendMessage(message.from, 'Boa noite Seja Bem-vindo a FMTec, sou Stark seu guia virtual.');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Orçamentos para smartphones e tablets.');
        client.sendMessage(message.from, '(2) - Orçamentos para notebooks e computadores.');
        client.sendMessage(message.from, '(3) - Consultar seu pedido.');
        client.sendMessage(message.from, '(4) - Quero montar um PCZão.');
        client.sendMessage(message.from, '(5) - Encerrar atendimento.');
	}

    if (message.body.toLocaleLowerCase() === '1') {
		// orçamento notebook
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Troca de tela.');
        client.sendMessage(message.from, '(2) - Troca do conector de carga.');
        client.sendMessage(message.from, '(3) - Troca de bateria.');
        client.sendMessage(message.from, '(4) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '2') {
		// orçamento pc
		client.sendMessage(message.from, 'Maravilha! Orçamento é com a gente mesmo!');
        client.sendMessage(message.from, 'Por favor escolha uma opção para seguir com o seu atendimento: ');
        client.sendMessage(message.from, '(1) - Formatação');
        client.sendMessage(message.from, '(2) - Troca de tela(Notebooks)');
        client.sendMessage(message.from, '(3) - Upgrade.');
        client.sendMessage(message.from, '(4) - Manutenção preventiva.');
        client.sendMessage(message.from, '(5) - Não consigo identificar meu problema.');
	}

    if (message.body.toLocaleLowerCase() === '3') {
		// consultar um pedido
		client.sendMessage(message.from, 'Por favor digite seu CPF e numero do orçamento para que possamos consultar com nosso especialista.');
        
	}

    if (message.body.toLocaleLowerCase() === '4') {
		// Montar um pc
		client.sendMessage(message.from, 'Está a fim de montar aquela maquina para trabalho ou jogar com os amigos?');
        client.sendMessage(message.from, 'Aqui na FMTech montamos o seu pc na medida certa com o orçamento que cabe no seu bolso!');
        client.sendMessage(message.from, 'Aguarde nosso especilalista ja te chama para conversar.');
        
	}

    if (message.body.toLocaleLowerCase() === '5') {
		//encerramento
		client.sendMessage(message.from, 'FMTech agradece o seu contato e a preferencia!');
        
	
	}
});


client.initialize();


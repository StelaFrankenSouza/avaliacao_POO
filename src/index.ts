console.log("ola");

import {cadastroUsuario} from "./user"
const cadastro = new cadastroUsuario("Stela", "Franken", "stela@gmail", 12345, "hhhh");

import { Usuario } from "./user";
const usuario = new Usuario()
const criarUsuario = new Usuario();
criarUsuario.adicionarUsuario('Stela', "Franken", 'stela@gmail', 12345, "gggg");
criarUsuario.adicionarUsuario('Xandi', "Silva", 'xandi@gmail', 123456, "dddd");
criarUsuario.adicionarUsuario('Isa', "Souza", 'isa@gmail', 123456, "dddd");
criarUsuario.follow('Stela', "Franken");
criarUsuario.showFeed("stela");
criarUsuario.showTweets("stela");
criarUsuario.sendTweets("stela", "Ola, estou no tweet")

criarUsuario.usuario.forEach(usuario => {
    console.log(`\nInformações de ${usuario.nome}:`);
    console.log(`Username: ${usuario.username}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Seguidores: ${usuario.seguidores.length}`);
    console.log(`Tweets: ${usuario.tweets.length}`);
    console.log('---');


});

import { Tweet } from './tweet'
import { log } from "console";
const usuarioStela = criarUsuario.usuario.find(usuario => usuario.nome === 'Stela');
const usuarioXandi = criarUsuario.usuario.find(usuario => usuario.nome === 'Xandi');
const usuarioIsa = criarUsuario.usuario.find(usuario => usuario.nome === 'Isa');

if (usuarioStela && usuarioXandi && usuarioIsa) {
  
    const tweetXandi = usuarioXandi.sendTweet('Olá, mundo!', 'normal');
    const tweetStela = usuarioStela.sendTweet('Primeiro tweet!', 'normal');
    const tweetIsa = usuarioIsa.sendTweet('Primeiro tweet!', 'normal');
    
    console.log('\nTweet de Xandi:');
    tweetXandi.displayTweet(usuarioXandi.username);

    console.log('\nFeed de Stela:');
    console.log(tweetStela.show());
    tweetStela.showReplies();
    tweetStela.showLikes();
    tweetStela.displayTweet(usuarioStela.username);
    console.log(`Usuários que ${usuarioStela.nome} está seguindo: ${usuarioXandi.nome}`);


    console.log('\nFeed de Xandi:');
    console.log(tweetXandi.show());
    tweetStela.showReplies();
    tweetStela.displayTweet(usuarioXandi.username);
    console.log(`Usuários que ${usuarioXandi.nome} está seguindo: ${usuarioStela.nome}`);

    console.log('\nFeed de Isa:');
    console.log(tweetIsa.show());
    tweetIsa.showReplies();
    tweetIsa.displayTweet(usuarioIsa.username);
    console.log(`Usuários que ${usuarioIsa.nome} está seguindo: ${usuarioStela.nome}`);


}








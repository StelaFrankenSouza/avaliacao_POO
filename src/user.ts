import { Tweet } from "./tweet";


export class cadastroUsuario {
    private static contadorID: number = 1;

    public id: number;
    public nome: string;
    public username: string;
    public email: string;
    private senha: number;
    public seguidor: string[] = []
    public tweets: [] = [];
    public seguidores: cadastroUsuario[] = [];
   
   

    constructor(nome: string, username: string, email: string, senha: number, seguidor: string){
        this.id = cadastroUsuario.contadorID ++;
        this.nome = nome;
        this.username = username;
        this.email = email;
        this.senha = senha;
        this.tweets = [];
        this.seguidor.push(seguidor);
    }

    validarSenha(senha: number): boolean{
        return this.senha === senha
    }

    mostrarUsuario(): string{
        return `${this.nome}, ${this.username}, ${this.email}`
    }

    sendTweet(conteudo: string, tipo: string): Tweet{
        const tweet = new Tweet(this.id, conteudo, tipo)
        this.tweets.push();
        return tweet
       }

    follow(seguidores: string){
        this.seguidor.push(seguidores)
       }
    
    showFeed(){
        console.log(`Feed de ${this.username}`);
        this.seguidores.forEach(seguir => {
            seguir.showTweets()
        })
}
    showTweets(): void {
    console.log(`Tweets de ${this.nome}:`);
    this.tweets.forEach((tweet) => {
      console.log(tweet);
    });
  }


}

    
   

export class Usuario {
    usuario: cadastroUsuario[] = []
   
   

    adicionarUsuario(nome: string, username: string, email:string, senha: number, seguidor: string){
        const novoUsuario = new cadastroUsuario(nome, username, email, senha, seguidor);
        this.usuario.push(novoUsuario);
    }

    validarUsuario(nome: string, senha: number): boolean{
        const usuarios = this.usuario.find(usuario => usuario.nome === nome );

        if(usuarios){
            return usuarios.validarSenha(senha)
        }

        return false
    }

    sendTweets(nome: string, tweet: string) {
        const usuario = this.usuario.find(usuario => usuario.nome === nome);

        if (usuario) {
            usuario.sendTweet(nome, tweet);
        }
    }

   
    follow(nome: string, seguidor: string) {
        const usuario = this.usuario.find(usuario => usuario.nome === nome);
        const usuarioSeguido = this.usuario.find(usuario => usuario.username === seguidor);

        if (usuario && usuarioSeguido) {
            usuario.follow(seguidor);
        }
    }

 
    showFeed(nome: string) {
        const usuario = this.usuario.find(usuario => usuario.nome === nome);
      
        if (usuario) {
            usuario.showFeed();
        }
      }

    showTweets(nome: string) {
        const usuario = this.usuario.find(usuario => usuario.nome === nome);

        if (usuario) {
            usuario.showTweets();
        }
    }
}

 


const criarUsuario = new Usuario()
criarUsuario.adicionarUsuario('Stela', "Franken", 'stela@gmail', 12345, "llll")
criarUsuario.adicionarUsuario('Xandi', "Franken", 'xandi@gmail', 123456, "hhhh")
criarUsuario.adicionarUsuario('Isa', "Franken", 'isa@gmail', 1234567, "ffff")
criarUsuario.adicionarUsuario('Isa', "Franken", 'isa@gmail', 123,"llll")
criarUsuario.adicionarUsuario('Isa', "Franken", 'isa@gmail', 123, "ffff")
  



const nome = '';
const senha = 0;
const usuarioValido = criarUsuario.validarUsuario(nome, senha)
console.log(usuarioValido);
console.log(criarUsuario);

criarUsuario.usuario.forEach(usuario => {
    console.log(usuario.mostrarUsuario());
    
})
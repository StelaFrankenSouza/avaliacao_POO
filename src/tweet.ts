import { Usuario, cadastroUsuario } from './user';
import { Reply} from "./reply"
import { Like } from './like';

export class Tweet {
   private static contadorID: number = 1

   public identificador : number;
   public conteudo: string;
   public tipo: string
   public likes: number = 0
  
   public replies: Tweet [] = []
   public likeUser: string[] = [];
  

   constructor(identificador: number, conteudo: string, tipo: string){
        this.identificador = identificador
        this.conteudo = conteudo;
        this. tipo = tipo
   }

   reply(usuario: cadastroUsuario, conteudo: string): Tweet{
      const replyTweet = new Tweet(this.identificador, this.conteudo, this.tipo,)
         this.replies.push(replyTweet)
         return replyTweet;
   
   }

   like(username: cadastroUsuario): void{
      this.likes++
      this.likeUser.push()
   }

   show(): string{
     return `${this.conteudo}, ${this.likes} ${this.replies.length}`
      
   }

   showLikes(): string {
      if (this.likes === 0) {
          return '';
      } else if (this.likes === 1) {
          return `@${this.likeUser[0]} curtiu`;
      } else {
          const others = this.likes - 1;
          return `@${this.likeUser[0]} e mais ${others} usuários curtiram`;
      }

     
  }


   showReplies(): string{
      if(this.replies.length === 0){
      return 'Não há conteúdo';
   }else{  
      let replyText = '';
        this.replies.forEach(reply => {
            replyText += `> @${reply.likeUser[0]}: ${reply.conteudo}\n`;
        });
        return replyText;
   }
      

      
   }

   
 
   displayTweet(username: string): void {
      const tweetText = `@${username}: ${this.conteudo}\n${this.showLikes()}\n${this.showReplies()}`;
      console.log(`@${username}: ${this.conteudo}\n${this.likes} likes * ${this.replies.length} replies *`);
  }
}

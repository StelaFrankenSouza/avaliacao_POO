import { Usuario } from './user';
import { Tweet } from './tweet';
import { Reply } from './reply'
import { cadastroUsuario } from './user';


export class Like {
  constructor(public id: number, public user: Usuario, public tweet: Tweet) {}

  
}





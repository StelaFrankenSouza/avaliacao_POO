import { Usuario } from './user';
import { Tweet } from './tweet';
import { Like } from "./like"

export class Reply {
  constructor(public id: number, public content: string, public user: Usuario, public tweet: Tweet) {

  }
 
}

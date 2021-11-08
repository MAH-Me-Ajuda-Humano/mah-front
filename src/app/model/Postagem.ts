import { Tema } from "./tema"
import { User } from "./User"

export class Postagem{

    public id:  number
    public titulo: string
    public postagem: string
    public data: Date
    public usuario: User
    public tema: Tema


}
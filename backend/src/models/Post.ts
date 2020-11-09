import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('posts')
export class Post {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  likes:number;
}
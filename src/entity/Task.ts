import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity("Tasks")
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  deadline: string;

  @Column()
  isDone: boolean;
}

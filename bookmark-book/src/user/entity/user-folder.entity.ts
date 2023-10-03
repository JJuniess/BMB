import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Folder {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.Folders)
    @JoinColumn({name : 'userId'})
    user: User;

    @Column()
    FolderName: string;

    @Column()
    ParentFolderId: number;

    @Column()
    isShared: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
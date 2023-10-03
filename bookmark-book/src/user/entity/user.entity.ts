import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Bookmark } from "./user-bookmark.entity";
import { Folder } from "./user-folder.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    nickname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    selfIntroduction: string;

    @OneToMany(() => Bookmark, bookmark => bookmark.user)
    Bookmarks: Bookmark[];

    @OneToMany(() => Folder, folder => folder.user)
    Folders: Folder[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

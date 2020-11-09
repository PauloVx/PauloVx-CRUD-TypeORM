import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePosts1604947915810 implements MigrationInterface {
   public async up(queryRunner: QueryRunner): Promise<void> {
     const postsTable = new Table({
       name: 'posts',
       columns: [
         { name: 'id', type: 'integer', isGenerated: true, generationStrategy: 'increment', isPrimary: true, isNullable: false },
         { name: 'title', type: 'varchar', isNullable: false },
         { name: 'content', type: 'varchar', isNullable: false },
         { name: 'likes', type: 'integer', isNullable: false }
       ]
     });

     await queryRunner.createTable(postsTable);
   }

   public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.dropTable('posts');
  }
}

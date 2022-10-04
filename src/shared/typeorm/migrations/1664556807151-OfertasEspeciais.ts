import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class OfertasEspeciais1664556807151 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
      await queryRunner.createTable(new Table({
        name: "games",
        columns: [{
          name: 'id',
          type: 'uuid',
          isPrimary:true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'game_name',
          type: 'varchar'
        },
        {
          name: 'game_image',
          type: 'varchar'
        },
        {
          name: 'game_gallery',
          type: 'varchar'
        },
        {
          name: 'sub_title',
          type: 'varchar'
        },
         {
          name: 'tags',
          type: 'varchar'
        },
         {
          name: 'price',
          type: 'decimal',
          precision: 10,
          scale: 2,
        },
         {
          name: 'platforms',
          type: 'varchar'
        },
      ],
      }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('games')
    }

}

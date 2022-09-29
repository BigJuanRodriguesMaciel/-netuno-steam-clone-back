import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1664479797069 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "user",
        columns: [{
          name: 'id',
          type: 'uuid',
          isPrimary:true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'name_user',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar'
        },
        {
          name: 'password',
          type: 'varchar'
        },
        {
          name: 'country',
          type: 'varchar'
        },
        {
          name: 'created_at',
          type: 'timesamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timesamp',
          default: 'now()'
        }
      ],
      }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('user')
    }

}

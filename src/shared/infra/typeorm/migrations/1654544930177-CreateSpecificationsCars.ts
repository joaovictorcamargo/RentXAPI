import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateSpecificationsCars1654544930177
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    /* Criando a Tabela */
    await queryRunner.createTable(
      new Table({
        name: "specifications_cars",
        columns: [
          {
            name: "car_id",
            type: "uuid",
          },
          {
            name: "specification_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
    /* Criando as FK */
    await queryRunner.createForeignKey(
      "specifications_cars",
      new TableForeignKey({
        name: "FKSpecificationCar",
        referencedTableName: "specifications",
        referencedColumnNames: ["id"],
        columnNames: ["specification_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "specifications_cars",
      new TableForeignKey({
        name: "FKCarSpecification",
        referencedTableName: "cars",
        referencedColumnNames: ["id"],
        columnNames: ["car_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    /*  Removendo as FK */
    await queryRunner.dropForeignKey(
      "specifications_cars",
      "FKCarSpecification"
    );

    await queryRunner.dropForeignKey(
      "specifications_cars",
      "FKSpecificationCar"
    );
    /* Deletando a Tabela */
    await queryRunner.dropTable("specifications_cars");
  }
}

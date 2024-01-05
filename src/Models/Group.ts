import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "@sequelize/core";
import {
  Attribute,
  Table,
  PrimaryKey,
} from "@sequelize/core/decorators-legacy";

@Table({
  tableName: "groups",
})
export class Group extends Model<
  InferAttributes<Group>,
  InferCreationAttributes<Group>
> {
  @Attribute(DataTypes.UUID)
  @PrimaryKey
  declare id: CreationOptional<string>;

  @Attribute(DataTypes.STRING)
  declare groupName: string;

  @Attribute(DataTypes.DATE)
  declare createdAt: Date | null;
}

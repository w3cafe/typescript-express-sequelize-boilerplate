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
  tableName: "users",
})
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @Attribute(DataTypes.UUID)
  @PrimaryKey
  declare id: CreationOptional<string>;

  @Attribute(DataTypes.STRING)
  declare firstName: string | null;

  @Attribute(DataTypes.STRING)
  declare lastName: string | null;

  @Attribute(DataTypes.STRING)
  declare deviceId: string | null;

  @Attribute(DataTypes.STRING)
  declare groupId: string | null;

  @Attribute(DataTypes.STRING)
  declare email: string | null;

  @Attribute(DataTypes.STRING)
  declare mobile: string | null;

  @Attribute(DataTypes.STRING)
  declare password: string | null;

  @Attribute(DataTypes.DATE)
  declare createdAt: Date | null;

  @Attribute(DataTypes.DATE)
  declare updatedAt: Date | null;
}

// // order of InferAttributes & InferCreationAttributes is important.
// export class User extends Model<
//   InferAttributes<User>,
//   InferCreationAttributes<User>
// > {
//   // 'CreationOptional' is a special type that marks the field as optional
//   // when creating an instance of the model (such as using Model.create()).
//   declare id: CreationOptional<string>;
//   declare firstName: CreationOptional<string>;
//   declare lastName: CreationOptional<string>;
//   declare deviceId: CreationOptional<string>;
//   declare email: CreationOptional<string>;
//   declare mobile: CreationOptional<string>;
//   declare password: CreationOptional<string>;
//   declare groupId: string;
//   declare createdAt: Date;
//   declare updatedAt: Date;
// }

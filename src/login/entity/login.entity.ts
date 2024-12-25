import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export const CollectionName = 'users';

@Schema()
export class User extends Document {

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;
}

export const UserloginSchema = SchemaFactory.createForClass(User);

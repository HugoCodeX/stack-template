export interface IUserServiceClient {
  findAll(query: any): Promise<any>;
  findOne(id: string): Promise<any>;
  create(createUserDto: any): Promise<any>;
  update(id: string, updateUserDto: any): Promise<any>;
  remove(id: string): Promise<any>;
}

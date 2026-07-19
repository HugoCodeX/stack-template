export interface IProductServiceClient {
  findAll(query: any): Promise<any>;
  findOne(id: string): Promise<any>;
  create(createProductDto: any): Promise<any>;
  update(id: string, updateProductDto: any): Promise<any>;
  remove(id: string): Promise<any>;
  findByCategory(category: string, query: any): Promise<any>;
  addReview(id: string, reviewDto: any): Promise<any>;
}

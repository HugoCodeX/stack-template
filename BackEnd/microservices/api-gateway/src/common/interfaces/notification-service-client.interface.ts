export interface INotificationServiceClient {
  findAll(userId: string): Promise<any>;
  send(sendNotificationDto: any): Promise<any>;
  markAsRead(id: string, userId: string): Promise<any>;
  getUnreadCount(userId: string): Promise<any>;
}

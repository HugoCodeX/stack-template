import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { UserRegisteredEvent, UserLoggedInEvent } from '../events';

@Injectable()
export class AuthListener {
  private readonly logger = new Logger(AuthListener.name);

  @OnEvent('user.registered')
  handleUserRegistered(event: UserRegisteredEvent) {
    this.logger.log(`Usuario registrado: ${event.email} (${event.userId})`);
  }

  @OnEvent('user.logged_in')
  handleUserLoggedIn(event: UserLoggedInEvent) {
    this.logger.log(`Inicio de sesión: ${event.email} (${event.userId})`);
  }
}

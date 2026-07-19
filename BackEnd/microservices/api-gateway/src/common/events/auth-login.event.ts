export class AuthLoginEvent {
  constructor(
    public readonly userId: string,
    public readonly email: string,
  ) {}
}

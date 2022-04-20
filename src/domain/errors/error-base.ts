export class ErrorBase extends Error {
  constructor(message: string, className?: string) {
    super(message);
    this.name = className || ErrorBase.name;
  }
}

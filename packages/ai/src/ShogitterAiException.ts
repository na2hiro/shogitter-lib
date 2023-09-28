export default class ShogitterAiException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ShogitterAiException";
  }
}

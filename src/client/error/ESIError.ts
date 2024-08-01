export class ESIError extends Error {
  code?: number;

  constructor(code: number | undefined, message: string | undefined) {
    super(`${message ?? ""}`);
    this.code = code;
    this.name = "ESIError";
  }
}

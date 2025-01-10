export class HttpException extends Error {
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (err: any, req?: any, res?: any, next?: any) => {
  if (err instanceof HttpException) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  res.status(500).json({ message: "Internal Server Error" });
};

import { Request, Response } from "express";

const healthCheck = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
};

export default {
    healthCheck,
};

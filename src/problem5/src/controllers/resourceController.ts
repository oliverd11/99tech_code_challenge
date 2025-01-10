import { Request, Response, NextFunction } from "express";
import * as resourceService from "../services/resourceService";
import { resourceValidator } from "../validators/resourceValidator";
import { validate } from "../utils/validationMiddleware";
import { asyncHandler } from "../utils/asyncHandler";

export const createResource = [
  validate(resourceValidator),
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { name, description } = req.body;
    const newResource = await resourceService.createResource(name, description);
    res
      .status(201)
      .json({ message: "Resource created", resource: newResource });
  }),
];

export const getResources = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.query;
    const resources = await resourceService.getResources(name as string);
    res.status(200).json(resources);
  }
);

export const getResourceById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const resource = await resourceService.getResourceById(id);
    res.status(200).json(resource);
  }
);

export const updateResource = [
  validate(resourceValidator),
  asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const updatedResource = await resourceService.updateResource(
      id,
      name,
      description
    );
    res
      .status(200)
      .json({ message: "Resource updated", resource: updatedResource });
  }),
];

export const deleteResource = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    await resourceService.deleteResource(id);
    res.status(200).json({ message: "Resource deleted" });
  }
);

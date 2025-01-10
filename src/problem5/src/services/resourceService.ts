import { ResourceModel } from '../models/resourceModel';
import { HttpException } from '../utils/errorInterceptor';

export const createResource = async (name: string, description: string) => {
  const existingResource = await ResourceModel.findOne({ name });
  if (existingResource) {
    throw new HttpException(400, 'Resource with the same name already exists.');
  }

  const newResource = new ResourceModel({ name, description });
  await newResource.save();
  return newResource;
};

export const getResources = async (name?: string) => {
  const query = name ? { name: { $regex: name, $options: 'i' } } : {};
  return ResourceModel.find(query);
};

export const getResourceById = async (id: string) => {
  const resource = await ResourceModel.findById(id);
  if (!resource) {
    throw new HttpException(404, 'Resource not found');
  }
  return resource;
};

export const updateResource = async (id: string, name: string, description: string) => {
  const updatedResource = await ResourceModel.findByIdAndUpdate(id, { name, description }, { new: true });
  if (!updatedResource) {
    throw new HttpException(404, 'Resource not found');
  }
  return updatedResource;
};

export const deleteResource = async (id: string) => {
  const deletedResource = await ResourceModel.findByIdAndDelete(id);
  if (!deletedResource) {
    throw new HttpException(404, 'Resource not found');
  }
  return deletedResource;
};

import { ResourceModel } from "../../models/resourceModel";

const seedResources = async () => {
  const resources = [
    { name: "Resource 1", description: "Description for resource 1" },
    { name: "Resource 2", description: "Description for resource 2" },
    { name: "Resource 3", description: "Description for resource 3" },
  ];

  try {
    await ResourceModel.deleteMany({});
    await ResourceModel.insertMany(resources);
    console.log("Resources seeded successfully");
  } catch (error) {
    console.error("Error seeding resources:", error);
  }
};

export default seedResources;

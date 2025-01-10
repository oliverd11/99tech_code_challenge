import mongoose from 'mongoose';
import logger from "../utils/logger";
import config from "../config";

let connectionAttempts = 0;
const maxAttempts = 5;

const connectDB = async () => {
    connectionAttempts += 1;

    logger.info(`Connection attempt ${connectionAttempts}...`);
    while (connectionAttempts < maxAttempts) {
        try {
            await mongoose.connect(config.uri!);
            console.log("MongoDB connected successfully");
            break;
        } catch (error: any) {
            connectionAttempts++;
            console.error(`Attempt ${connectionAttempts} failed: ${error.message}`);
            if (connectionAttempts >= maxAttempts) {
                console.error("Max connection attempts reached. Exiting...");
                process.exit(1);
            }
            await new Promise(res => setTimeout(res, 5000)); // wait for 5 seconds before retrying
        }
    }
};

export default connectDB;

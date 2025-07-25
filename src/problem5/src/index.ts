import express from "express";
import connectToDB from "./database/index";
import resourceRoutes from "./routes/resourceRoutes";
import healthCheckRoutes from "./routes/healthCheckRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swagger.json";
import { errorHandler } from "./utils/errorInterceptor";
import config from "./config";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import mongoSantinize from "express-mongo-sanitize";
import seedResources from "./database/seed/seed"

const app = express();
const PORT = config.port;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(mongoSantinize());

app.use("/healthcheck", healthCheckRoutes);
app.use("/resources", resourceRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorHandler);

connectToDB()
  .then(async () => {
    await seedResources();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });

export default app;

import cors from "cors";
import statusCodes, { StatusCodes } from "http-status-codes";
import morgan from "morgan";
import * as controllers from "./controllers/index.js";
import errorHandler from "./errors/error-handler.js";
import path from "path";
import sequelize from "./utils/mysql.js";

const logger = morgan(process.env.LOG_FORMAT || "dev");
const cors = cors({
  origin: process.env.CORS_ORIGIN || "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
});

const helmet = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", 'cdn.example.com'],
      styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
    }
  },
  frameguard: { action: 'deny' }
})

// const apiAuthentication = createCheckAuthenticationMiddleware({
//   onUnauthenticated: (req, res, next) => {
//     res.sendStatus(statusCodes.UNAUTHORIZED)
//   }
// })

// const adminAuthentication = createCheckAuthenticationMiddleware({
//   onUnauthenticated: (req, res, next) => {
//     const adminSecret = req.get('X-Admin-Secret')

//     if (adminSecret === process.env.ADMIN_SECRET) {
//       return next()
//     }

//     res.sendStatus(StatusCodes.FORBIDDEN)
//   }
// })

export default async function initRoutes(app) {
  const sentryIntegrated = !!process.env.SENTRY__DSN_SERVER;

  if (sentryIntegrated) {
    Sentry.init({
      dsn: process.env.SENTRY__DSN_SERVER,
      integrations: [
        // enable HTTP calls tracing
        new Sentry.Integrations.Http({ tracing: true }),
        // enable Express.js middleware tracing
        new Tracing.Integrations.Express({ app }),
      ],
      tracesSampleRate: 1.0,
    });
  }

  // const sentryMiddlewares = sentryIntegrated
  //   ? [
  //     // RequestHandler creates a separate execution context using domains, so that every
  //     // transaction/span/breadcrumb is attached to its own Hub instance
  //     Sentry.Handlers.requestHandler(),
  //     // TracingHandler creates a trace for every incoming request
  //     Sentry.Handlers.tracingHandler(),
  //   ]
  //   : [];/

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  app.use([logger, cors, helmet]);

  app.use("/", authenticationRouter);

  // handle error
  app.use(errorHandler);
}

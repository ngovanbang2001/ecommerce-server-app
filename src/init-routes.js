import cors from "cors";
import statusCodes, { StatusCodes } from "http-status-codes";
import morgan from "morgan";
import helmet from "helmet";
import errorHandler from "./errors/error-handler.js";
import path from "path";
import authenticationRouter from "./routes/authentication-router.js";
import userRouter from "./routes/user-router.js";
import productRouter from "./routes/product-router.js";
import uploadRouter from "./routes/upload-router.js";

const logger = morgan(process.env.LOG_FORMAT || "dev");
const corOption = cors({
  origin: process.env.CORS_ORIGIN || true,
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
  allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, Authorization",
});

const helmetOption = helmet({
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

  app.use([logger, corOption, helmetOption]);

  app.use("/api", authenticationRouter);
  app.use("/api/user", userRouter);
  app.use("/api/product", productRouter);
  app.use("/api/upload", uploadRouter);

  // handle error
  app.use(errorHandler);
}

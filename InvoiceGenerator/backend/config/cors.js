const DEFAULT_DEV_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
];

function parseAllowedOrigins() {
  const fromEnv = [process.env.FRONTEND_URL, process.env.ALLOWED_ORIGINS]
    .filter(Boolean)
    .flatMap((value) =>
      value
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean)
    );

  const origins = new Set(fromEnv);

  if (process.env.NODE_ENV !== "production") {
    DEFAULT_DEV_ORIGINS.forEach((origin) => origins.add(origin));
  }

  return [...origins];
}

function isVercelAppOrigin(origin) {
  return /^https:\/\/[\w.-]+\.vercel\.app$/.test(origin);
}

function isVercelOriginAllowed(origin) {
  if (!isVercelAppOrigin(origin)) return false;
  if (process.env.ALLOW_VERCEL_PREVIEWS === "false") return false;
  // Allow Vercel frontends in production by default (common for Vercel + Render setups).
  return process.env.NODE_ENV === "production" || process.env.ALLOW_VERCEL_PREVIEWS === "true";
}

export function createCorsOptions() {
  const allowedOrigins = parseAllowedOrigins();

  if (process.env.NODE_ENV === "production" && allowedOrigins.length === 0) {
    console.warn(
      "FRONTEND_URL is not set. Allowing *.vercel.app origins as fallback. " +
        "Set FRONTEND_URL=https://your-app.vercel.app for a stricter production setup."
    );
  }

  return {
    origin(origin, callback) {
      // Allow server-to-server tools and same-origin health checks without Origin header.
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin) || isVercelOriginAllowed(origin)) {
        return callback(null, true);
      }

      console.warn(`CORS blocked request from origin: ${origin}`);
      return callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
  };
}

export function getBackendUrl() {
  const url = process.env.BACKEND_URL?.trim().replace(/\/+$/, "");
  if (url) return url;

  if (process.env.NODE_ENV === "production") {
    console.warn(
      "Warning: BACKEND_URL is not set. Uploaded file URLs may be incorrect in production."
    );
  }

  return "http://localhost:4000";
}

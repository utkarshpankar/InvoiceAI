const trimTrailingSlash = (value) => value?.trim().replace(/\/+$/, "") || "";

export const API_BASE =
  trimTrailingSlash(import.meta.env.VITE_API_BASE_URL) ||
  (import.meta.env.DEV ? "http://localhost:4000" : "");

export const CLERK_PUBLISHABLE_KEY =
  import.meta.env.VITE_CLERK_PUBLISHABLE_KEY?.trim() || "";

export function validateClientEnv() {
  if (!CLERK_PUBLISHABLE_KEY) {
    throw new Error(
      "Missing VITE_CLERK_PUBLISHABLE_KEY. Add it in Vercel environment variables before deploying."
    );
  }

  const isDevClerkKey = CLERK_PUBLISHABLE_KEY.startsWith("pk_test_");

  if (import.meta.env.PROD) {
    if (!API_BASE) {
      throw new Error(
        "Missing VITE_API_BASE_URL. Set it to your Render backend URL in Vercel environment variables."
      );
    }

    if (isDevClerkKey) {
      console.warn(
        "[InvoiceAI] Using Clerk development keys (pk_test_) in production. " +
          "Switch to pk_live_ from your Clerk Production instance when ready."
      );
    }
  }
}

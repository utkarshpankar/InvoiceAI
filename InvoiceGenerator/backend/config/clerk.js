export function validateClerkEnv() {
  const secretKey = process.env.CLERK_SECRET_KEY?.trim() || "";
  const publishableKey = process.env.CLERK_PUBLISHABLE_KEY?.trim() || "";

  if (!secretKey || !publishableKey) {
    console.warn(
      "Clerk keys missing. Set CLERK_SECRET_KEY and CLERK_PUBLISHABLE_KEY."
    );
    return;
  }

  if (process.env.NODE_ENV !== "production") return;

  if (secretKey.startsWith("sk_test_")) {
    console.error(
      "Production backend is using a Clerk development secret key (sk_test_). Switch to sk_live_."
    );
  }

  if (publishableKey.startsWith("pk_test_")) {
    console.error(
      "Production backend is using a Clerk development publishable key (pk_test_). Switch to pk_live_."
    );
  }
}

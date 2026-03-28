export const authRoute = {
  path: "/auth",
  method: "GET",
};

export function handleAuth() {
  return {
    ok: true,
    route: "auth",
    message: "Starter route for Hardcoded Admin Password Reset Secret",
  };
}

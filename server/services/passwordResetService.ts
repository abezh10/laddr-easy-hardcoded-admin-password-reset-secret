export const starterpasswordResetServiceItems = [
  { id: "starter-1", label: "Sample password reset service record", status: "draft" },
  { id: "starter-2", label: "Another password reset service record", status: "ready" },
];

export async function loadpasswordResetServicePreview() {
  return Promise.resolve(starterpasswordResetServiceItems);
}

export async function savepasswordResetServicePreview() {
  return Promise.resolve({
    ok: false,
    message: "The password reset service workflow is intentionally unfinished in Hardcoded Admin Password Reset Secret.",
  });
}

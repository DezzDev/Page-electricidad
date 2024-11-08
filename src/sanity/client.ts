import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "u1rlx2cd",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
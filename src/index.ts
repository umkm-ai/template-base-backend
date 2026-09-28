import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { env } from "./env.js";
import { handleError } from "./http/errors.js";

const app = new Hono();

app.use("*", logger());
app.use("*", cors());

app.get("/healthz", (c) => c.json({ status: "ok", service: "base-backend" }));

const api = new Hono();
app.route("/api", api);

app.onError(handleError);

export default {
  port: env.PORT,
  fetch: app.fetch,
};

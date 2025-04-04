import { Elysia } from "elysia";
import postsRoutes from "./routes/posts";
import swagger from "@elysiajs/swagger";
import userRoutes from "./routes/users";

const app = new Elysia()

app
  .use(swagger())
  .group('/api', (app) => 
    app
      .use(postsRoutes)
      .use(userRoutes)
  )
  .listen(process.env.PORT || 5000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

import Elysia from "elysia";

const userRoutes = new Elysia({ prefix: '/users'})
    .get('/', () => 'Get all users')

export default userRoutes
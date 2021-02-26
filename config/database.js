module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "us-cdbr-east-03.cleardb.com"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "heroku_8e158a170ed9c12"),
        username: env("DATABASE_USERNAME", "b9580a44549d8d"),
        password: env("DATABASE_PASSWORD", "9c8b48a0"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});

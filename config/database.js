module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "smacfi-19.mysql.database.azure.com"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "smacfi-19"),
        username: env("DATABASE_USERNAME", "ahc2806@smacfi-19"),
        password: env("DATABASE_PASSWORD", "CiA28069"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});

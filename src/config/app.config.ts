export const EnvConfigutarion = () => ({
  environment: process.env.NODE_ENV || 'dev',
  database_url: process.env.POSTGRESDB,
  port: process.env.PORT || 3002,
});

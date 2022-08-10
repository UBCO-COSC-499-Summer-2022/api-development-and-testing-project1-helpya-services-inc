module.exports = {
  HOST: process.env.DB_HOST || 'localhost',
  USER: process.env.DB_USER || 'root',
  PASSWORD: process.env.DB_PASSWORD || 'Cosc499api!',
  DB:   process.env.DB_NAME || 'heroku_b5b309c959adca7',
  port: process.env.DB_PORT || '3306',
};

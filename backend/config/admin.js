module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3a89dda3821d678b8ded022d819f2a64'),
  },
});

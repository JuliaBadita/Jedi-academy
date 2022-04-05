module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '910b6d406767988a423a30c7cbfa8aa1'),
  },
});

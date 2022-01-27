module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '478067ee7ec99e42f15a294a74d9054e'),
  },
});

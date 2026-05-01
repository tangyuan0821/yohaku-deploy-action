module.exports = {
  apps: [
    {
      name: 'Yohaku',
      script: './server.js',
      cwd: __dirname,
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '180M',
      env: {
        NODE_ENV: 'production',
        HOSTNAME: '0.0.0.0',
        PORT: process.env.PORT || 2323,
        BASE_URL: 'https://tangyuan0821.cn',
        API_URL: 'https://tangyuan0821.cn/api/v2',
        NEXT_PUBLIC_API_URL: 'https://tangyuan0821.cn/api/v2',
        NEXT_PUBLIC_GATEWAY_URL: 'https://tangyuan0821.cn',
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true,
    },
  ],
}

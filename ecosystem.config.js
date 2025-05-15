module.exports = {
    apps: [
        {
            name: "lalonstore",
            script: "node_modules/next/dist/bin/next",
            args: "start", // runs: pnpm start  →  next start
            exec_mode: "fork",
            env: {
                NODE_ENV: "production",
                PORT: 3000, // change if you want a different port
            },
        },
    ],
};

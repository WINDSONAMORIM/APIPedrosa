declare namespace Express {
  interface Request {
    user: {
      id: string;
      profile: string;
    };
  }
}
// add --transpile-only no package.json
// "dev": "ts-node-dev --transpile-only ./src/server.ts",

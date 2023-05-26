
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/graphql",
  documents: ["src/**/*.tsx", "src/**/*.ts", "src/graphql/**/*.graphqls"],
  generates: {
    "./src/__generated__/graphql.ts": {
     // preset: "client", dont use with plugin otherwise it will generate duplicate types
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      }
    },
  },
};

export default config;

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import del from 'rollup-plugin-delete'
// import { terser } from "rollup-plugin-terser";
import json from '@rollup/plugin-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      json(),
      resolve({ browser: true }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      // terser(),
    ],
    external: ["react", "react-dom", "@mui/material", "@mui/icons-material", "@emotion/react", "@emotion/styled"]
  },
  {
    input: "src/icons/index.ts",
    output: [
      {
        file: "dist/cjs/icons.js",
        format: "cjs",
        sourcemap: false,
      },
      {
        file: "dist/esm/icons.js",
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      peerDepsExternal(),
      json(),
      resolve({ browser: true }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss(),
      // terser(),
    ],
    external: ["react", "react-dom", "@mui/material", "@mui/icons-material", "@emotion/react", "@emotion/styled"]
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/],
  },
  {
    input: "dist/esm/types/icons/index.d.ts",
    output: [{ file: "dist/icons.d.ts", format: "esm" }],
    plugins: [dts(), del({ targets: 'dist/**/types', hook: 'buildEnd' })],
    external: [/\.css$/],
  },
];
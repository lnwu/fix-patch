import typescript from "@rollup/plugin-typescript";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: "src/index.ts",
  output: [
    {
      dir: "lib/es",
      preserveModules: true,
      format: "es",
      sourcemap: true,
    },
    {
      dir: "lib/cjs",
      preserveModules: true,
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [typescript({ outputToFilesystem: true })],
};

export default config;

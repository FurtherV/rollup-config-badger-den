import cssPlugin from "rollup-plugin-postcss";
import postcssPresetEnv from "postcss-preset-env";
import merge from 'rollup-merge-config';
import postcssImport from 'postcss-import';

const defaultConfig = {
  inject: false, // Don't inject CSS into <HEAD>
  extract: true,
  modules: false,
  plugins: [
    // Postcss plugins to use
    postcssImport(),
    postcssPresetEnv({
      autoprefixer: {}
    }),
  ],
  use: ["sass", "less"], // Use sass / dart-sass and less
  sourceMap: false,
  minimize: false,
}

export default (config = {}, plugin = cssPlugin) => {
  const finalConfig = merge(defaultConfig, config);
  return plugin(finalConfig);
}

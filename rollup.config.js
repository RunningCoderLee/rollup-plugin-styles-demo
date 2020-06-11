import styles from 'rollup-plugin-styles'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  preserveModules: true,
  output: [
    {
      dir: 'build/es',
      format: 'es',
      assetFileNames: '[name][extname]',
      chunkFileNames: '[name].js',
      entryFileNames: '[name].js',
      minifyInternalExports: false,
    },
  ],
  plugins: [
    styles({
      mode: 'extract',
      sass: {
        impl: 'sass',
        fibers: require('fibers'),
      },
      modules: {
        mode: 'global',
      },
    }),
    typescript({
      typescript: require('ttypescript'),
      tsconfigDefaults: {
        compilerOptions: {
          plugins: [
            { transform: 'typescript-transform-paths' },
            {
              transform: 'typescript-transform-paths',
              afterDeclarations: true,
            },
          ],
        },
      },
      tsconfig: 'tsconfig.json',
    }),
  ],
}

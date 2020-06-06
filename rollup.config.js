import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import coffeescript from 'rollup-plugin-coffee-script';
import {terser} from 'rollup-plugin-terser';

let plugins = [
    coffeescript(),

    // so Rollup can find externals
    resolve({extensions: ['.js', '.coffee'], preferBuiltins: true}),

    // so Rollup can convert externals to an ES module
    commonjs(),
];

// minify only in production mode
if (process.env.NODE_ENV === 'production') {
    plugins.push(
        // minify
        terser({
            ecma: 2018,
            warnings: true,
            compress: {
                drop_console: false,
            },
        })
    );
}

export default [
    {
        input: 'src/main.coffee',
        output: [
            {
                dir: "lib",
                format: 'cjs',
                sourcemap: true,
            },
        ],
        plugins: plugins,
    },    {
        input: 'src/main.coffee',
        output: [
            {
                file: "lib/main.es.js",
                format: 'es',
                sourcemap: true,
            },
        ],
        plugins: plugins,
    },
    {
        input: 'spec/select-list-view-spec.coffee',
        output: [
            {
                file: "spec/select-list-view-spec.js",
                format: 'cjs',
                sourcemap: true,
            },
        ],
        plugins: plugins
    },
];

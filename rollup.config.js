import ractive from 'rollup-plugin-ractive';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

const plugins = [ ractive() ];
if ( process.env.production ) plugins.push( buble(), uglify() );

export default {
	entry: 'src/app.js',
	dest: 'bundle.js',
	plugins,
	sourceMap: true,
	format: 'iife',
	external: [ 'ractive' ]
};

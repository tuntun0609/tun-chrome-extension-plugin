import { Compiler } from 'webpack';
import { resolve } from 'path';

interface ChromeExtensionPluginInterface {
	options: any;
	root: string;
	src: string;
	dist: string;
}

interface ChromeExtensionPluginOptions {
	test?: string;
}

const resolvePath = (relativePath: string) => resolve(process.cwd(), relativePath);

class ChromeExtensionPlugin implements ChromeExtensionPluginInterface {
	options: any;
	root: string;
	src: string;
	dist: string;

	private PLUGIN_NAME = 'ChromeExtensionPlugin';
	constructor(src = 'src', dist = 'dist', option: ChromeExtensionPluginOptions) {
		this.options = option;
		this.root = process.cwd();
		this.src = resolvePath(src);
		this.dist = resolvePath(dist);
	}
	apply(compiler: Compiler) {
		compiler.hooks.emit.tap(this.PLUGIN_NAME, (_compilation) => {
			console.log(this);
		});
	}
}

export { ChromeExtensionPlugin };

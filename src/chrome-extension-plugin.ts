import { Compiler } from 'webpack';

interface ChromeExtensionPluginInterface {
	options: any;
}

class ChromeExtensionPlugin implements ChromeExtensionPluginInterface {
	options: any;
	constructor(option: any) {
		this.options = option;
	}
	apply(_compiler: Compiler) {
		console.log('apply');
	}
}

export default ChromeExtensionPlugin;

module.exports = {
	pwa: {
		name: 'Boobagarre',
		themeColor: '#000000',
		msTileColor: '#FFF',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',
		manifestOptions: {
			display: 'fullscreen',
		},
		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			swSrc: 'src/service-worker.js'
		}
	}
}

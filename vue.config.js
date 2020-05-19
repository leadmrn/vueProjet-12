module.exports = {
	pwa: {
		name: 'vueProjetG12',
		themeColor: '#000000',
		msTileColor: '#FFF',
		appleMobileWebAppCapable: 'yes',
		appleMobileWebAppStatusBarStyle: 'black',
		manifestOptions: {
			display: 'fullscreen'
		},
		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			swSrc: 'src/service-worker.js'
		}
	}
}

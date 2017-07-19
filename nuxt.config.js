module.exports = {
	// Headers of the page
	head: {
		title:
			'Automated Web UI Testing Tool, Free - Lemonce Editor, Open Source & Enterprise Versions Are Available.',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content:
					'UI Testing Tool For Web Applications: Lemonce Editor is a professional automation testing tool for web applications. Open Source and Free versions are available.'
			},
			{
				hid: '',
				name: 'keyword',
				content:
					'web ui testing tool, web application testing tool, automated web ui testing tool, automated web application testing tool, automated testing tools for web applications, gui testing tool, web ui testing, free web ui testing tools, free automation testing tools, web automation testing tools, regression testing tools, selenium, free, open source, selenium alternatives,alternative to selenium,automation testing tools, cross browser testing, web application testing, browser testing tools, browser testing, browser automation'
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	// Customize the progress-bar color
	loading: { color: '#3B8070' },
	css: [
		'bootstrap/dist/css/bootstrap.css',
		{ src: '~assets/less/index.less', lang: 'less' }
	]
};

const projects = [
	{ title: 'Drifting', id: 'drifting' },
	{ title: 'LG Wonderbox', id: 'lg' },
	{ title: 'Metro Times', id: 'paxahauMetroTimes' },
	{ title: 'Max Promo', id: 'max' },
	{ title: 'Reimagine Life', id: 'reimagineLifeFoundation' },
	{ title: 'Nothing', id: 'nothing3DBrand' },
	{ title: 'Keyboards', id: 'mechKeeb' },
];

const data = {
	lg: [
		{ type: 'h1', content: 'LG Wonderbox Showcase 2023' },
		{ type: 'h6', content: 'SCENE SYNOPSIS' },
		{
			type: 'p',
			content: "Our submission to the 2023 LG Wonderbox Showcase was one of three selected to light up Times Square in December 2023. We built a custom 3D projection workflow to prepare our work for the biggest screen it's ever been on. The Scene team saw it live in New York and shared the process on The Drew Barrymore Show.",
		},
		{ type: 'ul', content: [`<img src="./assets/client_logos/lg.svg"> In Partnership with LG`, `December 2023`] },
		{ type: 'video', src: 'LifePaths Reel Video.mp4' },
		{ type: 'video', src: 'LG_Render_ProRes_CC.mp4' },
		{ type: 'img', src: 'PXL_20231213_203338472.MP.webp' },
		{ type: 'img', src: 'IMG_6151.webp' },
	],

	drifting: [
		{ type: 'h1', content: 'Drifting' },
		{ type: 'h6', content: 'SCENE SYNOPSIS' },
		{
			type: 'p',
			content: 'We brought our VFX magic and love for sci-fi together in Drifting, a mini-series directed by Elliot Walker. From teleportation effects to fully built and rendered 3D scenes, we pushed the boundaries of CGI in shortform storytelling.',
		},
		{ type: 'ul', content: [`<img src="./assets/client_logos/infiniteelliott.svg"> Crafted for <a href='https://tiktok.com/@infiniteelliott' target="_blank" >@infiniteelliott</a>`, `January 2024`] },
		{ type: 'video', src: 'Episode_1.mp4' },
		{ type: 'video', src: 'Episode_2.mp4' },
		{
			type: 'h2',
			content: 'Artifacts',
		},
		{
			type: 'p',
			content: 'Spacecraft modeled, textured, and rigged custom for the aethesthic of Drifting',
		},
		{ type: 'video', src: 'EP2_Intro.mp4' },
		{ type: 'video', src: 'EP2_Final_Shot.mp4' },
		{ type: 'img', src: 'space_station.webp' },
	],

	max: [
		{ type: 'h1', content: 'Max Promo' },
		{ type: 'h6', content: 'SCENE SYNOPSIS' },
		{
			type: 'p',
			content: 'Scene brought the worlds of Dune and Jurassic World to life in a short-form promo for Max (formerly HBO Max). Partnering with TikTok creator Elliott Walker, we served as the sole VFX studio on the project.',
		},
		{ type: 'ul', content: [`<img src="./assets/client_logos/max.svg"> Crafted for Max`, `<img src="./assets/client_logos/infiniteelliott.svg"> In Partnership with <a href='https://tiktok.com/@infiniteelliott' target="_blank" >@infiniteelliott</a>`, `April 2024`] },
		{ type: 'video', src: 'main.mp4' },
		{ type: 'video', autoplay: true, src: 'JurassicWorldThumper.mp4' },
	],

	paxahauMetroTimes: [
		{ type: 'h1', content: 'Movement Festival Metro Times Cover' },
		{ type: 'h6', content: 'SCENE SYNOPSIS' },
		{
			type: 'p',
			content: 'Scene teamed up with Paxahau to create a promotional visual for Movement, Detroit’s iconic techno and electronic music festival. Our abstract reimagining of the Dodge Fountain was published in the May 22, 2024 issue of the Detroit Metro Times.',
		},
		{ type: 'ul', content: [`<img src="./assets/client_logos/metrotimes.svg"> Crafted for <a href='https://www.metrotimes.com/detroit/IssueArchives?issue=36331645' target="_blank" >Detroit Metro Times</a>`, `<img src="./assets/client_logos/paxahau.svg"> In Partnership with Paxahau`, `May 2024`] },
		{ type: 'video', autoplay: true, src: 'movment_metrotimes.mp4' },
		{ type: 'img', src: 'Mouvement MetroTimes Update 2.webp' },
		{ type: 'img', src: 'MetroTimesCoverMockup.webp' },
	],

	reimagineLifeFoundation: [
		{ type: 'h1', content: 'Reimagine Life Foundation' },
		{ type: 'h6', content: 'SCENE SYNOPSIS' },
		{
			type: 'p',
			content: 'Scene had the opportunity to work with the Reimagine Life Foundation to consult on strategy and create a new logo and brand identity system. The non-profit supports individuals navigating life-altering disabilities. Our intentional solution depicts movement inward towards the supportive community they help foster and champion.',
		},
		{ type: 'ul', content: [`<img src="./assets/client_logos/reimaginelife.svg"> Crafted for Reimagine Life Foundation`, `September 2024`] },
		{ type: 'img', src: 'ReimagineLife_BrandGuidelines4_1.webp' },
		{ type: 'img', src: 'ReimagineLife_BrandGuidelines_3.webp' },
		{ type: 'img', src: 'ReimagineLife_BrandGuidelines_2.webp' },
	],

	nothing3DBrand: [
		{ type: 'h1', content: 'Nothing Story' },
		{ type: 'h6', content: 'SCENE SYNOPSIS' },
		{
			type: 'p',
			content: 'Scene developed a brand video for Nothing, the tech company built on defying convention. After modeling a Nothing Phone (2) from scratch, we wanted to celebrate what made the device uniquely beautiful. With custom script, music, and sound design, our video reflects the brand’s rebellious spirit.',
		},
		{ type: 'ul', content: [`Internal Venture`, `December 2023`] },
		{ type: 'video', src: 'brandvideo.mp4' },
		{ type: 'img', src: 'nothing2.webp' },
		{ type: 'img', src: 'nothing3.webp' },
		{ type: 'img', src: 'nothing9.webp' },
		{ type: 'video', autoplay: true, src: 'Nothing 12.mp4' },
	],

	mechKeeb: [
		{ type: 'h1', content: 'Mechanical Keyboard Community' },
		{ type: 'h6', content: 'SCENE SYNOPSIS' },
		{
			type: 'p',
			content: 'Scene created a 3D intro and hype video for the mechanical keyboard online community, celebrating the culture and passion behind the hobby. Led by our in-house keyboard enthusiast, Julian, this project brings the community’s unique energy to life.',
		},
		{ type: 'ul', content: [`Internal Venture`, `December 2023`] },
		{ type: 'video', src: 'keeb_final.mp4' },
		{ type: 'img', src: '6.webp' },
		{ type: 'img', src: '7.webp' },
		{ type: 'img', src: '8.webp' },
		{ type: 'img', src: '9.webp' },
		{ type: 'img', src: '11.webp' },
	],
};

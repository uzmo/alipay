export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-867deea7.js","imports":["_app/immutable/start-867deea7.js","_app/immutable/chunks/index-44c6832b.js","_app/immutable/chunks/singletons-1a43d08d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/pay",
				pattern: /^\/api\/pay\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/api/pay/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
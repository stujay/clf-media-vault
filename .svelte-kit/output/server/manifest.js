export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.UYmoARDX.js",app:"_app/immutable/entry/app.DAez84wJ.js",imports:["_app/immutable/entry/start.UYmoARDX.js","_app/immutable/chunks/EDPLhndW.js","_app/immutable/chunks/B9lt_pYx.js","_app/immutable/chunks/BfudYDrc.js","_app/immutable/entry/app.DAez84wJ.js","_app/immutable/chunks/BfudYDrc.js","_app/immutable/chunks/B9lt_pYx.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CJGR1-0h.js","_app/immutable/chunks/Bh5TALtV.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

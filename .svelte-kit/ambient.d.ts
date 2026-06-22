
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const exec_mode: string;
	export const vizion_running: string;
	export const NODE: string;
	export const OPENCLAW_GATEWAY_PORT: string;
	export const version: string;
	export const INIT_CWD: string;
	export const NODE_APP_INSTANCE: string;
	export const GWS_DEFAULT_EMAIL: string;
	export const OPENCLAW_CLI: string;
	export const windowsHide: string;
	export const unique_id: string;
	export const axm_monitor: string;
	export const node_args: string;
	export const instances: string;
	export const DISCORD_BOT_TOKEN: string;
	export const TMPDIR: string;
	export const npm_config_global_prefix: string;
	export const OPENCLAW_SERVICE_MANAGED_ENV_KEYS: string;
	export const GOOGLE_WORKSPACE_CLI_KEYRING_BACKEND: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const axm_dynamic: string;
	export const npm_config_local_prefix: string;
	export const restart_time: string;
	export const name: string;
	export const USER: string;
	export const OPENCLAW_SERVICE_KIND: string;
	export const OPENAI_API_KEY: string;
	export const npm_config_globalconfig: string;
	export const automation: string;
	export const merge_logs: string;
	export const pm_cwd: string;
	export const SSH_AUTH_SOCK: string;
	export const status: string;
	export const JAY_GOOGLE_API_KEY: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const pm_id: string;
	export const npm_execpath: string;
	export const username: string;
	export const pm_err_log_path: string;
	export const kill_retry_time: string;
	export const autorestart: string;
	export const OPENCLAW_SYSTEMD_UNIT: string;
	export const OPENCLAW_SERVICE_MARKER: string;
	export const exec_interpreter: string;
	export const OPENCLAW_LAUNCHD_LABEL: string;
	export const GOOGLE_API_KEY: string;
	export const pm_uptime: string;
	export const GWS_PATH: string;
	export const PATH: string;
	export const PM2_HOME: string;
	export const filter_env: string;
	export const npm_package_json: string;
	export const autostart: string;
	export const BRAVE_API_KEY: string;
	export const _: string;
	export const npm_config_userconfig: string;
	export const npm_config_init_module: string;
	export const GOOGLE_FREE_TIER_API_KEY: string;
	export const npm_command: string;
	export const JG_TEST_GG_KEY: string;
	export const PWD: string;
	export const node_version: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const pm_exec_path: string;
	export const npm_package_name: string;
	export const GOOGLE_WORKSPACE_EMAIL: string;
	export const OPENCLAW_SHELL: string;
	export const npm_config_npm_version: string;
	export const km_link: string;
	export const NODE_USE_SYSTEM_CA: string;
	export const XPC_FLAGS: string;
	export const SUPABASE_URL: string;
	export const OPENCLAW_SERVICE_VERSION: string;
	export const watch: string;
	export const npm_config_node_gyp: string;
	export const npm_package_version: string;
	export const vizion: string;
	export const XPC_SERVICE_NAME: string;
	export const TELEGRAM_BOT_TOKEN: string;
	export const SHLVL: string;
	export const HOME: string;
	export const PM2_USAGE: string;
	export const instance_var: string;
	export const args: string;
	export const OPENCLAW_GATEWAY_TOKEN: string;
	export const axm_actions: string;
	export const created_at: string;
	export const SUPABASE_SERVICE_ROLE_KEY: string;
	export const npm_config_cache: string;
	export const LOGNAME: string;
	export const axm_options: string;
	export const npm_lifecycle_script: string;
	export const exit_code: string;
	export const env: string;
	export const namespace: string;
	export const pm_out_log_path: string;
	export const pm_pid_path: string;
	export const npm_config_user_agent: string;
	export const treekill: string;
	export const OPENCLAW_PATH_BOOTSTRAPPED: string;
	export const OSLogRateLimit: string;
	export const unstable_restarts: string;
	export const GOOGLE_API_KEY_BU: string;
	export const OPENCLAW_WINDOWS_TASK_NAME: string;
	export const NODE_EXTRA_CA_CERTS: string;
	export const npm_node_execpath: string;
	export const npm_config_prefix: string;
	export const pmx: string;
	export const NODE_ENV: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		exec_mode: string;
		vizion_running: string;
		NODE: string;
		OPENCLAW_GATEWAY_PORT: string;
		version: string;
		INIT_CWD: string;
		NODE_APP_INSTANCE: string;
		GWS_DEFAULT_EMAIL: string;
		OPENCLAW_CLI: string;
		windowsHide: string;
		unique_id: string;
		axm_monitor: string;
		node_args: string;
		instances: string;
		DISCORD_BOT_TOKEN: string;
		TMPDIR: string;
		npm_config_global_prefix: string;
		OPENCLAW_SERVICE_MANAGED_ENV_KEYS: string;
		GOOGLE_WORKSPACE_CLI_KEYRING_BACKEND: string;
		COLOR: string;
		npm_config_noproxy: string;
		axm_dynamic: string;
		npm_config_local_prefix: string;
		restart_time: string;
		name: string;
		USER: string;
		OPENCLAW_SERVICE_KIND: string;
		OPENAI_API_KEY: string;
		npm_config_globalconfig: string;
		automation: string;
		merge_logs: string;
		pm_cwd: string;
		SSH_AUTH_SOCK: string;
		status: string;
		JAY_GOOGLE_API_KEY: string;
		__CF_USER_TEXT_ENCODING: string;
		pm_id: string;
		npm_execpath: string;
		username: string;
		pm_err_log_path: string;
		kill_retry_time: string;
		autorestart: string;
		OPENCLAW_SYSTEMD_UNIT: string;
		OPENCLAW_SERVICE_MARKER: string;
		exec_interpreter: string;
		OPENCLAW_LAUNCHD_LABEL: string;
		GOOGLE_API_KEY: string;
		pm_uptime: string;
		GWS_PATH: string;
		PATH: string;
		PM2_HOME: string;
		filter_env: string;
		npm_package_json: string;
		autostart: string;
		BRAVE_API_KEY: string;
		_: string;
		npm_config_userconfig: string;
		npm_config_init_module: string;
		GOOGLE_FREE_TIER_API_KEY: string;
		npm_command: string;
		JG_TEST_GG_KEY: string;
		PWD: string;
		node_version: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		pm_exec_path: string;
		npm_package_name: string;
		GOOGLE_WORKSPACE_EMAIL: string;
		OPENCLAW_SHELL: string;
		npm_config_npm_version: string;
		km_link: string;
		NODE_USE_SYSTEM_CA: string;
		XPC_FLAGS: string;
		SUPABASE_URL: string;
		OPENCLAW_SERVICE_VERSION: string;
		watch: string;
		npm_config_node_gyp: string;
		npm_package_version: string;
		vizion: string;
		XPC_SERVICE_NAME: string;
		TELEGRAM_BOT_TOKEN: string;
		SHLVL: string;
		HOME: string;
		PM2_USAGE: string;
		instance_var: string;
		args: string;
		OPENCLAW_GATEWAY_TOKEN: string;
		axm_actions: string;
		created_at: string;
		SUPABASE_SERVICE_ROLE_KEY: string;
		npm_config_cache: string;
		LOGNAME: string;
		axm_options: string;
		npm_lifecycle_script: string;
		exit_code: string;
		env: string;
		namespace: string;
		pm_out_log_path: string;
		pm_pid_path: string;
		npm_config_user_agent: string;
		treekill: string;
		OPENCLAW_PATH_BOOTSTRAPPED: string;
		OSLogRateLimit: string;
		unstable_restarts: string;
		GOOGLE_API_KEY_BU: string;
		OPENCLAW_WINDOWS_TASK_NAME: string;
		NODE_EXTRA_CA_CERTS: string;
		npm_node_execpath: string;
		npm_config_prefix: string;
		pmx: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}

import { baseUrl } from '../baseUrl'

/**
 * Default request configuration.
 */
export const defaultConfig: Record<string, string> = {
	'Content-type': 'application/json',
	'Access-Control-Allow-Origin': `${baseUrl}`,
	'Cache-Control': 'no-cache',
}

/**
 * Multipart request configuration.
 */
export const multipartConfig: Record<string, string> = {
	'Content-type': 'multipart/form-data',
	'Cache-Control': 'no-cache',
}

export const bearerConfig: any = {
	'Content-type': 'application/json',
	'Cache-Control': 'no-cache',
}

export const downloadConfig: any = {
	responseType: 'arraybuffer', // Important
	headers: {
		'Content-Type': 'application/gzip',
	},
}

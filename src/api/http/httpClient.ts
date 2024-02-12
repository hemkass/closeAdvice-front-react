import { AxiosResponse } from 'axios'

import axiosIns from '@plugins/axios'

/**
 * Http client.
 */
export const HttpClient = {
	/**
	 * Sends a GET HTTP request.
	 * @param {string} url Target URL.
	 * @param {*} config Request configuration.
	 */
	get: (url: string, config: Record<string, string>): Promise<AxiosResponse> =>
		axiosIns.get(url, config),

	/**
	 *  Sends a POST HTTP request.
	 * @param {String} url Target URL
	 * @param {*} data Data to post.
	 * @param {*} config Request configuration.
	 */
	post: (
		url: string,
		body: Object,
		config: Record<string, string>
	): Promise<AxiosResponse> => axiosIns.post(url, body, config),

	/**
	 *  Sends a PUT HTTP request.
	 * @param {String} url Target URL
	 * @param {*} data Data to put.
	 * @param {*} config Request configuration.
	 */
	put: (
		url: string,
		body: Object,
		config: Record<string, string>
	): Promise<AxiosResponse> => axiosIns.put(url, body, config),

	/**
	 *  Sends a PATCH HTTP request.
	 * @param {String} url Target URL
	 * @param {*} data Data to put.
	 * @param {*} config Request configuration.
	 */
	patch: (
		url: string,
		body: Object,
		config: Record<string, string>
	): Promise<AxiosResponse> => axiosIns.patch(url, body, config),

	/**
	 *  Sends a DELETE HTTP request.
	 * @param {String} url Target URL
	 * @param {*} config Request configuration.
	 */

	delete: (
		url: string,
		config: Record<string, string>
	): Promise<AxiosResponse> => axiosIns.delete(url, config),
}

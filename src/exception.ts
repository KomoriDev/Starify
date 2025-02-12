export default class RequestException extends Error {
    constructor(
        public statusCode: number,
        public detail: string
    ) {
        super(`Request failed with status ${statusCode}: ${detail}`)
        Object.setPrototypeOf(this, RequestException.prototype)
    }
}
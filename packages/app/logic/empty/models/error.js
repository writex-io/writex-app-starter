export class EmptyError extends Error {
    constructor({ message, status, code }) {
        super();
        this.name = 'EmptyError';
        this.message = message;
        this.status = status;
        this.code = code;
    }
}

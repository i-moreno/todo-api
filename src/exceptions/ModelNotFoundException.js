class ModelNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.status = 404;
    }
}

module.exports = { ModelNotFoundException };

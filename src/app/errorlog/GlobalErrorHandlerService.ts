import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

    constructor() {
    }

    handleError(error: any) {
        console.error('This is custom error log :', error.message);
        console.log(error.message)
    }
}
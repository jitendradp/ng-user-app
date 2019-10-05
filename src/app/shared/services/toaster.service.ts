import { Injectable, ViewContainerRef } from '@angular/core';
import { ToasterService } from 'angular2-toaster';


@Injectable()
export class ToasterServices {

    vcr: ViewContainerRef;
    constructor(public toaster: ToasterService) {
    }

    showSuccess(message): void {
        this.toaster.pop('success', 'Success!', message);
    }

    showError(message?: string): void {
        this.toaster.pop('error', 'Oops!', message || 'Something went Wrong! Please try again...');
    }

    showWarning(message?: string): void {
        this.toaster.pop('warning', 'Oh Hooo..', message);
    }

    showInfo(message?: string): void {
        this.toaster.pop('info', message);
    }


}

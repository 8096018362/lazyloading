import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'app-transport',
    templateUrl: './transport.component.html'
})

export class TransportComponent {

    constructor(
        public router: Router) { }

    goBack() {
        const link = ['/course'];
        this.router.navigate(link);
    }
}
import { Component } from '@angular/core'

import { ActivatedRoute, Params, Router, RouterStateSnapshot } from '@angular/router';
@Component({
    selector: 'app-transport',
    templateUrl: './transport.component.html'
})

export class TransportComponent {
    activeBtn;
    constructor(
        private route: ActivatedRoute,
        public router: Router) {
    }

    changeOfRoutes() {
        this.activeBtn = "";
        const snapshot: RouterStateSnapshot = this.router.routerState.snapshot;
        if (snapshot.url == "/transport/global_settings") {
            this.activeBtn = "global_settings";
        } else if (snapshot.url == "/transport/vehicle") {
            this.activeBtn = "vehicle";
        } else if (snapshot.url == "/transport/engine") {
            this.activeBtn = "engine";
        } else {
            this.activeBtn = "transmission";
        }
    }
    goBack() {
        const link = ['/course'];
        this.router.navigate(link);
    }
} 
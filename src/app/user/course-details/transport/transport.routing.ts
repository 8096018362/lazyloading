import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TransportComponent } from './transport.component';


import { GlobalSettings } from './global-settings/global-settings';
import { VehicleComponent } from './vehicle/vehicle.component';
import { EngineComponent } from './engine/engine.component';
import { TransmissionComponent } from './transmission/transmission.component';

export const routes: Routes = [
    {
        path: '',
        component: TransportComponent,
        children: [
            { path: '', redirectTo: 'global_settings', pathMatch: 'full' },
            { path: 'global_settings', component: GlobalSettings },
            { path: 'vehicle', component: VehicleComponent },
            { path: 'engine', component: EngineComponent },
            { path: 'transmission', component: TransmissionComponent },
        ]
    },
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);




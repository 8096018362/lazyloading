import { NgModule } from '@angular/core';
import { routing } from './transport.routing';
import { CommonModule } from '@angular/common';  


import { TransportComponent } from './transport.component';
import { GlobalSettings } from './global-settings/global-settings';
import { VehicleComponent } from './vehicle/vehicle.component';
import { EngineComponent } from './engine/engine.component';
import { TransmissionComponent } from './transmission/transmission.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        TransportComponent,
        GlobalSettings,
        VehicleComponent,
        EngineComponent,
        TransmissionComponent
    ],
    providers: [
    ]
})
export class TransportModule {

}

import { Component } from '@angular/core';

@Component({
    selector: 'app-engine',
    templateUrl: './engine.component.html'
})

export class EngineComponent {
    gridData;
    roleTypes;
    genderTypes

    constructor() {
        this.gridData = [
            {
                dateFormatted: '23/3/2019',
                temperatureC: '12A',
                temperatureF: '21',
                summary: 'vsdghjf',
                username: 'dgfgdfg',
                mobileNumber: 4564764576476,
                role: 'Admin',
                gender: 'female',
                active: false
            },

            { dateFormatted: '23/3/2019', temperatureC: '12B', temperatureF: '21', summary: 'vsdf', username: 'sdfgsdg', mobileNumber: 4564764576477, role: 'Admin', gender: 'male', active: true },
            { dateFormatted: '26/7/2019', temperatureC: '12C', temperatureF: '23', summary: 'vbvsdxcfvcf', username: 'gsgs', mobileNumber: 4564764576478, role: 'employee', gender: 'female', active: true },
            { dateFormatted: '29/1/2019', temperatureC: '12D', temperatureF: '76', summary: 'vbvbcvsdf', username: 'gsdg', mobileNumber: 4564764576479, role: 'Admin', gender: 'male', active: true },
        ];
        this.genderTypes = [
            { name: 'male' },
            { name: 'female' },
            { name: 'other' }
        ]
        this.roleTypes = [
            { name: 'employee' },
            { name: 'Admin' }
        ]

    }

    public addGrid;
    public addGridObj = {};
    addDisplay = "none";
    
    addGridDataPopup() {
        this.selectedGridObj = {};
        this.addGridObj = {};
        this.addDisplay = 'block';
        this.addGrid = true;
    }
    addGridDataSubmit() {
        this.gridData.push(this.addGridObj)
        this.addDisplay = 'none';
        this.addGridObj = {};
    }


    selectedGridObj;
    editDisplay = "none";
    editGridData(obj) {
        this.editDisplay = 'block';
        this.selectedGridObj = JSON.parse(JSON.stringify(obj));
    }
    updateGridData() {
        this.gridData.find((grid) => {
            if (this.selectedGridObj.mobileNumber == grid.mobileNumber) {
                grid.dateFormatted = this.selectedGridObj.dateFormatted;
                grid.temperatureC = this.selectedGridObj.temperatureC;
                grid.temperatureF = this.selectedGridObj.temperatureF;
                grid.summary = this.selectedGridObj.summary;
                grid.username = this.selectedGridObj.username;
                grid.mobileNumber = this.selectedGridObj.mobileNumber;
                grid.role = this.selectedGridObj.role;
                grid.gender = this.selectedGridObj.gender;
                grid.active = this.selectedGridObj.active;
                this.editDisplay = 'none';
                this.selectedGridObj = {};
            }
        })
    }

    closeDialog() {
        this.selectedGridObj = {};
        this.addGridObj = {};
        this.addDisplay = 'none';
        this.editDisplay = 'none';
    }
}
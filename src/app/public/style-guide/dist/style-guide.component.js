"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StyleGuideComponent = void 0;
var core_1 = require("@angular/core");
var StyleGuideComponent = /** @class */ (function () {
    function StyleGuideComponent() {
        this.selectedCar2 = 'BMW';
        this.title = 'primeng-custom';
        this.value1 = 42723;
        this.value2 = 58151;
        this.value3 = 2351.35;
        this.value4 = 50;
        this.value5 = 151351;
        this.value6 = 115744;
        this.value7 = 635524;
        this.value8 = 732762;
        this.value9 = 1500;
        this.value10 = 2500;
        this.value11 = 4250;
        this.value12 = 5002;
        this.value13 = 20;
        this.value14 = 50;
        this.value15 = 10;
        this.value16 = 20;
        this.value17 = 20;
        this.value18 = 10.5;
        this.value19 = 25;
        this.value20 = 50;
        this.selectedCities = [];
        this.selectedCategories = ['Technology', 'Sports'];
        this.categories = [
            { name: 'Accounting', key: 'A' },
            { name: 'Marketing', key: 'M' },
            { name: 'Production', key: 'P' },
            { name: 'Research', key: 'R' },
        ];
        this.checked = false;
        this.teachers = [
            {
                dni: '17535089-6',
                name: 'Jose Imperatore',
                mail: 'jose.imperatore.l@gmail.com',
                state: 1
            },
            {
                dni: '17535089-6',
                name: 'Jose Imperatore',
                mail: 'jose.imperatore.l@gmail.com',
                state: 2
            },
            {
                dni: '17535089-6',
                name: 'Jose Imperatore',
                mail: 'jose.imperatore.l@gmail.com',
                state: 3
            },
        ];
        this.items = [];
        for (var i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' },
        ];
        this.cars = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' },
        ];
        this.groupedCars = [
            {
                label: 'Germany',
                value: 'germany.png',
                items: [
                    { label: 'Audi', value: 'Audi' },
                    { label: 'BMW', value: 'BMW' },
                    { label: 'Mercedes', value: 'Mercedes' },
                    { label: 'Murcia', value: 'Murcia' },
                ]
            },
            {
                label: 'USA',
                value: 'usa.png',
                items: [
                    { label: 'Cadillac', value: 'Cadillac' },
                    { label: 'Ford', value: 'Ford' },
                    { label: 'GMC', value: 'GMC' },
                ]
            },
            {
                label: 'Japan',
                value: 'japan.png',
                items: [
                    { label: 'Honda', value: 'Honda' },
                    { label: 'Mazda', value: 'Mazda' },
                    { label: 'Toyota', value: 'Toyota' },
                ]
            },
        ];
    }
    StyleGuideComponent.prototype.ngOnInit = function () {
        this.es = {
            firstDayOfWeek: 1,
            dayNames: [
                'domingo',
                'lunes',
                'martes',
                'miércoles',
                'jueves',
                'viernes',
                'sábado',
            ],
            dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
            dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
            monthNames: [
                'enero',
                'febrero',
                'marzo',
                'abril',
                'mayo',
                'junio',
                'julio',
                'agosto',
                'septiembre',
                'octubre',
                'noviembre',
                'diciembre',
            ],
            monthNamesShort: [
                'ene',
                'feb',
                'mar',
                'abr',
                'may',
                'jun',
                'jul',
                'ago',
                'sep',
                'oct',
                'nov',
                'dic',
            ],
            today: 'Hoy',
            clear: 'Borrar'
        };
        this.selectedCategories = this.categories.slice(1, 3);
    };
    StyleGuideComponent = __decorate([
        core_1.Component({
            selector: 'app-style-guide',
            templateUrl: './style-guide.component.html',
            styleUrls: ['./style-guide.component.scss']
        })
    ], StyleGuideComponent);
    return StyleGuideComponent;
}());
exports.StyleGuideComponent = StyleGuideComponent;

import { Component, OnInit } from '@angular/core'
import { Teachers } from './interfaces/teachers'
import { SelectItem } from 'primeng/api'
import { SelectItemGroup } from 'primeng/api'
import dataEs from 'src/assets/json/date.es.json'


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss'],
})
export class StyleGuideComponent implements OnInit {
  cities: City[];

  selectedCity: City;

  cars: SelectItem[];

  selectedCar1: string;

  selectedCar2: string = 'BMW';

  selectedCar3: string;

  groupedCars: SelectItemGroup[];

  items: SelectItem[];

  item: string;

  constructor() {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
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
        ],
      },
      {
        label: 'USA',
        value: 'usa.png',
        items: [
          { label: 'Cadillac', value: 'Cadillac' },
          { label: 'Ford', value: 'Ford' },
          { label: 'GMC', value: 'GMC' },
        ],
      },
      {
        label: 'Japan',
        value: 'japan.png',
        items: [
          { label: 'Honda', value: 'Honda' },
          { label: 'Mazda', value: 'Mazda' },
          { label: 'Toyota', value: 'Toyota' },
        ],
      },
    ];
  }

  title = 'primeng-custom';

  value1: number = 42723;

  value2: number = 58151;

  value3: number = 2351.35;

  value4: number = 50;

  value5: number = 151351;

  value6: number = 115744;

  value7: number = 635524;

  value8: number = 732762;

  value9: number = 1500;

  value10: number = 2500;

  value11: number = 4250;

  value12: number = 5002;

  value13: number = 20;

  value14: number = 50;

  value15: number = 10;

  value16: number = 20;

  value17: number = 20;

  value18: number = 10.5;

  value19: number = 25;

  value20: number = 50;

  date: Date;
  es: any;
  city: string;
  selectedCities: string[] = [];

  selectedCategories: any[] = ['Technology', 'Sports'];

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];

  checked = false;

  teachers: Teachers[] = [
    {
      dni: '17535089-6',
      name: 'Jose Imperatore',
      mail: 'jose.imperatore.l@gmail.com',
      state: 1,
    },
    {
      dni: '17535089-6',
      name: 'Jose Imperatore',
      mail: 'jose.imperatore.l@gmail.com',
      state: 2,
    },
    {
      dni: '17535089-6',
      name: 'Jose Imperatore',
      mail: 'jose.imperatore.l@gmail.com',
      state: 3,
    },
  ];

  ngOnInit(): void {
    this.es = dataEs
    this.selectedCategories = this.categories.slice(1, 3);
  }
}

import { Coordinate } from './coordinate';

export interface Address {
    country: String
    region: String
    commune: String
    coordinates: Coordinate
}
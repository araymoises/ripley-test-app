import { Logger } from './logger';

export interface Level extends Logger {
    name: String
    order: Number
    institution: Institution
}

// Embedded
export interface Institution {
    id: String
}

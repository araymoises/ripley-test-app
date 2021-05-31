import { Logger } from './logger';

export interface Position extends Logger {
    name: String 
    description: String 
    institution: Institution 
}

// Embedded
export interface Institution {
    id: String 
}

import { Logger } from './logger';

export interface Role extends Logger {
    institution: Institution
    name: String
    description: String
    privileges: Array<Privilege>
}

// Embedded
export interface Privilege {
    id: String
    code: String
    actions: Array<String>
}

// Embedded
export interface Institution {
    id: String
}

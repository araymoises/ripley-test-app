import { Name } from './name';

export interface Collaborator {
    person: Person
    positions: Position
    roles: Role
}

// Embedded
export interface Person {
    id: String
    dni: String
    name: Name
}

// Embedded
export interface Position {
    id: String
    name: Name
}

// Embedded
export interface Role {
    id: String
    name: Name
}

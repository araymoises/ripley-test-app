import { Level } from './level';
import { Name } from './name';
import { Logger } from './logger';

export interface Parallel extends Logger {
    code: String
    level: Level
    headTeacher: Person
}

// Embedded
export interface Person {
    id: String
    dni: String
    name: Name
}

import { Logger } from './logger';

export interface Privilege extends Logger {
    code: String
    name: String
    description: String
    actions: Array<String>
}

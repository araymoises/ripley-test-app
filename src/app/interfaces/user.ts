import { Logger } from './logger';

export interface User extends Logger {
    email: String
    password: String
}

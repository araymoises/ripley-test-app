import { Address } from './address';
import { Phone } from './phone';
import { Collaborator } from './collaborator';
import { Logger } from './logger';

export interface Institution extends Logger {
    code: String
    name: String
    address: Address
    phone: Phone
    email: String
    website: String
    settings: Setting
    collaborators: Array<Collaborator>
}

// Embedded
export interface Setting {
    timeUnit: String
}

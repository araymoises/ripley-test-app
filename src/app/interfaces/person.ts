import { User } from './user';
import { Logger } from './logger';
import { Name } from './name';
import { Address } from './address';
import { Phone } from './phone';

export interface Person extends Logger {
    dni: String
    name: Name
    about: String
    birthday: Date
    email: String
    address: Address
    phone: Phone
    interests: Array<String>
    educations: Array<String>
    institutions: Array<Institution>
    degree: String
    user: User
}

// Embedded
export interface Institution {
    id: String
    name: String
    isSelected: Boolean
}
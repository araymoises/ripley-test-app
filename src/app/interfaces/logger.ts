import { Log } from './log'

export interface Logger {
    status: String
    created: Date
    modified: Date
    logs: Array<Log>
}
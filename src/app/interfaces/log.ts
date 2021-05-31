export interface Log {
    user: User
    detail: String
    before_status: String
    after_status: String
    created: Date
}

// Embedded
export interface User {
    id: String
    name: String
    type: String
}

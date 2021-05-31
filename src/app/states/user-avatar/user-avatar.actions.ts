export class AddUserAvatar {
    static readonly type = '[TODO] Add UserAvatar';
    constructor(public payload: any = 'assets/img/person-no-image.png') {}
}

export class RemoveUserAvatar {
    static readonly type = '[TODO] Remove UserAvatar';
    constructor() {}
}

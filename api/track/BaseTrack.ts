export class BaseTrack {

    constructor(

        private _isActive   = true,
        private _isSolo     = false,
        private _isSelected = Math.random() > 0.5,

    ){}

    public active       (): void    { this._isActive    = true }
    public mute         (): void    { this._isActive    = false }
    public solo         (): void    { this._isSolo      = true }
    public unsolo       (): void    { this._isSolo      = false }
    public select       (): void    { this._isSelected  = true }
    public deselect     (): void    { this._isSelected  = false }
    public isActive     (): boolean { return this._isActive }
    public isMuted      (): boolean { return this._isActive === false }
    public isSolo       (): boolean { return this._isSolo === true }
    public isSelected   (): boolean { return this._isSelected }

}
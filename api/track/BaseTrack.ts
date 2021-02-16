import { LeeSelectable } from '../helper/LeeSelectable'

export class BaseTrack extends LeeSelectable {

    constructor(

        private _color      = `hsl(${Math.floor(Math.random() * 360)}, 50%, 40%)`,
        private _isActive   = true,
        private _isSolo     = false,

    ){ super() }

    public setColor     (color: string) : void      { this._color       = color }
    public active       ()              : void      { this._isActive    = true }
    public mute         ()              : void      { this._isActive    = false }
    public solo         ()              : void      { this._isSolo      = true }
    public unsolo       ()              : void      { this._isSolo      = false }
    public getColor     ()              : string    { return this._color }
    public isActive     ()              : boolean   { return this._isActive }
    public isMuted      ()              : boolean   { return this._isActive === false }
    public isSolo       ()              : boolean   { return this._isSolo === true }

}
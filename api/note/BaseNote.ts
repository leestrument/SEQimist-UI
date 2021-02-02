export class BaseNote {

    constructor(

        private _pitch      : number,
        private _start      : number,
        private _duration   : number,
        private _proability = 1,
        private _isSelected = false,
        private _isActive   = true,

    ){}

    public setPitch         (pitch: number)         : void      { this._pitch       = pitch }
    public setStart         (start: number)         : void      { this._start       = start }
    public setDuration      (duration: number)      : void      { this._duration    = duration }
    public setProability    (proability: number)    : void      { this._proability  = proability }
    public select           ()                      : void      { this._isSelected  = true }
    public deselect         ()                      : void      { this._isSelected  = false }
    public active           ()                      : void      { this._isActive    = true }
    public mute             ()                      : void      { this._isActive    = false }
    public getPitch         ()                      : number    { return this._pitch }
    public getStart         ()                      : number    { return this._start }
    public getDuration      ()                      : number    { return this._duration }
    public getProability    ()                      : number    { return this._proability }
    public isSelected       ()                      : boolean   { return this._isSelected }
    public isActive         ()                      : boolean   { return this._isActive }
    public isMuted          ()                      : boolean   { return this._isActive === false }

}
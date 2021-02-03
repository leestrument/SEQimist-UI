import LeeRandom from '../helper/LeeRandom'

export class BaseClip {

    constructor(

        private _color      = LeeRandom.color(),
        private _isSelected = true

    ){}

    public setColor     (color: string) : void      { this._color = color }
    public select       ()              : void      { this._isSelected = true }
    public deselect     ()              : void      { this._isSelected = false }
    public toggle       ()              : void      { this._isSelected = !this._isSelected }
    public getColor     ()              : string    { return this._color }
    public isSelected   ()              : boolean   { return this._isSelected }    

}
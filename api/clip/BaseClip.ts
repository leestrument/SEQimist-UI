import { LeeSelectable }    from '../helper/LeeSelectable'
import LeeRandom            from '../helper/LeeRandom'

export class BaseClip extends LeeSelectable {

    constructor(

        private _color = LeeRandom.color()

    ){ super(true) }

    public setColor     (color: string) : void      { this._color = color }
    public getColor     ()              : string    { return this._color }

}
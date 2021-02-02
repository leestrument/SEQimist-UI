import { LeeRange }             from '../helper/LeeRange'
import { VelocityCurveType }    from './VelocityCurveType'

export class VelocityCurve extends LeeRange {

    constructor(
        
        private _type = VelocityCurveType.Up
        
    ){ super(1, 127) }

    public setType  (type: VelocityCurveType)     : void              { this._type = type }
    public getType  ()                            : VelocityCurveType { return this._type }

}
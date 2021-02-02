export class LeeRange {

    constructor(    

        private _min        = 0,
        private _max        = 1,
        private _isActive   = false,

    ){}

    public setMin(min: number)  : void      { this._min = min }
    public setMax(max: number)  : void      { this._max = max }
    public active()             : void      { this._isActive = true }
    public deactive()           : void      { this._isActive = false }
    public getMin()             : number    { return this._min }
    public getMax()             : number    { return this._max }
    public isActive()           : boolean   { return this._isActive }

}
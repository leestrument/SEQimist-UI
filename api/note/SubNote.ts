export class SubNote {

    constructor(

        private _velocity   = 64,
        private _gate       = 1,

    ){}

    public setVelocity  (velocity: number)  : void      { this._velocity = velocity }
    public setGate      (gate: number)      : void      { this._gate = gate }
    public getVelocity  ()                  : number    { return this._velocity }
    public getGate      ()                  : number    { return this._gate }
    
}
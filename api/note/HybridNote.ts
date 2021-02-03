import { BaseNote }             from './BaseNote'
import { SubNote }              from './SubNote'
import { LeeRange }             from '../helper/LeeRange'
import { VelocityCurveType }    from '../velocity/VelocityCurveType'
import { VelocityCurve }        from '../velocity/VelocityCurve'
import LeeArray                 from '../helper/LeeArray'

const VISIBLE_SUB_NOTES_COUNT_MIN = 1
const VISIBLE_SUB_NOTES_COUNT_MAX = 32

export class HybridNote extends BaseNote {

    constructor(
        
        pitch                           : number, 
        start                           : number, 
        duration                        : number,
        private _visibleSubNoteCount    = VISIBLE_SUB_NOTES_COUNT_MIN,
        private _subNotes               = Array.from({length : VISIBLE_SUB_NOTES_COUNT_MAX }, () => new SubNote),
        private _velocityCurve          = new VelocityCurve,
        private _startRandomizer        = new LeeRange(0, 0),
        private _gateRandomizer         = new LeeRange(0, 1),
        
    ){ super(pitch, start, duration) }

    public setVisibleSubNoteCount                   (subNoteCount: number)      : void          { this._visibleSubNoteCount = subNoteCount }
    public increaseVisibleSubNoteCount              ()                          : void          { if (this._visibleSubNoteCount < VISIBLE_SUB_NOTES_COUNT_MAX) this._visibleSubNoteCount++ }
    public decreaseVisibleSubNoteCount              ()                          : void          { if (this._visibleSubNoteCount > VISIBLE_SUB_NOTES_COUNT_MIN) this._visibleSubNoteCount-- }
    public updateStartByStartRandomizer             ()                          : void          { /* call function for Max side..  */ }
    public updateSubNotesVelocityByVelocityCurve    ()                          : void          {

        const curveType = this._velocityCurve.getType()
        const min       = this._velocityCurve.getMin()
        const max       = this._velocityCurve.getMax()

        switch (curveType) {

            case VelocityCurveType.Up       : this.setSubNotesVelocityUp        (min, max); break;
            case VelocityCurveType.Down     : this.setSubNotesVelocityDown      (min, max); break;
            case VelocityCurveType.Random   : this.setSubNotesVelocityRandom    (min, max); break;
            case VelocityCurveType.Fixed    : this.setSubNotesVelocityFixed     (max);      break;

        }

    }
    public updateSubNotesGateByGateRandomizer       ()                          : void          { LeeArray.random(this._visibleSubNoteCount, this._gateRandomizer.getMin(), this._gateRandomizer.getMax(), false).forEach((gate, index) => this._subNotes[index].setGate(gate)) }
    
    public getVisibleSubNoteCount                   ()                          : number        { return this._visibleSubNoteCount }
    public getSubNotes                              ()                          : SubNote[]     { return this._subNotes }
    public getVelocityCurve                         ()                          : VelocityCurve { return this._velocityCurve }
    public getStartRandomizer                       ()                          : LeeRange      { return this._startRandomizer }
    public getGateRandomizer                        ()                          : LeeRange      { return this._gateRandomizer }

    private setSubNotesVelocityUp                   (velocityMin, velocityMax)  : void          { LeeArray.up(this._visibleSubNoteCount, velocityMin, velocityMax).forEach((velocity, index) => this._subNotes[index].setVelocity(velocity)) }
    private setSubNotesVelocityDown                 (velocityMin, velocityMax)  : void          { LeeArray.down(this._visibleSubNoteCount, velocityMin, velocityMax).forEach((velocity, index) => this._subNotes[index].setVelocity(velocity)) }   
    private setSubNotesVelocityRandom               (velocityMin, velocityMax)  : void          { LeeArray.random(this._visibleSubNoteCount, velocityMin, velocityMax).forEach((velocity, index) => this._subNotes[index].setVelocity(velocity)) }    
    private setSubNotesVelocityFixed                (velocityToFix: number)     : void          { LeeArray.fill(this._visibleSubNoteCount, velocityToFix).forEach((velocity, index) => this._subNotes[index].setVelocity(velocity)) }
    
}
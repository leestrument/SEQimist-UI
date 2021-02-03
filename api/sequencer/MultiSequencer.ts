import { PianoRoll }        from './PianoRoll'
import { StepSequencer }    from './StepSequencer'

export enum SequencerType { PianoRoll, StepSequencer }

export class MultiSequencer {

    constructor(

        private _type               = SequencerType.PianoRoll,
        private _pianoRoll          = new PianoRoll,
        private _stepSequencer      = new StepSequencer

    ){}

    public setType          (type: SequencerType)   : void          { this._type = type }
    public getType          ()                      : SequencerType { return this._type }
    public getPianoRoll     ()                      : PianoRoll     { return this._pianoRoll }
    public getStepSequencer ()                      : StepSequencer { return this._stepSequencer }
 
}
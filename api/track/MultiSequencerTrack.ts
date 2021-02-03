import { BaseTrack }        from './BaseTrack'
import { MultiSequencer }   from '../sequencer/MultiSequencer'

export class MultiSequencerTrack extends BaseTrack {

    constructor(

        private _multiSequencer = new MultiSequencer

    ){ super() }

    public getMultiSequencer(): MultiSequencer { return this._multiSequencer  }

}
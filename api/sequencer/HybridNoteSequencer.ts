import { BaseSequencer }    from './BaseSequencer'
import { HybridNote }       from '../note/HybridNote'
import LeeRandom            from '../helper/LeeRandom'

export class HybridNoteSequencer extends BaseSequencer {

    // Implemented BaseSequencer's abstract method.
    protected addNote(pitch: number, start: number, duration: number): void { this._notes[LeeRandom.id()] = new HybridNote(pitch, start, duration) }

}
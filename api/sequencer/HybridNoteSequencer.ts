import { BaseSequencer }    from './BaseSequencer'
import { HybridNote }       from '../note/HybridNote'
import LeeRandom            from '../helper/LeeRandom'

export class HybridNoteSequencer extends BaseSequencer {

    constructor(){ super() }

    // Implement BaseSequencer's abstract method.
    protected addNote(pitch: number, start: number, duration: number): void {

        const noteId = LeeRandom.id()

        this._notes[noteId] = new HybridNote(pitch, start, duration)
        
    }

}
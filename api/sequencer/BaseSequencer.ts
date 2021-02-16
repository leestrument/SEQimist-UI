import { BaseNote } from '../note/BaseNote'

/* This is abstract class, should be implemented in derived class */ 
export abstract class BaseSequencer {

    constructor(

        protected _notes    : { [id: string] : BaseNote } = {}, 
        private _gridCount  = Math.floor(Math.random() * 16) + 1,

    ){}

    public addNoteByGridIndex   (gridIndex:number, pitch: number)       : void {

        const duration  = 1 / this._gridCount 
        const start     = gridIndex * duration

        this.addNote(pitch, start, duration)

    }
    public selectNoteById       (noteId: string)                        : void { this._notes[noteId].select() }
    public selectNotesByRange   (min: number, max: number)              : void {

        for (const noteId in this._notes) {

            const noteStart = this._notes[noteId].getStart()
            const noteEnd   = noteStart + this._notes[noteId].getDuration()
            
            if (noteStart >= min && noteEnd <= max) this.selectNoteById(noteId)

        }

    }
    public selectAllNotes       ()                                      : void { for (const noteId in this._notes) this.selectNoteById(noteId) }
    public deselectNoteById     (noteId: string)                        : void { this._notes[noteId].deselect() }
    public deselectAllNotes     ()                                      : void { for (const noteId in this._notes) this.deselectNoteById(noteId) }
    public removeNoteById       (noteId: string)                        : void { delete this._notes[noteId] }
    public removeAllNotes       ()                                      : void { for (const noteId in this._notes) this.removeNoteById(noteId) }
    public removeSelectedNotes  ()                                      : void {

        for (const noteId in this._notes) {

            if (this._notes[noteId].isSelected()) this.removeNoteById(noteId)

        }        

    }
    public setGridCount         (gridCount: number)                     : void { this._gridCount = gridCount }
    
    public getNotes             ()                                      : { [id: string] : BaseNote } { return this._notes }
    public getGridCount         ()                                      : number { return this._gridCount }

    // Implement this method in derived class
    protected abstract addNote(pitch: number, start: number, duration: number): void

}
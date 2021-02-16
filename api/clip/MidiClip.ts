import { LeeSelectable }        from '../helper/LeeSelectable'
import { LeeTabs }              from '../helper/LeeTabs' 
import { MultiSequencerTrack }  from '../track/MultiSequencerTrack'

export class MidiClip extends LeeSelectable {

    constructor(

        private _visibleTrackCount          = Math.floor(Math.random() * 16) + 1,
        private _editor                     = new LeeTabs(Array.from({length : 64}, () => new MultiSequencerTrack)),

    ){ 
        
        super(true)
        this._editor.getTabs()[0].select()
    
    }

    public setVisibleTrackCount (trackCount: number)    : void                  { this._visibleTrackCount = trackCount }
    public getVisibleTrackCount ()                      : number                { return this._visibleTrackCount }
    public getEditor            ()                      : LeeTabs               { return this._editor }

}
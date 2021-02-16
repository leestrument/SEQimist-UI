import { LeeSelectable }        from '../helper/LeeSelectable'
import { MultiSequencerTrack }  from '../track/MultiSequencerTrack'

export class MidiClip extends LeeSelectable {

    constructor(

        private _visibleTrackCount          = Math.floor(Math.random() * 16) + 1,
        private _tracks                     = Array.from({length : 64}, () => new MultiSequencerTrack),
        private _lasteSelectedTrack         = 0,
        private _multipleTracksAreSelected  = false,

    ){ 
        
        super()
        this._tracks[0].select() // select first track!
    
    }

    public setVisibleTrackCount (trackCount: number)    : void                  { this._visibleTrackCount = trackCount }
    public getVisibleTrackCount ()                      : number                { return this._visibleTrackCount }
    public getTracks            ()                      : MultiSequencerTrack[] { return this._tracks }
    public getTrack             (trackIndex: number)    : MultiSequencerTrack   { return this._tracks[trackIndex] }

}
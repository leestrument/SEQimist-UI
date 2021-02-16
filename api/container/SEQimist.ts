import { LeeTabs }          from '../helper/LeeTabs'
import { MidiClip }         from '../clip/MidiClip'

export class SEQimist {

    constructor( 
        
        private _timeline = new LeeTabs(Array.from({ length: 1 }, () => new MidiClip))
        
    ){}

    public getTimeline(): LeeTabs { return this._timeline }

}
import { SimpleTimeline } from '../timeline/SimpleTimeline'

export class SEQimist {

    constructor( 
        
        private _timeline = new SimpleTimeline
        
    ){}

    public getTimeline(): SimpleTimeline { return this._timeline }

}
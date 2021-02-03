import { MidiClip } from '../clip/MidiClip'

export class SimpleTimeline {

    private _lastSelectedClip : MidiClip

    constructor(

        private _clips                      = Array.from({ length: 1 }, () => new MidiClip), 
        private _lastSelectedClipIndex      = 0,
        private _multipleClipsAreSelected   = false,

    ){ this._lastSelectedClip = this._clips[this._lastSelectedClipIndex] }

    public addClip                              ()                              : void {

        this._clips.push(new MidiClip)

        const lastClipIndex = this.getClipCount() - 1

        this.unselectOtherClips(lastClipIndex)
        this._lastSelectedClipIndex = lastClipIndex
        this._multipleClipsAreSelected = false
        this._lastSelectedClip = this._clips[this._lastSelectedClipIndex]

    }
    public selectSingleClip                     (clipIndex: number)             : void {

        this._clips[clipIndex].select()

        this.unselectOtherClips(clipIndex)
        this._lastSelectedClipIndex = clipIndex
        this._multipleClipsAreSelected = false
        this._lastSelectedClip = this._clips[this._lastSelectedClipIndex]

    }
    public selectAnotherClip                    (clipIndex: number)             : void {

        if (this._multipleClipsAreSelected) this._clips[clipIndex].toggle()
        else this._clips[clipIndex].select()

        this._lastSelectedClipIndex = clipIndex
        this.updateMultipleClipsAreSelected()

    }
    public selectMultipleClipsByRange           (clipIndex: number)             : void {

        const startIndex = Math.min(this._lastSelectedClipIndex, clipIndex)
        const endIndex = Math.max(this._lastSelectedClipIndex, clipIndex)

        this._clips.forEach((clip, clipIndex) => {

            if (clipIndex >= startIndex && clipIndex <= endIndex) clip.select()
            else clip.deselect()

        })

        this.updateMultipleClipsAreSelected()

    }
    public selectAllClips                       ()                              : void {

        this._clips.forEach(clip => clip.select())
        this._multipleClipsAreSelected = true

    }
    public removeSelectedClips                  ()                              : void {}
    public setSelectedClipsColor                (color: string)                 : void { this._clips.forEach(clip => { if (clip.isSelected()) clip.setColor(color) }) }    
    public setSelectedClipsVisibleTrackCount    (trackCount: number)            : void { this._clips.forEach(clip => { if (clip.isSelected()) clip.setVisibleTrackCount(trackCount) }) }

    public getClipCount                         ()                              : number        { return this._clips.length }
    public getClips                             ()                              : MidiClip[]    { return this._clips }    
    public getClip                              (clipIndex: number)             : MidiClip      { return this._clips[clipIndex] }
    public getLastSelectedClip                  ()                              : MidiClip      { return this._lastSelectedClip }    
    public multipleClipsAreSelected             ()                              : boolean       { return this._multipleClipsAreSelected }
    public getCurrentTrackCount                 ()                              : number        { return this._lastSelectedClip.getVisibleTrackCount() }

    private unselectOtherClips                  (clipIndexToExclude: number)    : void { this._clips.forEach((clip, clipIndex) => { if (clipIndex !== clipIndexToExclude) clip.deselect() }) }
    private updateMultipleClipsAreSelected      ()                              : void {

        let counter = 0
        let state   = false

        this._clips.forEach(clip => { if (clip.isSelected()) counter++ })

        if (counter > 1) state = true

        this._multipleClipsAreSelected = state

    }
    private updateLastSelectedClip()                                            : void { this._lastSelectedClip = this._clips[this._lastSelectedClipIndex] }

}
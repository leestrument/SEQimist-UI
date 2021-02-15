import { MidiClip } from '../clip/MidiClip'

export class SimpleTimeline {

    constructor(

        private _clips                      = Array.from({ length: 1 }, () => new MidiClip), 
        private _lastSelectedClipIndex      = 0,
        private _multipleClipsAreSelected   = false

    ){}

    public addClip(): void {

        this._clips.push(new MidiClip)

        const lastClipIndex = this._clips.length - 1

        this.unselectOtherClips(lastClipIndex)
        this._lastSelectedClipIndex = lastClipIndex

        this.updateMultipleClipsAreSelected()

    }
    public selectSingleClip(clipIndex: number): void {

        this._clips[clipIndex].select()

        this.unselectOtherClips(clipIndex)
        this._lastSelectedClipIndex = clipIndex

        this.updateMultipleClipsAreSelected()

    }
    public selectAnotherClip(clipIndex: number): void {

        if (this._multipleClipsAreSelected) this._clips[clipIndex].toggle()
        else this._clips[clipIndex].select()

        this._lastSelectedClipIndex = clipIndex

        this.updateMultipleClipsAreSelected()

    }
    public selectMultipleClipsByRange(clipIndex: number): void {

        const startIndex    = Math.min(this._lastSelectedClipIndex, clipIndex)
        const endIndex      = Math.max(this._lastSelectedClipIndex, clipIndex)

        this._clips.forEach((clip, clipIndex) => {

            if (clipIndex >= startIndex && clipIndex <= endIndex) clip.select()
            else clip.deselect()

        })

        this.updateMultipleClipsAreSelected()

    }
    public selectAllClips(): void { 
        
        this._clips.forEach(clip => clip.select()) 

        this.updateMultipleClipsAreSelected()
    
    }    
    public removeSelectedClips(): void {

        // store first selected clip index before removing elements.
        const firstClipIndex = this.getSelectedClipIndexFromBegin()

        // remove elements.
        let i = this._clips.length 

        while (i--) {

            if (this._clips[i].isSelected()) this._clips.splice(i, 1)

        }

        // select other clip
        const len = this._clips.length
        
        if (len > 0) {

            let clipIndex = firstClipIndex

            if (firstClipIndex === len) clipIndex = firstClipIndex - 1
            
            this._clips[clipIndex].select()
            this._lastSelectedClipIndex = clipIndex

        }

        this.updateMultipleClipsAreSelected()

    }
    public setSelectedClipsColor(color: string): void { 
        
        this._clips.forEach(clip => { 
            
            if (clip.isSelected()) clip.setColor(color) 
        
        }) 

    }  
    public setSelectedClipsVisibleTrackCount(trackCount: number): void { 
        
        this._clips.forEach(clip => { 
            
            if (clip.isSelected()) clip.setVisibleTrackCount(trackCount) 
        
        }) 

    }
    public getClips(): MidiClip[] { 
        
        return this._clips 
    
    }
    public getLastSelectedClip(): MidiClip {

        return this._clips[this._lastSelectedClipIndex]

    }
    public multipleClipsAreSelected(): boolean {

        return this._multipleClipsAreSelected

    }
    private updateMultipleClipsAreSelected(): void { 
        
        let counter = 0 

        this._clips.forEach(clip => { 
            
            if (clip.isSelected()) counter++ 
        
        })

        this._multipleClipsAreSelected = counter > 1  
    
    }
    private unselectOtherClips (clipIndexToExclude: number): void { 
        
        this._clips.forEach((clip, clipIndex) => { 
            
            if (clipIndex !== clipIndexToExclude) clip.deselect() 
        
        }) 

    }
    private getSelectedClipIndexFromBegin(): number {

        let clipIndex = 0

        this._clips.some((clip, index) => {

            if (clip.isSelected()) clipIndex = index

            return clip.isSelected()

        })

        return clipIndex

    }

}
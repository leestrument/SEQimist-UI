import { createStore } from 'vuex'
import { SEQimist } from '../api/container/SEQimist'

const store = createStore({

    state : ():SEQimist => new SEQimist,
    mutations : {

        // clip
        mouseDownButtonAdd              : (state: SEQimist) => state.getTimeline().addClip(),
        mouseDownClipWithoutModifier    : (state: SEQimist, clipIndex: number) => { console.log(document.getElementsByTagName('*').length); state.getTimeline().selectSingleClip(clipIndex) },
        mouseDownClipWithCommand        : (state: SEQimist, clipIndex: number) => state.getTimeline().selectAnotherClip(clipIndex),
        mouseDownClipWithShift          : (state: SEQimist, clipIndex: number) => state.getTimeline().selectMultipleClipsByRange(clipIndex),
        doubleClickClip                 : (state: SEQimist) => state.getTimeline().selectAllClips(),
        mouseDownClipColor              : (state: SEQimist, clipColor: string) => state.getTimeline().setSelectedClipsColor(clipColor),

        // tracks
        mouseDownTracks                 : (state: SEQimist, event: any) => {
            
            const target    = event.target
            const className = target.className

            if (className === 'seq-piano-roll-grid-item') {

                // get track index
                let node = target
                while (node.className !== 'seq-track') node = node.parentNode
                const trackIndex = Array.from(document.getElementsByClassName('seq-track')).indexOf(node)

                // get grid index
                const gridIndex = Array.from(target.parentNode.children).indexOf(target)
                
                // add note.
                const pianoRoll = state.getTimeline().getLastSelectedClip().getTrack(trackIndex).getMultiSequencer().getPianoRoll()
                pianoRoll.addNoteByGridIndex(gridIndex, 64)

                console.log(document.getElementsByTagName('*').length)

            }
                    
        },

        // inspector-trackcount
        mouseDownTrackCount             : (state: SEQimist, trackCount: number) => state.getTimeline().setSelectedClipsVisibleTrackCount(trackCount)

    },
    getters : {

        // clip
        clipCount       : (state) => state.getTimeline().getClipCount(),
        isSelectedClip  : (state) => (clipIndex: number) => state.getTimeline().getClip(clipIndex).isSelected(),
        clipColor       : (state) => (clipIndex: number) => state.getTimeline().getClip(clipIndex).getColor(),
        multipleClipsAreSelected : (state) => state.getTimeline().multipleClipsAreSelected(),
        lastSelectedClip : (state) => state.getTimeline().getLastSelectedClip(),

        // notes
        getPianoRollNotes : (state) => (trackIndex: number) => {

            const notes = state.getTimeline().getLastSelectedClip().getTrack(trackIndex).getMultiSequencer().getPianoRoll().getNotes()

            return notes

        }
        
    },    

})

export default store
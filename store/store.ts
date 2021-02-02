import { createStore } from 'vuex'
import { SEQimist } from '../api/container/seqimist'

const store = createStore({

    state : ():SEQimist => new SEQimist,
    mutations : {

        // clip
        mouseDownButtonAdd              : (state: SEQimist) => state.getTimeline().addClip(),
        mouseDownClipWithoutModifier    : (state: SEQimist, clipIndex: number) => state.getTimeline().selectSingleClip(clipIndex),
        mouseDownClipWithCommand        : (state: SEQimist, clipIndex: number) => state.getTimeline().selectAnotherClip(clipIndex),
        mouseDownClipWithShift          : (state: SEQimist, clipIndex: number) => state.getTimeline().selectMultipleClipsByRange(clipIndex),
        doubleClickClip                 : (state: SEQimist) => state.getTimeline().selectAllClips(),
        mouseDownClipColor              : (state: SEQimist, clipColor: string) => state.getTimeline().setSelectedClipsColor(clipColor),

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
        
    },    

})

export default store
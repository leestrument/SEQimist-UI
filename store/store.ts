import { SEQimist }     from '../api/container/SEQimist'
import { createStore }  from 'vuex'

const store = createStore({

    state : () => new SEQimist,
    getters : {

        getClips                    : (state) => state.getTimeline().getTabs(),
        multipleClipsAreSelected    : (state) => state.getTimeline().multipleTabsAreSelected(),
        getSelectedClipColor        : (state) => state.getTimeline().getLastSelectedTab().getColor(),
        getTrackCount               : (state) => state.getTimeline().getLastSelectedTab().getVisibleTrackCount(),
        getClipColor                : (state) => (clipIndex: number)  => state.getTimeline().getTabs()[clipIndex].getColor(),
        isSelectedClip              : (state) => (clipIndex: number)  => state.getTimeline().getTabs()[clipIndex].isSelected(),
        isSelectedTrack             : (state) => (trackIndex: number) => state.getTimeline().getLastSelectedTab().getEditor().getTabs()[trackIndex].isSelected(),
        hasPianoRoll                : (state) => (trackIndex: number) => state.getTimeline().getLastSelectedTab().getEditor().getTabs()[trackIndex].getMultiSequencer().hasPianoRoll(),
        getTrackColor               : (state) => (trackIndex: number) => state.getTimeline().getLastSelectedTab().getEditor().getTabs()[trackIndex].getColor(),
        getGridCount                : (state) => (trackIndex: number) => state.getTimeline().getLastSelectedTab().getEditor().getTabs()[trackIndex].getMultiSequencer().getPianoRoll().getGridCount(),
        getSlotCount                : (state) => (trackIndex: number) => state.getTimeline().getLastSelectedTab().getEditor().getTabs()[trackIndex].getMultiSequencer().getStepSequencer().getGridCount(),

    },

})

export default store
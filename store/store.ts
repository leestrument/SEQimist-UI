import { SEQimist }     from '../api/container/SEQimist'
import { createStore }  from 'vuex'

const store = createStore({

    state : () => new SEQimist,
    getters : {

        getClips                    : (state) => state.getTimeline().getClips(),
        multipleClipsAreSelected    : (state) => state.getTimeline().multipleClipsAreSelected(),
        getSelectedClipColor        : (state) => state.getTimeline().getLastSelectedClip().getColor(),
        getTrackCount               : (state) => state.getTimeline().getLastSelectedClip().getVisibleTrackCount(),
        isSelectedTrack             : (state) => (trackIndex: number) => state.getTimeline().getLastSelectedClip().getTracks()[trackIndex].isSelected(),
        hasPianoRoll                : (state) => (trackIndex: number) => state.getTimeline().getLastSelectedClip().getTracks()[trackIndex].getMultiSequencer().hasPianoRoll(),
        

    }

})

export default store
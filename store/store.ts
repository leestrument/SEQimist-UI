import { SEQimist }     from '../api/container/SEQimist'
import { createStore }  from 'vuex'

const store = createStore({

    state : () => new SEQimist,
    getters : {

        getClips : (state) => state.getTimeline().getClips()

    }

})

export default store 
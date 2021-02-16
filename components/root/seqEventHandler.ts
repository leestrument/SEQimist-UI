import { SEQimist } from '../../api/container/SEQimist'
import { MidiClip } from '../../api/clip/MidiClip'

/* helpers */
const getEventTargetId      = (e): string => {

    let target = e.target
    while (!target.hasAttribute('id')) target = target.parentNode
    
    return target.id

}
const getIndexFromId        = (id: string): number => parseInt(id.split('-').pop())

const isLeftButton          = (e): Boolean => e.button === 0
const keyIsNotPressed       = (e): Boolean => !e.ctrlKey && !e.metaKey  && !e.shiftKey  && !e.altKey
const commandKeyIsPressed   = (e): Boolean => (e.ctrlKey || e.metaKey)  && !e.shiftKey  && !e.altKey
const shiftKeyIsPressed     = (e): Boolean => e.shiftKey                && !e.ctrlKey   && !e.metaKey && !e.altKey
const optionKeyIsPressed    = (e): Boolean => e.altKey                  && !e.ctrlKey   && !e.metaKey && !e.shiftKey

enum MouseButton { Left }

/* handler */
const seqEventHandler = (seq:SEQimist, e): void => { 

    if (isLeftButton(e)) {

        const id        = getEventTargetId(e)
        const timeline  = seq.getTimeline()
        
        if      (id === 'add-clip')         timeline.AddTab(new MidiClip)
        else if (id === 'remove-clip')      timeline.removeSelectedTabs()
        else if (id.includes('clip-id')) {

            const clipIndex = getIndexFromId(id)

            if      (keyIsNotPressed(e))        timeline.selectSingleTab(clipIndex)
            else if (commandKeyIsPressed(e))    timeline.selectAnotherTab(clipIndex)
            else if (shiftKeyIsPressed(e))      timeline.selectMultipleTabsByRange(clipIndex)

        }
        else if (id.includes('track-header')) {

            const trackIndex = getIndexFromId(id)

            if      (keyIsNotPressed(e))        timeline.getLastSelectedTab().getEditor().selectSingleTab(trackIndex)
            else if (commandKeyIsPressed(e))    timeline.getLastSelectedTab().getEditor().selectAnotherTab(trackIndex)
            else if (shiftKeyIsPressed(e))      timeline.getLastSelectedTab().getEditor().selectMultipleTabsByRange(trackIndex)


        }

    }

}

export default seqEventHandler
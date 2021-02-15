import { SEQimist } from '../../api/container/SEQimist'

/* helpers */
const getEventTargetId      = (e): string => {

    let target = e.target
    while (!target.hasAttribute('id')) target = target.parentNode
    
    return target.id

}
const getClipIndex          = (clipId: string): number => parseInt(clipId.replace('clip-id-', ''))

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
        
        if      (id === 'add-clip')         timeline.addClip()
        else if (id === 'remove-clip')      timeline.removeSelectedClips()
        else if (id.includes('clip-id')) {

            const clipIndex = getClipIndex(id)

            if      (keyIsNotPressed(e))        timeline.selectSingleClip(clipIndex)
            else if (commandKeyIsPressed(e))    timeline.selectAnotherClip(clipIndex)
            else if (shiftKeyIsPressed(e))      timeline.selectMultipleClipsByRange(clipIndex)

        }


    }

}

export default seqEventHandler
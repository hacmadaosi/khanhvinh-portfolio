import { useMessageStore } from '@/src/stories/useMessageStore'
import React from 'react'

interface Props {
    _id: string,
    name: string,
}

const ConversationCardView = ({_id, name} : Props) => {
  const {setConversationId} = useMessageStore()
  return (
    <div id={_id} className='py-2 hover:bg-(--cb-hover-primary) hover:cursor-pointer px-2 rounded-sm active:scale-95'
    onClick={() => setConversationId(_id)}>
      <span className='text-sm'>{name}</span>
    </div>
  )
}

export default ConversationCardView

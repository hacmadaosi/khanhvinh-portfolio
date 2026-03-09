"use client"
import SlideBar from '@/src/components/chatbot/Home/SlideBar'
import ChatContainer from '@/src/components/chatbot/Home/ChatContainer'

const HomePage = () => {
  return (
    <div className='flex'>
      <SlideBar/>
      <ChatContainer/>

    </div>
  )
}

export default HomePage

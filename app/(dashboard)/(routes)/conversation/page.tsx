import Heading from '@/components/heading'
import { MessageCirclePlus } from 'lucide-react'

const ConversationPage = () => {
  return (
    <div>
      <Heading 
        title='Conversation'
        description='What do you want to know today?'
        icon={MessageCirclePlus}
        iconColor='text-green-700'
        bgcolor='text-green-700/30'
      />
      <div className='px-4 lg:px-8'>
        
      </div>
    </div>
  )
}

export default ConversationPage
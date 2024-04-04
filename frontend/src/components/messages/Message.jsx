const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
            <img src="https://mighty.tools/mockmind-api/content/human/44.jpg" alt="avatar" 
            />
        </div>
      </div>
      <div className={`chat-bubble bg-blue-500`}>Hi! How are you?</div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>11.11 AM</div>
    </div>
  )
}

export default Message

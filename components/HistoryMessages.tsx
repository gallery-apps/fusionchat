import React from 'react'
import { Message } from '@/lib/actions/message.actions';

export default function HistoryMessages ({ messages }: { messages: Message[] }) {
  return (
    <div >
          <h1>All Messages</h1>
          {messages.map((message, index) => (
            <div key={index}>{message.messageContent}</div>
          ))}
    </div>
  )
}

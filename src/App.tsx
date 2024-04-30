import { useState } from 'react'
import './App.css'
import CreateCommnet from './components/CreateCommnet'
import Comment from './components/Comment'

function App() {

  const [comments, setComments] =  useState<{email: string, commment: string, creatAt: string }[]>([{
    email: 'wnascx@gmail.com',
    commment: 'first comment',
    creatAt: 'Em 23/04/24, 12:16'
  }])

  return (
    <div className="flex flex-col bg-gray-500 h-screen w-full justify-center items-center" >
      <h1 className='text-3xl font-bold'>Comments section</h1>
      <CreateCommnet />
      <div className="flex">
        { comments.length > 0 ? comments.map((comment) => (
          <Comment email={comment.email} comment={comment.commment} creatAt={comment.creatAt} />
        )) : <h2 className='text-3xl text-white'>Seja o primeiro a comentar!</h2>
        }
      </div>
    </div>
  )
}

export default App

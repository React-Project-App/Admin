import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetMessages } from '../../Actions/GetMessages'
import { GetSingleMessage } from '../../Actions/GetUserMessages'
import { UpdateAnswer } from '../../Actions/UpdateAnswer'

const MessageContent = () => {
  const {Id}=useParams()
const dispatch =useDispatch()
  useEffect(() => {
    dispatch(GetMessages())
    dispatch(UpdateAnswer(Id))
  }, [])

  const contact=useSelector(state=>state.Messages)
  const [Message] =contact.filter(contact=>contact.Email===Id)
console.log(Message)
  return ( contact.length>0?(
    <div className='container mt-5'>
        <div className="row">
            <div className="col-12">
            {Message.Message.map(message=>{

              return  <p className='bg-primary w-50 rounded-pill text-white fw-bold px-4 py-2'>{message}</p>
            })}
            {/* <input name="" id="" class="form-control w-50 fw-bold rounded-pill" type="text" placeholder='Answer' />
            <button
              type="button"
              className="btn btn-primary mb-3 adp shadow-none rounded-pill mt-3"
            >
              Send
            </button>  */}
            </div>
        </div>

      
    </div>):( <div className="d-flex justify-content-center align-items-center load">
      <div className="loader"></div>
    </div>)
  )
}

export default MessageContent

import  './message.css'
import messageImg from '../../assets/images/profile.png'

export default function Message({own}) {
  return (
    <>
    <div className= {own ? "message own" : "message"}>
    
    <div className= "messageTop">
        <img className="messageImg" src={messageImg} alt="messageImg" />
        <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className="messageBottom">1 hour ago</div>
    </div>


    </>
  )
}
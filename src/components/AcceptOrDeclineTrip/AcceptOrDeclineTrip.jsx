import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
// import Navbar from '../Navbar/Navbar'

export default function AcceptOrDeclineTrip  () {

  let encodedToken = localStorage.getItem('userToken');
  const [isAccepted, setIsAccepted] = useState(false);
  const { tripId } = useParams();
  const history = useHistory();
  console.log("id"+ tripId)
  
  const [request, SetRequest] = useState({});
  useEffect(() => {
    const fetch = async () => {
      axios.get(`http://localhost:3000/v1/trips/viewtrip/`+tripId,{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then(
      (response)=>{
          console.log("sss",response.data)
          SetRequest(response.data.trip)

      }
  ).catch(
      (error)=>{
          console.log(error)

      }
  ) 
    
      
    };
    fetch();
  }, []);


  async function AcceptRequest() {
    axios.post(`http://localhost:3000/v1/requests/userAcceptTravelerRequest/${tripId}`,{isAccepted: true},{ headers: {"Authorization" : `Bearer ${encodedToken}`} }).then((response) => {
        console.log(response.message);
        setIsAccepted(true)
        history.push('/chat')
      })
      .catch((error) => {
        console.log(error);
      });
  }


    return (
        <>
        <section className="shippmentDetails">
        <div className="container">
        <div className="row">
        <div className="col-md-6 col-sm-12">
            <h3 className='text-center'>Details</h3>
            <section className="userForm">
     
     
     <form action="">
        <div className="border">
     <div className="row g-3 align-items-center group">
 <div className="col-lg-4">
   <label htmlFor="from" className="col-form-label">From : </label>
 </div>
 <div className="col-lg-8">
   <input type="text"  className="form-control " name='from' placeholder='From'  defaultValue={request.from} readOnly/>
 </div>
 
</div>

<div className="row g-3 align-items-center group">
 <div className="col-lg-4">
   <label htmlFor="to" className="col-form-label">To : </label>
 </div>
 <div className="col-lg-8">
   <input type="text"  className="form-control" name="to" placeholder='To'  defaultValue={request.to} readOnly/>
 </div>
</div>
</div>

<div className="row g-3 align-items-center group">
 <div className="col-lg-4">
   <label htmlFor="date" className="col-form-label">Date : </label>
 </div>
 <div className="col-lg-8">
   <input type="text"  className="form-control" placeholder='Date' name='date' defaultValue={request.TripDate ? request.TripDate.split('T')[0] : "" } readOnly/>
 </div> 
</div>

      </form>
     
       </section>
        </div>
   

        <div className="col-md-6 col-sm-12">
        <h3 className='text-center'>Shopping Item</h3>
        <section className="userForm">
     
     
      <form action="">
      <div className="row g-3 align-items-center group">
  <div className="col-lg-4">
    <label htmlFor="time" className="col-form-label">Trip Time : </label>
  </div>
  <div className="col-lg-8">
    <input type="text"  className="form-control " name='time' placeholder='time'  defaultValue={request.TripTime} readOnly/>
  </div>
  
</div>

<div className="row g-3 align-items-center group">
  <div className="col-lg-4">
    <label htmlFor="AvailableWeight" className="col-form-label">Available weight : </label>
  </div>
  <div className="col-lg-8">
    <input type="text"  className="form-control" name="AvailableWeight" placeholder='Available Weight'  defaultValue={request.AvailableWeight} readOnly />
  </div>
</div>



<div className="row g-3 align-items-center group">
  <div className="col-lg-4">
    <label htmlFor="unAcceptablaPackage" className="col-form-label">UnAcceptable package: </label>
  </div>
  <div className="col-lg-8">
    <input type="text"  className="form-control" name='unAcceptablaPackage' placeholder='unAcceptabla Package'  defaultValue={request.unAcceptablaPackage} readOnly />
  </div> 
</div>



       </form>
        </section>
        </div>

        <div className="col-lg-12 text-center">
   
      <button type='button' onClick={AcceptRequest}>ACCEPT REQUEST</button>
      </div>
        </div>
        </div>
        </section>
        <Footer/>
        </>
    )
  }

import React, {useState} from "react";
import {useNavigate } from "react-router-dom";
import "./addevent.css"

function Addevent(){
    const [title, setTitle] = useState("")
    const [image_url, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [category, setCategory] = useState("")
    const [start_date, setStartdate] = useState("")
    const [end_date, setEnddate] = useState("")
    const navigate = useNavigate();


    function handleCreateEvent(e){
        e.preventDefault();

        const formData = {
            title,
            image_url,
            location,
            category,
            start_date,
            end_date
        }
        console.log(formData);

        fetch("http://localhost:3000/events",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...formData})
        }).then((r)=>{
            if (r.ok) {
                r.json().then(()=>{
                    setTitle("")
                    setImage("")
                    setLocation("")
                    setCategory("")
                    setStartdate("")
                    setEnddate("")
                    navigate("/event")
                })
            }
        }) 
    }

    return(
        <>
        <div className="event-form">
            <form className="" onSubmit={handleCreateEvent}>
                <h3>Enter Event Details</h3>
                <label htmlfor="title">Title:</label>
                    <input className="event-inputs"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}

                    /><br />

                <label htmlfor="image">Image:</label>
                    <input className="event-inputs"
                    type="text"
                    placeholder="Image_url"
                    value={image_url}
                    onChange={(e)=> setImage(e.target.value)}

                    /><br />   

                <label htmlfor="location">Location:</label>
                    <input className="event-inputs"
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e)=> setLocation(e.target.value)}

                    /><br />

                    
                <label htmlfor="category">Category:</label>
                    <input className="event-inputs"
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}

                    /><br /> 


                <label htmlfor="startdate">Start-Date:</label>
                    <input className="event-inputs"
                    type="text"
                    placeholder="Start-Date"
                    value={start_date}
                    onChange={(e)=> setStartdate(e.target.value)}

                    /><br /> 


                <label htmlfor="enddate">End-Date:</label>
                    <input className="event-inputs"
                    type="text"
                    placeholder="End-Date"
                    value={end_date}
                    onChange={(e)=> setEnddate(e.target.value)}

                    /><br />    

                <button className="addevent-button" type="submit">
                    <h3>Add Event</h3>
                </button>

            </form>
            <footer >
        <div className="container">
            <p>&copy; 2023 Crowd-Tix</p>
        </div>
        </footer>

        </div>
        </>
    )
}

export default Addevent;
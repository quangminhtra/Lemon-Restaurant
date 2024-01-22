import React from 'react';
import { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuest] = useState("");
    const [occasion, setOccasions] = useState("");

    const handleSubmit=(e) => {
        e.preventDefault();
        props.SubmitForm(e);
        
    }


    const handleChange=(e)=>{
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>

                <form onSubmit={handleSubmit}>
                    <fieldset>
                         <div>
                            <label htmlFor ="book-date"> Choose Date</label>
                            <input id ="book-date" value={date} onChange={(e) => handleChange( e.target.value) }
                            type ='date' required/>
                         </div>
                        
                        {/* time  selection*/}
                        <div>
                            <label htmlFor ="book-time"> Choose Time:</label>
                            <select id=" book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a Time </option>
                                {
                                   props.availableTimes.availableTimes.map(availableTimes =>
                                     {return <option key={availableTimes}>{availableTimes}</option>})
                                } 


                            </select>
                        </div>

                        {/* guest selection*/}
                        <div>
                            <label htmlFor ="book-guests"> Choose Number of Guests:</label>
                            <input id=" book-guests" min='1' value={guests} onChange={(e) => setGuest(e.target.value)}/>

                        </div>
                            
                            {/* occasion selection*/}
                        <div>
                        <label htmlFor ="book-occasion"> Choose Occasion:</label>
                        <select id=" book-occasion" key={occasion} value ={occasion} onChange={(e) => setOccasions(e.target.value)}/>
                        <option> Birthday</option>
                        <option> Anniversary</option>
                        <option> Wedding</option>
                        </div>

                        {/*submit button */}
                    <div className='btnReceive'>
                    <input  aria-label='On-click' type='submit' value={" Make your Reservation"}/>
                    </div>

                    </fieldset>



                </form>

            </section>

        </header>
    );
};

export default BookingForm;

import React, { useEffect, useState } from "react";
import Cards from './Cards';


function Main() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showCategoryButtons, setShowCategoryButtons] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState(null);
  const [searchLocation, setSearchLocation] = useState(""); // State for the search input

  useEffect(() => {
    fetchEvents();
  }, []);


  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/events");
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

   // Function to handle the search button click
   const handleSearchClick = () => {
    // Filter events based on the search location
    const filtered = events.filter((event) => event.location.toLowerCase().includes(searchLocation.toLowerCase()));
    setFilteredEvents(filtered);
  };

  // Function to handle the back button click
  const handleBackClick = () => {
    // Clear the search input and set filteredEvents to an empty array to display all events
    setSearchLocation("");
    setFilteredEvents([]);
  };
  
  const filterEventsByCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleBookTicket = (event) => {
    setSelectedEvent(event);
    setSelectedTicketType(null);

  };

  const handleBuyTicket = (ticketType) => {
    if (selectedEvent) {
      const updatedEvents = events.map((event) => {
        if (event.id === selectedEvent.id) {
          return {
            ...event,
            [`${ticketType}_tickets_available`]: event[`${ticketType}_tickets_available`] - 1,
          };
        }
        return event;
      });

      // Ask for user confirmation before proceeding with the purchase
      const ticketTypeName = ticketType === "regular" ? "Regular" : "VIP";
      const isConfirmed = window.confirm(`Are you sure you want to buy a ${ticketTypeName} ticket?`);
      if (isConfirmed) {
        setEvents(updatedEvents);
        setSelectedTicketType(null);
      
      }
    }
  };
  const eventsToDisplay = filteredEvents.length > 0 ? filteredEvents : (selectedCategory === "All" ? events : events.filter((event) => event.category === selectedCategory));

  return (
    <div className="main-container">
      <div className="container">

<div className='search_bar'>
          <input
            className="search_input"
            type="text"
            placeholder="Search events by location"
            value={searchLocation}
            onChange={(event) => setSearchLocation(event.target.value)}
          />
          <button className="search_button" onClick={handleSearchClick}>
            Search
          </button>
          <button className="search_button" onClick={handleBackClick}>
            Back
          </button>
        </div>

        {!selectedEvent && ( // Show "Show Categories" button only when no ticket is selected
        <div className="show-categories">
          <button className="search_button" onClick={() => setShowCategoryButtons(!showCategoryButtons)}>
            {showCategoryButtons ? "Hide Categories" : "Show Categories"}
          </button>
          </div>
        )}

        {showCategoryButtons && (
          <div className="category-list">
            <button className="search_button" onClick={() => filterEventsByCategory("All")}>All</button>
            <button className="search_button" onClick={() => filterEventsByCategory("Entertainment")}>Entertainment</button>
            <button className="search_button" onClick={() => filterEventsByCategory("Sport")}>Sports</button>
            <button className="search_button" onClick={() => filterEventsByCategory("Food")}>Food</button>
          </div>
        )}

        {selectedEvent ? (
          <div className="ticket-details">
            <h1>Ticket Details</h1>
            <Cards 
              title={selectedEvent.title}
              image_url={selectedEvent.image_url}
              category={selectedEvent.category}
              location={selectedEvent.location}
              start_date={selectedEvent.start_date}
              end_date={selectedEvent.end_date}
              regular_tickets_available={selectedEvent.regular_tickets_available}
              vip_tickets_available={selectedEvent.vip_tickets_available}
            /> 

            {/* Display ticket price based on the selected ticket type */}
            {selectedTicketType && (
              <h1>
                Ticket Price: {selectedTicketType === "regular" ? "3000ksh" : "7500ksh"}
              </h1>
            )}

            <button className="button" onClick={() => setSelectedEvent(null)}>Back to Events</button>
            <div className="button-container">
              {/* Button to buy regular ticket */}
              <button className="button" onClick={() => setSelectedTicketType("regular")}>
                Regular Ticket
              </button>

              {/* Button to buy VIP ticket */}
              <button className="button" onClick={() => setSelectedTicketType("vip")}>
                VIP Ticket
              </button>

              {/* Button to proceed with the selected ticket type */}
              {selectedTicketType && (
                <button className="button" onClick={() => handleBuyTicket(selectedTicketType)}>
                  Buy Ticket
                </button>
              )}
            </div>
          </div>
        ) : eventsToDisplay.length === 0 ? (
          <div>No events found.</div>
        ) : (
          eventsToDisplay.map((event) => (
            <div key={event.id}>
              <Cards
                title={event.title}
                image_url={event.image_url}
                category={event.category}
                location={event.location}
                start_date={event.start_date}
                end_date={event.end_date}
                onClick={() => handleBookTicket(event)}
              />
              <button className="button" onClick={() => handleBookTicket(event)}>Book Ticket</button>
            </div>
          ))
        )}
      </div>

      {/* Ticket information and buttons on the right */}
      {selectedEvent && (
        <div className="right-section">
          {selectedTicketType === "regular" && (
            <div className="ticket-info">
              <h2>Why is a Regular Ticket better for you?</h2>
  <p>
    <span>
      Regular tickets offer several benefits to event attendees. First and foremost,
      regular tickets provide an affordable and budget-friendly option, making events
      accessible to a broader audience. They are often priced lower than premium options
      like VIP tickets, making them an ideal choice for those who want to enjoy the event
      without breaking the bank.
    </span>
    <span>
      Regular ticket holders still get to experience the main attractions and performances,
      ensuring they don't miss out on the core event experience. Additionally, regular tickets
      are perfect for attendees who prefer a more laid-back and casual atmosphere, as they can
      enjoy the event without any additional perks or exclusive privileges.
    </span>
    <span>
      Overall, regular tickets strike a balance between cost-effectiveness and an enjoyable
      event experience, making them a popular choice for many event-goers.
    </span>
  </p>
  </div>
 )}

{selectedTicketType === "vip" && (
            <div className="ticket-info">
              <h2>Why is a VIP Ticket better for you?</h2>
  <p>
    <span>
      VIP tickets offer a premium and exclusive experience to event attendees, providing them
      with a range of special privileges and amenities. One of the main advantages of VIP tickets
      is the enhanced access they offer to various aspects of the event. VIP ticket holders often
      enjoy priority entry, allowing them to skip long lines and access the venue quickly.
    </span>
    <span>
      In addition to priority entry, VIP ticket holders usually have access to premium seating
      areas, providing them with the best views of the event's performances and attractions. Some
      events may also offer VIP lounges or dedicated hospitality areas where ticket holders can
      relax, socialize, and enjoy complimentary food and beverages.
    </span>
    <span>
      Another notable benefit of VIP tickets is the opportunity for meet-and-greet sessions with
      artists, celebrities, or speakers, allowing attendees to interact with their idols and create
      unforgettable memories. Such exclusive interactions make VIP tickets highly desirable for
      fans and enthusiasts.
    </span>
    <span>
      VIP tickets also offer a luxurious and comfortable event experience, catering to attendees
      who appreciate personalized service and attention to detail. The premium amenities and perks
      associated with VIP tickets create a memorable and indulgent experience that sets it apart
      from regular ticket options.
    </span>
    <span>
      Overall, VIP tickets provide a unique and upscale event experience, making them an attractive
      choice for individuals seeking a more lavish and unforgettable time at the event.
    </span>
  </p>
</div>



)}
</div>
)}
</div>
);
}

export default Main;






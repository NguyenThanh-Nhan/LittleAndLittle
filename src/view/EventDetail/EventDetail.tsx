import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { firestore } from "../../config/controller";
import CardDetail from "../CardDetail/CardDetail";

function EventDetail() {
  const { id } = useParams();
  // Fetch a single document
  const getEvent = doc(firestore, `events/${id}`);

  const [isLoading, setIsLoading] = useState(false);

  const [event, setEvent] = useState({});

  useEffect(() => {
    const fetchEventData = async () => {
      const docSnap = await getDoc(getEvent);

      if (docSnap.exists()) {
        const newEventObj = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        setEvent(newEventObj);
        setIsLoading(false);
      } else {
        // doc.data () will be underfined in this case
        console.log("No such document");
      }
    };
    fetchEventData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) return <div className="loading" />;
  return (
    <div className="event-details">
      {Object.keys(event) && Object.keys(event).length ? (
        <CardDetail event={event} detailsPage />
      ) : null}
    </div>
  );
}

export default EventDetail;

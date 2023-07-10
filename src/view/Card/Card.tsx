import React, { useEffect, useState } from 'react'
import { eventsCollection } from '../../config/controller';
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { NewEventType } from '../../types/event';import Information from '../Information/Information';

function Card() {

      const [events, setEvents] = useState<NewEventType[]>([]);
      useEffect(
        () =>
          onSnapshot(
            eventsCollection,
            (snapshot: QuerySnapshot<DocumentData>) => {
              setEvents(
                snapshot.docs.map((doc) => {
                  return {
                    id: doc.id,
                    ...doc.data(),
                  };
                })
              );
            }
          ),
        []
      );

  return (
    <div className="cart ms-3">
      <h2 className="title">All Events</h2>
      {events && events.length ? (
        <div>
          {events?.map((event) => (
            <Information key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <h2 className="no-event">There are no event</h2>
      )}
    </div>
  );
}

export default Card
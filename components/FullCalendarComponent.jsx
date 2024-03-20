'use client'
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es'; // Importa el idioma español


const FullCalendarComponent = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Aquí puedes obtener los eventos de tu API o de donde sea necesario
    const fetchedEvents = [
      {
        title: 'Boletin N°1',
        start: '2024-03-18',
      },
      {
        title: 'Boletin N°2',
        start: '2024-03-20',
      },
    ];
    setEvents(fetchedEvents);
  }, []);

  return (
    <div className="full-calendar-wrapper" >
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      locales={[esLocale]} // Configura el idioma español
      locale="es" // Establece el idioma por defecto como español
    />
    </div>
  );
};

export default FullCalendarComponent;

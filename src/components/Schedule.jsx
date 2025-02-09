import React, { useState } from "react";
import "./Card.css";

function Schedule() {
  const [selectedDate, setSelectedDate] = useState("February 11, Tuesday");

  const scheduleData = {
    "February 11, Tuesday": [
      { stage: "STAGE 2 – FAIZABAD JUNCTION", time: "10 AM", event: "CHERUKATHARACHANA MALAYALAM" },
      { stage: "STAGE 2 – FAIZABAD JUNCTION", time: "12 PM", event: "KURUNKATHA MALAYALAM" },
      { stage: "STAGE 2 – FAIZABAD JUNCTION", time: "2 PM", event: "KAVITHARACHANA MALAYALAM" },
      { stage: "STAGE 4 – RK LAKSHMAN NAGAR", time: "10 AM", event: "PENCIL DRAWING" },
      { stage: "STAGE 4 – RK LAKSHMAN NAGAR", time: "10 AM", event: "EMBROIDERY" },
      { stage: "STAGE 4 – RK LAKSHMAN NAGAR", time: "12 PM", event: "ACRYLIC PAINTING" },
      { stage: "STAGE 4 – RK LAKSHMAN NAGAR", time: "2:30 PM", event: "POSTER RACHANA" },
      { stage: "STAGE 4 – RK LAKSHMAN NAGAR", time: "2:30 PM", event: "COMPUTER DESIGNING" },
      { stage: "STAGE 5 – MT NAGAR", time: "10 AM", event: "KAVITHARACHANA ENGLISH" },
      { stage: "STAGE 5 – MT NAGAR", time: "10 AM", event: "KAVITHARACHANA HINDI" },
      { stage: "STAGE 5 – MT NAGAR", time: "10 AM", event: "KAVITHARACHANA SANSKRIT" },
      { stage: "STAGE 5 – MT NAGAR", time: "12 PM", event: "PRABANDHA RACHANA ENGLISH" },
      { stage: "STAGE 5 – MT NAGAR", time: "2 PM", event: "CHERUKATHA RACHANA ENGLISH" },
      { stage: "STAGE 5 – MT NAGAR", time: "2 PM", event: "CHERUKATHA RACHANA HINDI" },
      { stage: "STAGE 6 – DANISH SIDDIQUE NAGAR", time: "10 AM", event: "WIKI ARTICLE RACHANA MALAYALAM" },
      { stage: "STAGE 6 – DANISH SIDDIQUE NAGAR", time: "10 AM", event: "WIKI ARTICLE ENGLISH" },
      { stage: "STAGE 6 – DANISH SIDDIQUE NAGAR", time: "10 AM", event: "WIKI ARTICLE RACHANA HINDI" },
      { stage: "STAGE 6 – DANISH SIDDIQUE NAGAR", time: "12 PM", event: "PRABANDHA RACHANA ARABIC" },
      { stage: "STAGE 6 – DANISH SIDDIQUE NAGAR", time: "12 PM", event: "PRABANDHA RACHANA SANSKRIT" },
      { stage: "STAGE 6 – DANISH SIDDIQUE NAGAR", time: "2:30 PM", event: "CHERUKATHA RACHANA SANSKRIT" },
      { stage: "STAGE 6 – DANISH SIDDIQUE NAGAR", time: "2:30 PM", event: "CHERUKATHA RACHANA ARABIC" },
      { stage: "STAGE 7 – GAZIYABAD", time: "2 PM", event: "KALIMAN PRATHIMA NIRMANAM" }
    ],
    "February 12, Wednesday": [
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "10 AM", "event": "QUIZ" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "10 AM", "event": "PRABANDHA RACHANA MALAYALAM" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "2 PM", "event": "THIRAKATHA RACHANA - KATHACHITHRAM MALAYALAM" },
      { "stage": "STAGE 4 – RK LAKSHMAN NAGAR", "time": "10 AM", "event": "JALACHAYAM" },
      { "stage": "STAGE 4 – RK LAKSHMAN NAGAR", "time": "10 AM", "event": "CARTOON RACHANA" },
      { "stage": "STAGE 4 – RK LAKSHMAN NAGAR", "time": "2 PM", "event": "ENNACHAYAM" },
      { "stage": "STAGE 4 – RK LAKSHMAN NAGAR", "time": "2 PM", "event": "COLLAGE" },
      { "stage": "STAGE 5 – MT NAGAR", "time": "10 AM", "event": "KURUNKATHA HINDI" },
      { "stage": "STAGE 5 – MT NAGAR", "time": "10 AM", "event": "KURUNKATHA ENGLISH" },
      { "stage": "STAGE 5 – MT NAGAR", "time": "2 PM", "event": "THIRAKKATHA RACHANA – DOCUMENTARY MALAYALAM" },
      { "stage": "STAGE 5 – MT NAGAR", "time": "2 PM", "event": "THIRAKKATHA RACHANA – DOCUMENTARY ENGLISH" },
      { "stage": "STAGE 6 – DANISH SIDDIQUE NAGAR", "time": "10 AM", "event": "CINEMA NIRUPANAM MALAYALAM" },
      { "stage": "STAGE 6 – DANISH SIDDIQUE NAGAR", "time": "2 PM", "event": "CINEMA NIRUPANAM ENGLISH" },
      { "stage": "STAGE 7 – GAZIYABAD", "time": "10 AM", "event": "PHOTOGRAPHY" },
      { "stage": "STAGE 7 – GAZIYABAD", "time": "2 PM", "event": "MEHANDI DESIGN" }
],

    "February 13, Thursday": [
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "10 AM", "event": "LALITHA SANGEETHAM (F)" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "11 AM", "event": "LALITHA SANGEETHAM (M)" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "11:30 AM", "event": "INAUGURAL CEREMONY" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "2 PM", "event": "THIRUVATHIRA" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "3 PM", "event": "GROUP DANCE (F)" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "3:20 PM", "event": "OPPANA" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "4:15 PM", "event": "MARGAMKALI" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "4:30 PM", "event": "BHARATHANATYAM (F)" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "4:45 PM", "event": "NADODINRITHAM (M)" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "5 PM", "event": "NADODINRITHAM (F)" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "10 AM", "event": "PRASANGAM MALAYALAM" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "11:20 PM", "event": "PRASANGAM ENGLISH" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "12:30 PM", "event": "KAVITHAALAPANAM ENGLISH" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "2 PM", "event": "KAVITHAALAPANAM KANNADA" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "2:15 PM", "event": "MAPPILAPATTU (S)" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "3:15 PM", "event": "KAVITHAALAPANAM ARABIC" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "3:45 PM", "event": "KAVITHAALAPANAM HINDI" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "4:15 PM", "event": "KAVITHAALAPANAM SANSKRIT" },
      { "stage": "STAGE 3 – MUGHALSAARAI JUNCTION", "time": "10 AM", "event": "IDAKKA" },
      { "stage": "STAGE 3 – MUGHALSAARAI JUNCTION", "time": "10:15 AM", "event": "TABALA" },
      { "stage": "STAGE 3 – MUGHALSAARAI JUNCTION", "time": "10:30 AM", "event": "MRIDANGAM" },
      { "stage": "STAGE 3 – MUGHALSAARAI JUNCTION", "time": "10:45 AM", "event": "VIOLIN POURASTHYAM" },
      { "stage": "STAGE 3 – MUGHALSAARAI JUNCTION", "time": "11:30 AM", "event": "VIOLIN PASHCHATHYAM" },
      { "stage": "STAGE 3 – MUGHALSAARAI JUNCTION", "time": "12 PM", "event": "ASHTAPADHI" },
      { "stage": "STAGE 6 – DANISH SIDDIQUE NAGAR", "time": "10 AM", "event": "CINEMA NIRUPANAM HINDI" }
]
,
    "February 14, Friday": [
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "10 AM", "event": "KATHAPRASANGAM" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "10:45 AM", "event": "MONOACT" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "11:15 AM", "event": "MIMICRY" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "11:30 AM", "event": "MIME" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "2 PM", "event": "NADANPATTU" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "2:30 PM", "event": "GROUP SONG (INDIAN)" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "3 PM", "event": "HINDUSTANI SANGEETHAM (M)" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "3:20 PM", "event": "HINDUSTANI SANGEETHAM (F)" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "3:30 PM", "event": "GHAZAL (F)" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "4:15 PM", "event": "GHAZAL (M)" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "4:30 PM", "event": "KAVITHAALAPANAM URDU" },
      { "stage": "STAGE 1 – ALLAHABAD JUNCTION", "time": "5 PM", "event": "CLOS" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "10 AM", "event": "KAVITHAALAPANAM MALAYALAM" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "10:30 PM", "event": "KARNATIC SANGEETHAM (M)" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "10:45 PM", "event": "KARNATIC SANGEETHAM (F)" },
      { "stage": "STAGE 2 – FAIZABAD JUNCTION", "time": "2 PM", "event": "PASHCHATHYA SANGEETHAM (S)" },
      { "stage": "STAGE 7 – GAZIYABAD", "time": "10 AM", "event": "DEBATE MALAYALAM" },
      { "stage": "STAGE 7 – GAZIYABAD", "time": "2 PM", "event": "DEBATE ENGLISH" }
]
,
  };

  const events = scheduleData[selectedDate] || [];

  const groupedEvents = events.reduce(
    (acc, event) => {
      if (event.time.endsWith("AM")) {
        acc.am.push(event);
      } else if (event.time.endsWith("PM")) {
        acc.pm.push(event);
      }
      return acc;
    },
    { am: [], pm: [] }
  );

  return (
    <>
      <div className="home-container">
        <div className="search-section mt-[94px] px-4">
          <div className="flex justify-center space-x-4">
            <h3 className="text-3xl font-bold text-[#C3A17A]">Schedule</h3>
          </div>
        </div>

        <select
  className="search-input px-4 py-2 rounded-lg border border-gray-300 w-1/2 
             bg-transparent bg-opacity-50 backdrop-blur-md text-black text-sm"
  value={selectedDate}
  onChange={(e) => setSelectedDate(e.target.value)}
>
  {Object.keys(scheduleData).map((date) => (
    <option key={date} value={date} className="text-xs">
      {date}
    </option>
  ))}
</select>


        <div className="content-container mt-0">
          <div className="content-scrollable">
            <div className="container px-4">
              <div className="mt-8 space-y-6">
                {groupedEvents.am.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Morning Events (AM)</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {groupedEvents.am.map((event, index) => (
                        <div key={index} className="card">
                          <h2 className="text-sm text-white-600">{event.stage}</h2>
                          <p className="font-semibold">Time: {event.time}</p>
                          <p>Event: {event.event}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {groupedEvents.pm.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Afternoon Events (PM)</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {groupedEvents.pm.map((event, index) => (
                        <div key={index} className="card">
                          <h2 className="text-sm text-white-600">{event.stage}</h2>
                          <p className="font-semibold">Time: {event.time}</p>
                          <p>Event: {event.event}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {groupedEvents.am.length === 0 && groupedEvents.pm.length === 0 && (
                  <p className="text-center text-gray-600">No events scheduled for this date.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Schedule;

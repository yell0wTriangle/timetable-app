import React from 'react';

const timetableData = {
  Monday: [
    { time: '11-12', subject: 'ED', room: 'C-LH-203' },
    { time: '12-1', subject: 'OS', room: 'C-LH-203' },
    { time: '4-6', subject: 'VT(L)', room: 'No room allotted' },
  ],
  Tuesday: [
    { time: '11-12', subject: 'DM', room: 'C-LH-002' },
    { time: '12-1', subject: 'COA', room: 'C-LH-002' },
    { time: '1-2', subject: 'OOPJ', room: 'C-LH-002' },
    { time: '3-4', subject: 'DBMS', room: 'C-LH-401' },
    { time: '4-6', subject: 'OS(L)', room: 'C-WL-301' },
  ],
  Wednesday: [
    { time: '11-12', subject: 'OS', room: 'C-LH-302' },
    { time: '12-1', subject: 'COA', room: 'C-LH-302' },
    { time: '1-2', subject: 'DBMS', room: 'C-LH-302' },
    { time: '3-4', subject: 'ED', room: 'C-LH-301' },
    { time: '4-5', subject: 'DM', room: 'C-LH-301' },
  ],
  Thursday: [
    { time: '11-12', subject: 'DM', room: 'C-LH-407' },
    { time: '12-1', subject: 'COA', room: 'C-LH-407' },
    { time: '1-2', subject: 'ED', room: 'C-LH-407' },
    { time: '3-4', subject: 'OOPJ', room: 'A-LH-105' },
    { time: '4-6', subject: 'DBMS(L)', room: 'A-DL-101' },
  ],
  Friday: [
    { time: '8-9', subject: 'OOPJ', room: 'C-LH-208' },
    { time: '9-10', subject: 'COA', room: 'C-LH-208' },
    { time: '10-11', subject: 'DM', room: 'C-LH-208' },
    { time: '2-4', subject: 'OOPJ(L)', room: 'C-WL-201' },
    { time: '4-5', subject: 'OS', room: 'C-LH-003' },
    { time: '5-6', subject: 'DBMS', room: 'C-LH-003' },
  ]
};

const DaySchedule = ({ day, schedule }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-full mx-auto mb-6">
    <div className="bg-gray-800 px-4 py-3 border-b border-gray-200">
      <h2 className="text-xl font-semibold text-white">{day}</h2>
    </div>
    <table className="w-full bg-white">
      <thead>
        <tr className="border-b bg-gray-100">
          <th className="text-left px-6 py-3 text-gray-600 font-medium">Time</th>
          <th className="text-left px-6 py-3 text-gray-600 font-medium">Subject</th>
          <th className="text-right px-6 py-3 text-gray-600 font-medium">Room</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((slot, index) => (
          <tr 
            key={index} 
            className="border-b last:border-b-0 hover:bg-gray-50 transition-colors"
          >
            <td className="px-6 py-3 font-medium text-gray-800">{slot.time}</td>
            <td className="px-6 py-3 text-gray-800">{slot.subject}</td>
            <td 
              className={`px-6 py-3 text-right ${slot.room === 'No room allotted' ? 'text-red-500 italic' : 'text-gray-800'}`}
            >
              {slot.room}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Timetable = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 px-4 py-6 px-4 py-6 rounded-xl">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Weekly Class Schedule</h1>
      {Object.entries(timetableData).map(([day, schedule]) => (
        <DaySchedule key={day} day={day} schedule={schedule} />
      ))}
      <div className="text-center text-sm text-gray-600 mt-6">
        <p>* (L) indicates Laboratory sessions</p>
      </div>
    </div>
  );
};

export default Timetable;

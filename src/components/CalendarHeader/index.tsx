
const CalendarHeader= () => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="grid grid-cols-7 text-xs sm:text-sm md:text-base font-semibold text-gray-600 sticky top-15 z-10 bg-white px-4 pb-3">
      {days.map((day, id) => (
        <div key={id} className=" flex items-center justify-center">
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarHeader;

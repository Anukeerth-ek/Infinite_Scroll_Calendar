import Day from "../Day"
interface WeekProps {
  weekNumber: number;
}
const Week = ({weekNumber}:WeekProps) => {
  return (
   <div className="grid grid-cols-7 ">
      {[1, 2, 3, 4, 5, 6, 7].map((day) => (
        <Day key={day} day={day} />
      ))}
    </div>
  )
}

export default Week
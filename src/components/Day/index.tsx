
interface DayProps {
     day: number;
}
const Day = ({ day }: DayProps) => {
     return <div className=" h-20 flex items-center justify-center border  bg-gray-50">{day}</div>;
};

export default Day;

import CalendarHeader from "../CalendarHeader";
import Header from "../Header";
import Months from "../Month";

const Calender = () => {
     const mockData = [
          { id: "july", name: "July 2025" },
          { id: "august", name: "August 2025" },
          { id: "september", name: "September 2025" },
     ];

     return (
          <div>
               <Header title={{ month: "Sept", year: "2025" }} />
               <CalendarHeader/>
               <div className="flex-1 overflow-y-scroll px-4 ">
                    {mockData.map((month: any) => (
                         <Months key={month.id} id={month.id} name={month.name} />
                    ))}
               </div>
          </div>
     );
};

export default Calender;

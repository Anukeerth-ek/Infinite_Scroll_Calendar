import Week from "../Week";

interface MonthsProps {
     id: string;
     name: string;
}

const Months = ({ id, name }: MonthsProps) => {
     return (
          <div data-month={name} id={id} className="">
               {[1, 2, 3, 4].map((week) => (
                    <Week key={week} weekNumber={week} />
               ))}
          </div>
     );
};

export default Months;

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function CustomDate({ range, setRange }) {
  const handleSelect = (ranges) => {
    setRange([ranges.selection]);
  };

  return (
    <div>
      <DateRange
        editableDateInputs
        onChange={handleSelect}
        moveRangeOnFirstSelection={false}
        ranges={range}
      />
    </div>
  );
}

export default CustomDate;

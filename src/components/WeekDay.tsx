import { Temporal } from "@js-temporal/polyfill";

export default function WeekDay({ order }: any) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const time = Temporal.Now.plainDateISO();
  const addedTime = time.add({ days: order - 1 });
  const day = addedTime.dayOfWeek;

  return(
    <div className='WeekDay'>
        {(order === 1) ? "Today" :
         (day === 1) ? days[0] :
         (day === 2) ? days[1] :
         (day === 3) ? days[2] :
         (day === 4) ? days[3] :
         (day === 5) ? days[4] :
         (day === 6) ? days[5] :
         (day === 7) ? days[6] : null}
    </div>
  )
}

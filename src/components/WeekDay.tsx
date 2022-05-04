import { Temporal } from "@js-temporal/polyfill";

interface Order{
  order:number
}

export default function WeekDay({ order }: Order) {
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
  const addedTime = time.add({ days: order });
  const day = addedTime.dayOfWeek;

  return(
    <div className='WeekDay'>
        {(order === 0) ? "Today" : days[day-1]}
    </div>
  )
}

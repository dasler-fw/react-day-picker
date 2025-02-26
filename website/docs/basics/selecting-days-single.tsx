import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { format } from 'date-fns';

export default function App() {
  const [selectedDay, setSelectedDay] = React.useState<Date>();

  const footer = selectedDay
    ? `You selected ${format(selectedDay, 'PPP')}.`
    : `Please pick a day.`;

  return <DayPicker mode="single" onSelect={setSelectedDay} footer={footer} />;
}

import dayjs from "dayjs";
import "dayjs/locale/en";

dayjs.locale("en");

export function formatTimestamp(timestamp: number): string {
  const dateTime = dayjs(timestamp * 1000);
  return dateTime.format("h:mm a");
}

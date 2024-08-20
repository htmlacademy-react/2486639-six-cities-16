import dayjs from 'dayjs';

const DateFormat = {
  DATE: 'YYYY-MM-DD',
  MONTH_YEAR: 'MMMM YYYY'
} as const;

const getStringDate = (date: string | Date, format: string): string => (!date) ? '' : dayjs(date).format(format);

const compareStringDate = (firstStringDate: string, secondStringDate: string): number => (dayjs(secondStringDate).diff(firstStringDate, 'minute'));

export { DateFormat, getStringDate, compareStringDate };

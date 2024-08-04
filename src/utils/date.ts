import dayjs from 'dayjs';

const DateFormat = {
  DATE: 'YYYY-MM-DD',
  MONTH_YEAR: 'MMMM YYYY'
};

//! съузить тип - format: typeof DateFormat...
const getStringDate = (date: string | Date, format: string) => (!date) ? '' : dayjs(date).format(format);

export { DateFormat, getStringDate };

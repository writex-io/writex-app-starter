import dayjs from 'dayjs';
import dayJsRelativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';

dayjs.extend(dayJsRelativeTime);
dayjs.extend(duration);

export default dayjs;

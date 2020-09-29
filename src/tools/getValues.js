import moment from 'moment-timezone';

const CURRENT_TZ = moment.tz.guess();

export function getTime(time, format = 'MM/DD/YYYY hh:mm:ss A') {
    return moment(time).tz(CURRENT_TZ).format(format);
}

export function getCount(count) {
    return count > 9999 ? `${(count / 1000).toFixed(1)}k` : count;
}

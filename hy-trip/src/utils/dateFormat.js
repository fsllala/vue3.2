import dayjs from "dayjs";
export const formatMonthDay = (times, formatDate = 'MM月DD日') => {
    return dayjs(times).format(formatDate)
}

export const getDiffDays = (startTime, endTime) => {
    return dayjs(endTime).diff(startTime, 'day');
}
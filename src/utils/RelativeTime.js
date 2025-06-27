import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import locale from 'dayjs/locale/pt-br';

dayjs.extend(relativeTime);
dayjs.locale(locale);

class RelativeTime {
    
    static format(createdAt) {
        const now = dayjs();
        const orderTime = dayjs(createdAt);

        if (now.diff(orderTime, 'hours') < 24) {
            return orderTime.fromNow(); // Exemplo: "há 10 minutos"
        }

        return orderTime.format('HH:mm'); // Exemplo: "10:44"
    }

    static formatDateTime(createdAt) {
        const orderTime = dayjs(createdAt);
    
        if (this.isToday(createdAt)) {
            return `Hoje, ${orderTime.format('HH:mm')}`;
        }
    
        if (this.isYesterday(createdAt)) {
            return `Ontem, ${orderTime.format('HH:mm')}`;
        }
    
        if (this.isThisWeek(createdAt)) {
            return `${orderTime.format('dddd')}, ${orderTime.format('HH:mm')}`;
        }
    
        return orderTime.fromNow(); // Exemplo: "há 3 dias"
    }
    

    static isToday(createdAt) {
        return dayjs(createdAt).isSame(dayjs(), 'day');
    }

    static isYesterday(createdAt) {
        return dayjs(createdAt).isSame(dayjs().subtract(1, 'day'), 'day');
    }

    static isThisWeek(createdAt) {
        const startOfWeek = dayjs().startOf('week');
        return dayjs(createdAt).isAfter(startOfWeek);
    }

    static isThisMonth(createdAt) {
        return dayjs(createdAt).isSame(dayjs(), 'month');
    }

    static daysAgo(createdAt) {
        return dayjs().diff(dayjs(createdAt), 'days');
    }

    static hoursAgo(createdAt) {
        return dayjs().diff(dayjs(createdAt), 'hours');
    }

    static minutesAgo(createdAt) {
        return dayjs().diff(dayjs(createdAt), 'minutes');
    }
}

export default RelativeTime;

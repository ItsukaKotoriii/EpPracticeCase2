export default class Util {

    static getDayOfWeek(date) {
        const day = date.getDay();
        const weekdays =  ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return weekdays[day];
    }

    static getLeepYear(date) {
        const year = date.getFullYear();
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    static CalculateAge(date) {
        const now = new Date();
        var age = now.getFullYear() - date.getFullYear();
        const month = now.getMonth() - date.getMonth();
        if (month < 0 || (month === 0 && now.getDate() < date.getDate())) {
            age--;
        }
        return age;
    }

    static formatDate(date) {
        let day = date.getDate().toString().padStart(2, '*');
        let month = (date.getMonth() + 1).toString().padStart(2, '*');
        let year = date.getFullYear().toString().padStart(4, '*');

        return `${day}/${month}/${year}`;
    }

    static formatDateAsDigits(date) {
        const day = parseInt(document.getElementById('day').value);
        const month = parseInt(document.getElementById('month').value);
        const year = parseInt(document.getElementById('year').value);

        const digits = `${Util.padZero(day)} ${Util.padZero(month)} ${year}`;
        return `<div class="digits">${digits.split('').map(digit => `<span class="digit">${digit}</span>`).join('')}</div>`;
    }

    static padZero(num) {
        return num < 10 ? '0' + num : num;
    }
}
import './style.css'
import Util from './util.js'


document.querySelector('#app').innerHTML = `
  <div class="container d-flex flex-col">
         <form id="birthdayForm" class="d-flex flex-col">
             <label>День:</label>
             <input type="number" name="day" id="day" min="1" max="31" required>
             <br>
             <label>Месяц:</label>
             <input type="number" name="month" id="month" min="1" max="12" required>
             <br>
             <label>Год:</label>
             <input type="number" name="year" id="year" min="1900" max="3000" required>
             <br>
             <input type="submit" value="Отправить">
         </form>
         <div id="output" class="d-flex flex-col"></div>
  </div>
`

let mainForm = document.getElementById('birthdayForm');
mainForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const date = new Date(year, month - 1, day);

    const out = `
        <p>Вы родились в ${Util.getDayOfWeek(date)}.</p><br>
        <p>${year} год ${Util.getLeepYear(date) ? 'является' : 'не является'} високосным.</p><br>
        <p>Вам ${Util.CalculateAge(date)} лет.</p><br>
        <p>Дата вашего рождения:</p><br>
        <div class="date">${Util.formatDateAsDigits(date)}</div>
    `;
    document.getElementById('output').innerHTML = out;
});
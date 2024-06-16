const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>${Company}</td>
    <td>${Contact}</td>
    <td>${Country}</td>
  </tr>

</table>
</div>
    `;
});
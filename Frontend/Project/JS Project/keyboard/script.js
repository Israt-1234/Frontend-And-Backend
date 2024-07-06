const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
<table>
  <tr>
    <th>key</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>${e.key === ' '? 'Space' : e.key}</td>
    <td>${e.Contact}</td>
    <td>${e.Country}</td>
  </tr>

</table>
</div>
    `;
});
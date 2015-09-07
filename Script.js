var input = document.createElement('input');
input.type = 'button';
input.value = 'Get Preview Number';
input.onclick = showAlert;
document.body.insertBefore(input,document.body.firstChild);
function showAlert()
{
  sum = 0;
  data = $('a.item_stat');
  $.each(data, function (key, value) {
    if (!isNaN(parseInt(value.text))) {
      sum += parseInt(value.text);
    }
  });
  alert('Number of previews on this page: ' + sum);
}

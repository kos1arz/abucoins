document.getElementById('button').addEventListener('click', convert);
document.getElementById('button2').addEventListener('click', convertFile);
   
function convert()
{
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.abucoins.com/products/ticker', true);

      xhr.onload = function()
      {
        if(this.status == 200)
        {
          var currency = JSON.parse(this.responseText);
          var output = '';
          for(var i in currency)
          {
            output += 
              '<option' + ' value=' + currency[i].price + '>'+currency[i].product_id+'</option>';
          }

          document.getElementById('from').innerHTML = output;
          document.getElementById('to').innerHTML = output;
        }
      }
      xhr.send();
} 

function convertFile()
{
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'plik.json', true);

      xhr.onload = function()
      {
        if(this.status == 200)
        {
          var currency = JSON.parse(this.responseText);
          var output = '';
          for(var i in currency)
          {
            output += 
              '<option' + ' value=' + currency[i].price + '>'+currency[i].product_id+'</option>';
          }

          document.getElementById('from').innerHTML = output;
          document.getElementById('to').innerHTML = output;
        }
      }
      xhr.send();
} 


function convertCurrency()
{
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var amount = document.getElementById('amount').value;
    if(amount>0)
    {
        document.getElementById('result').innerHTML = amount*from*to;
    }else document.getElementById('result').innerHTML = 'Złe dane';
}


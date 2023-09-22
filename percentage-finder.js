function calculatePercentage() {

    var value = document.getElementById("value").value;
    var percentage = document.getElementById("percentage").value;
  
    var result = (value * percentage) / 100;
  
    document.getElementById("result").value = result;
  }
  document.getElementById("calculate").addEventListener("click", calculatePercentage);
  
  
  
  
  
  
  
  
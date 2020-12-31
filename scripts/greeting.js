// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'Dedo';

// Here you can change your greetings
var gree1 = 'おやすみなさい ';
var gree2 = 'おはようございます ';
var gree3 = 'こんにちは ';
var gree4 = 'こんばんは ';
var gree5 = 'こんばんは ';
var gree6 = 'こんばんは ';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1;
} else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree2;
} else if (hour >= 12 && hour < 17) {
    document.getElementById('greetings').innerText = gree3;
} else  {
    document.getElementById('greetings').innerText = gree4;
}
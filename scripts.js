
var fruits = ['peach', 'mango', 'grapes', 'blueberries', 'cherries'];
document.getElementById('demo').innerHTML = fruits;


function myFunction() {
    console.log('you clicked the thing')
    fruits.sort();

    document.getElementById('demo').innerHTML = fruits;
}

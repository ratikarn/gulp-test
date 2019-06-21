var drink = ['Coke', 'Pepsi'];
var html = '<ul><li>' + drink.join('</li><li>') + '</li></ul>';

var showDrink = function showDrink() {
  return html;
};
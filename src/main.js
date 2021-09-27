dom.style(test, { border: '1px solid red', color: 'blue' });
console.log(dom.style(test, 'border'));
dom.style(test, 'border', '1px solid black');

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))
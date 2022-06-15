search = (id) => document.getElementById(id);
let timeoutids = [];
search('roll').onclick = () => {
  timeoutids.forEach((id) => clearTimeout(id));
  timeoutids = {};
  if (search('times').value > 20) {
    search('list').innerText = "can't go above 20!";
    return;
  }
  for (let i = 0; i < search('times').value; ) {
    timeoutids.push(
      setTimeout(() => {
        search('list').innerText += ` ${Math.floor(Math.random() * 6 + 1)}`;
        average();
        total();
      }, i++ * 1000)
    );
  }
};

search('average').onclick = average;

search('total').onclick = total;

search('clear').onclick = () => {
  timeoutids.forEach((id) => clearTimeout(id));
  timeoutids = {};
  search('to').innerText = 0;
  search('av').innerText = 0;
  search('list').innerText = '';
};

average = () => {
  search('av').innerText =
    search('list')
      .innerText.split(' ')
      .reduce((a, b) => Number(a) + Number(b)) /
    search('list').innerText.split(' ').length;
};
total = () => {
  search('to').innerText = search('list')
    .innerText.split(' ')
    .reduce((a, b) => Number(a) + Number(b));
};

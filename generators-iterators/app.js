function nextIterator(namesArr) {
  let nextIndex = 0;

  return {
    next() {
      return nextIndex < namesArr.length ? {
        value: namesArr[nextIndex++],
        done: false
      } : {
        done: true
      }
    }
  }
}

const namesArr = ['John', 'Zhenya', 'Kostya'];
const names = nextIterator(namesArr);
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

// function ajax(url) {
//   fetch(url).then(data => data.json()).then(data => getData.next(data));
// }

// function* fetchData() {
//   const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
//   const wes = yield ajax('https://api.github.com/users/wesbos');
//   const fatJoe = yield ajax('https://api.discogs.com/artists/51988');
//   console.log(beers);
//   console.log(wes);
//   console.log(fatJoe);
// }

// const getData = fetchData();
// getData.next();
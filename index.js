function getFirstSelector(selector) {  return document.querySelector(selector)}function nestedTarget() { return document.getElementById('nested').querySelector('div')}function deepestChild() {  let node = document.getElementById('grand-node')  let nextNode =  node.children[0]  while (nextNode) {    node = nextNode    nextNode = node.children[0]  }  return node}function increaseRankBy(n) {  var inc1 = document.getElementById('app').querySelectorAll('ul.ranked-list li')  for (let i = 0; i < inc1.length; i++) {    inc1[i].innerHTML = parseInt(inc1[i].innerHTML) + n  }  return}
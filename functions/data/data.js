const user = [{
  id: '1',
  name: 'stone',
  role: 'admin',
},{
  id: '2',
  name: 'term',
  role: 'user',
}]

const post = [{
  id: '1',
  userId: '1',
  detail: 'I Love Metromerce.'
}, {
  id: '2',
  userId: '1',
  detail: 'I am Developer.'
}, {
  id: '3',
  userId: '2',
  detail: 'I am Termchai.'
}]

module.exports = {
  userData: user,
  postData: post
}
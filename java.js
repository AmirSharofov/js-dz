// Original array of tasks
let arr = [
    {
      "userid":1,
      "id":1,
      "title": "delectus aut autem",
      "completed":false
    },
    {
      "userid":1,
      "id":2,
      "title":"quis ut nam facilis et officia qui",
      "completed":false
    },
    {
      "userid":1,
      "id":3,
      "title":"fugiat veniam minus",
      "completed": false
    },
    {
      "userid":1,
      "id":4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userid":1,
      "id":5,
      "title":"laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userid":1,
      "id":6,
      "title":"qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userid":1,
      "id":7,
      "title": "illo expedita consequatur quia in",
      "completed":false
    },
    {
      "userid":1,
      "id":8,
      "title":"quo adipisci enim quam ut ab",
      "completed":true
    },
    {
      "userid":1,
      "id":9,
      "title":"molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userid":1,
      "id":10,
      "title":"llo est ratione doloremque quia maiores aut",
      "completed":true
    }
  ];
  
  // Initialize the b object
  let b = {
    count: 0,
    tasks: []
  };
  
 
  b.count = arr.filter(task => !task.completed).length;
  b.tasks = arr.filter(task => !task.completed);
  
  console.log(b);





users.forEach(user => {
  let domain = user.email.split('@')[1];
  if (!domainUsers[domain]) {
    domainUsers[domain] = [];
  }
  domainUsers[domain].push(user);
});

console.log(domainUsers);
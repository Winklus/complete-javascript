// * A Recursive function is a function that call itself


const countDown = (value, fn) => {
  fn(value)
   return (value > 0) ? countDown(value -1 , value) : value
}

countDown(20, value => console.log(value))



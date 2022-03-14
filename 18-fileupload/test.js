const foo = (par) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(par)
      }, 1000)
    })
  }
  
  
  const run1 = async () => {
    const result1 = await foo(1);
    console.log(result1)
    const result2 = await foo(2);
    console.log(result2)
    const result3 = await foo(3);
    console.log(result3)
    const result4 = await foo(4);
    console.log(result4)
  }


const run2 =  () => {
    foo(1).then(result1 => {
        console.log(result1);
        
    })
    foo(2).then(result2 => {
        console.log(result2);
        
    })
    foo(3).then(result3 => {
        console.log(result3);
        
    })
    foo(4).then(result4 => {
        console.log(result4);
        
    })
    console.log('done');

  }

  const run3 =  () => {
    Promise.all([foo(1), foo(2), foo(3), foo(4)]).then(results => {
        console.log(results);
        console.log('done');
    })

  }
  
//   run1();
//   run2();
run2()
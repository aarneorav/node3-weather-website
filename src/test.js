let kala = (something) => {
    console.log(something);
  };
  
  kala(1);
  kala(2);
  kala();
  

  setInterval(() => {
      kala(1);
  }, 500);
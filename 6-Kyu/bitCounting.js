var countBits = function(n) {
     return (n).toString(2).split('').filter(Element => Element == 1).length;
  };
  console.log(countBits(10)); // Should return 2
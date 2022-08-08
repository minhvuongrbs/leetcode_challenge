const solution = (A, P, B, E) => {
  let range = new Array(A.length).fill([])

  for (let i = 0; i < A.length; i++) {
    range[i] = [A[i] - P[i], A[i] + P[i]];
  }

  range.sort((a , b) => a[1] - b[1]);

  // // change name
  // const disjoint = [];

      
  // for(let i = 0 ; i < range.length ; i++){
        
  //   let start  = range.get(i)[0];
  //   let end = range.get(i)[1];
  //   while( i < range.size() -1 && end >= range.get(i+1)[0]){
  //       start = Math.min(start , range.get(i+1)[0]);
  //       end = range.get(i+1)[1];
  //       i++;
  //   }
    
  //   disjoint.add(new int[]{start , end});
};

const A = [2,1];
P =[5,1];
B = 3;
E= 6;
console.log(solution(A, P, B, E)) 
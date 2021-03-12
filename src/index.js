
exports.min = function min (array) {
  if (array == undefined || array.length == 0){
    return 0
  }
  let i=0
  let min_value=array[0]
  for(i=0; i<array.length;i++)
  {
    if (array[i]<min_value)
    {
      min_value=array[i]
    }
  }
  return min_value;
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0){
    return 0
  }
  let i=0
  let max_value=array[0]
  for(i=0; i<array.length;i++)
  {
    if (array[i]>max_value)
    {
      max_value=array[i]
    }
  }
  return max_value;
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0){
    return 0
  }
  let i=0
  let sum=0
  for(i=0; i<array.length;i++)
  {
    sum+=array[i]
  }
  return (sum/array.length);
}

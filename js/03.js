function getHour(now, after){

  if (0>now || now>23){

  return null
  }
  return (now +after) % 24 ;
}

function showTestResult(now){

  if(now == null){
    return "fail"

  }
  return "success"
}

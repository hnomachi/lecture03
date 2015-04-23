function getMinute(now, after){
  return (now +after) % 60 ;
}

function getHour(now, after){
  return (now +after) % 24 ;
}

export default {
  formateDate(time) {
    if(!time) return ''
    const data = new Date(time)
    return data.getFullYear()+'年'+(data.getMonth()+1)+'月'+data.getDate()+'日 '+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()
  }
}
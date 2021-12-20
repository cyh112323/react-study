export let str = ''
export let sorry = false
export let err = false

export const fnSetResult = (e) => {
  let fn = e.currentTarget.getAttribute('data-fn')
  err = false
  sorry = false
  switch (fn) {
    case 'change':
      let char = e.currentTarget.getAttribute('data-char')
      if(str.length < 35){
        str = str + char
      }else{
        sorry = true
      }
      break
    case 'delete':
      str = str.slice(0, -1)
      break

    case 'clear':
      str = ''
      break

    case 'calc':
      try {
        if(str !== ''){
          let fnCalc = new Function('return ' + str)
          str = String(fnCalc()) 
        }
      } catch {//에러가 발생하면 실행
        err = true
        //alert('계산식오류')
        break
      }
  }
}
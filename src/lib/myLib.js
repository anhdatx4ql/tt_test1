function checkString(string) {
  console.log(typeof string === "string");

  let check_numeric = false;

  let check_UpperCase = false;

  if(string === "")
    return `Chuỗi nhập vào rỗng!`;
  if (typeof string === "string") {
    for (let i = 0; i < string.length; i++) {
      if (check_UpperCase === true && check_numeric === true) {
        break;
      }

      if (check_numeric === false)
        if (string.charAt(i) > 0 && string.charAt(i) < 9) {
          check_numeric = true;
        }

      if (check_UpperCase === false) {
        if (string.charAt(i) === string.charAt(i).toUpperCase) {
          check_UpperCase = true;
        }
      }
    }

    console.log(check_UpperCase,check_numeric)

    if (check_UpperCase === true && check_numeric === true) {
      return `"${string}" có cả ký tự số và băt đầu bằng chữ in hoa`;
    } else if (check_numeric === true) {
      return `"${string}" có ký tự số`;
    } else if (check_UpperCase === true){
      return `"${string}" bắt đầu bằng chữ in hoa`;
    }else
    return `"${string}" không có ký tự số, không bắt đầu bằng chữ in hoa`;
  }

  return `${string} không phải là kiểu string`;
}

function returnStudent(username,object){

    // if(object instanceof Map)

    if(!object instanceof Map)
        return `giá trị nhập vào không phải là map`;
    else if(object.get(username)){
        return {username: object.get(username)};   
    }else{
        return `Không tìm thấy ${username} trong Map student`;
    }

}

export { checkString,returnStudent };


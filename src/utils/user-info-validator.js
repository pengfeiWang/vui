let passwordReg = /^[\w\W]{6,30}$/,
    userInfoReg = {
      account: /^\w{4,12}$/,
      nickname: /^(\w|[\u4e00-\u9fa5]){2,12}$/,
      password: passwordReg,
      confirm_password: passwordReg,
      email: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]{2,5}$/i,
      mobile: /^(?:(?:(?:0[1-2]\d)|(?:0[3-9]\d{2})|(?:853|852))-(?:\d{8})|(?:1[34578]\d{9}))$/
    },
    validatorUserInfo = {
      account: str => userInfoReg.account.test(str),
      nickname: str => userInfoReg.nickname.test(str),
      password: str => userInfoReg.password.test(str),
      confirm_password: (str, pas) => {
        return (str === pas && userInfoReg.confirm_password.test(str));
      },
      email: str => userInfoReg.email.test(str),
      mobile: str => userInfoReg.mobile.test(str)

    };

export {validatorUserInfo};

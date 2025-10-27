Page({
  data: {
    isLogin: true,
    username: '',
    password: '',
    confirmPassword: ''
  },

  onInput(e) {
    const { field } = e.currentTarget.dataset;
    this.setData({
      [field]: e.detail.value
    });
  },

  toggleMode() {
    this.setData({
      isLogin: !this.data.isLogin,
      username: '',
      password: '',
      confirmPassword: ''
    });
  },

  handleSubmit() {
    const { isLogin, username, password, confirmPassword } = this.data;

    if (!username || !password) {
      wx.showToast({
        title: '請輸入帳號與密碼',
        icon: 'none'
      });
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      wx.showToast({
        title: '兩次密碼不一致',
        icon: 'none'
      });
      return;
    }

    // 取得本地儲存的使用者資料
    const users = wx.getStorageSync('users') || {};

    if (isLogin) {
      // 登入邏輯
      if (users[username] && users[username] === password) {
        wx.showToast({
          title: '登入成功',
          icon: 'success'
        });
        // 可導向主頁
        // wx.redirectTo({ url: '/pages/index/index' });
      } else {
        wx.showToast({
          title: '帳號或密碼錯誤',
          icon: 'none'
        });
      }
    } else {
      // 註冊邏輯
      if (users[username]) {
        wx.showToast({
          title: '帳號已存在，請重新輸入',
          icon: 'none'
        });
        return;
      }

      // 儲存新帳號
      users[username] = password;
      wx.setStorageSync('users', users);

      wx.showToast({
        title: '註冊成功，請登入',
        icon: 'success'
      });

      // 切換回登入模式
      this.setData({
        isLogin: true,
        username: '',
        password: '',
        confirmPassword: ''
      });
    }
  }
});

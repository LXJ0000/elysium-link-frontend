<script setup lang="ts">
import { http } from '@/utils/htpp'
import { ref } from 'vue'
import { useUserStore } from '@/stores/modules/user'

const user_name = ref('')
const password = ref('')

const login = async (user_name: string, password: string) => {
  if (user_name === '') {
    await uni.showToast({
      title: '用户名不能为空',
      icon: 'none',
    })
    return
  }
  if (password === '') {
    await uni.showToast({
      title: '密码不能为空',
      icon: 'none',
    })
    return
  }
  const user_info = await http({
    url: '',
    method: 'POST',
    data: {
      user_name: user_name,
      password: password,
    },
  })
  const userStore = useUserStore()
  userStore.setProfile(user_info)
}
</script>

<template>
  <view>
    <view class="top-bar">
      <view class="top-bar-l"> </view>
      <view class="top-bar-r">
        <view class="register"> 注册 </view>
      </view>
    </view>
    <view class="logo">
      <image src="@/static/images/avator4.jpg" mode=""></image>
    </view>
    <view class="main">
      <view class="title"> 登录 </view>
      <view class="sub_title"> 您好！欢迎来到悦联！ </view>
      <view class="inputs">
        <input
          type="text"
          class="text"
          placeholder="用户名/邮箱"
          placeholder-style="color: #aaa; font-weight: 400"
          v-model="user_name"
        />
        <input
          type="password"
          class="text"
          placeholder="密码"
          placeholder-style="color: #aaa; font-weight: 400"
          v-model="password"
        />
      </view>
    </view>

    <view class="login" @click="login(user_name, password)"> 登录 </view>
  </view>
</template>

<style lang="scss">
.top-bar {
  height: 88rpx;
  padding-top: var(--status-bar-height);
  .top-bar-l {
    float: left;
    padding-left: $uni-spacing-col-base;
    margin-top: 10rpx;
    image {
      width: 68rpx;
      height: 68rpx;
      border-radius: 16rpx;
    }
  }
  .top-bar-r {
    float: right;
    margin-top: 10rpx;
    padding-right: 36rpx;
    .register {
      font-family: PingFangSC-Medium;
      font-size: 36rpx;
      color: #333333;
      letter-spacing: 0;
      font-weight: 500;
      line-height: 88rpx;
    }
  }
}
.logo {
  padding-top: 128rpx;
  margin: 0 auto;
  text-align: center;
  image {
    width: 256rpx;
    height: 256rpx;
  }
}
.main {
  padding: 0 60rpx 120rpx 60rpx;
  .title {
    margin-top: 56rpx;
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #272832;
    letter-spacing: 0;
    font-weight: 600;
  }
  .sub_title {
    font-family: PingFangSC-Regular;
    padding-top: 14rpx;
    font-size: 20px;
    color: rgba(39, 40, 50, 0.5);
    letter-spacing: 0;
    font-weight: 400;
  }
  .inputs {
    margin-top: 48rpx;
    input {
      font-size: 36rpx;
      padding-top: 40rpx;
      height: 88rpx;
      line-height: 44rpx;
      color: #272832;
      letter-spacing: 0;
      font-weight: 500;
      border-bottom: 1px solid rgba(39, 40, 50, 0.1);
    }
    .text {
      width: 636rpx;
      // border-bottom: 1px solid #272832;
    }
  }
}
.login {
  width: 520rpx;
  margin: 0 auto;
  height: 96rpx;
  line-height: 96rpx;
  text-align: center;
  background: #ffe431;
  font-size: 32rpx;
  font-weight: 600;
  box-shadow: 0px 25px 16px -18px rgba(255, 228, 49, 0.4);
  border-radius: 24px;
}
</style>

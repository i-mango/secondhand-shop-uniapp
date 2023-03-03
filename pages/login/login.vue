<template>
	<view class="content">
		<el-form :model="userList" :rules="rules" ref="userListRef" label-width="80px">
			<el-form-item label="用户名">
        <el-input v-model="userList.username" placeholder="请输入用户名" :prefix-icon="Avatar"/>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="userList.password" placeholder="请输入用户名" show-password :prefix-icon="Lock"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="userLogin" :loading="loading" class="login-btn">登录</el-button>
      </el-form-item>
		</el-form>
	</view>
</template>

<script setup>
// 一个用户图像+密码锁图标
import { Avatar, Lock } from "@element-plus/icons-vue";
import {reactive, ref} from "vue";
  //用户表单
const userList = reactive({
  //用户名
  username: "",
  //密码
  password: ""
});
//加载
const loading = ref(false);
//校验规则
const rules = reactive({
  username:
      [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          }
          ],
  password:
      [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/,
            message: "请输入6到12位包括大小写字母及数字的组合",
            trigger: "blur"
          }
      ]
});

//登录方法
const userLogin=()=>
{

}
</script>

<style scoped>
.login-btn{
  width: 700px;
}
</style>

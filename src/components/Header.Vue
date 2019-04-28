<template>
  <div class="header">
     <router-link  :to="{name:'root'}">
        <img src="../assets/cnodejs_light.svg" alt="">
      </router-link>
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#" class="login" @click="lg_show">注册</a></li>
      <li><a href="#" class="login">登录</a></li>
    </ul>
        <main>
        <div class = "flip-modal login">
            <div class = "modal modal-login">
                <a class = "close fa fa-close" href="#" @click="remove"></a>
                <div class = "tabs">
                    <a class = "login active" href="#"  @click="tab">登录</a>
                    <a class = "register" href="#"  @click="tab">注册</a>
                </div>
                <div class = "content">
                    <div class = "errormsg"></div>
                    <form action="/login" method = "post">
                        <div class = "input-field">
                            <i class="fa fa-user"></i>
                            <input name="username" type="text" placeholder="用户名">
                        </div>
                        <div class = "input-field">
                                <i class="fa fa-lock"></i>
                                <input name="password" type="password" placeholder="密码">
                        </div>
                        <div class="input-field">
                            <input class="btn" type="submit" value="登录">
                        </div>
                    </form> 
                </div>
            </div>
            <div class = "modal modal-register">
                <a class="close fa fa-close" href="#" @click="remove"></a>
                <div class="tabs">
                    <a class="login"href="#"  @click="tab">登录</a>
                    <a class="register active"href="#"  @click="tab">注册</a>
                </div>
                <div class="content">
                    <div class="errormsg"></div>
                    <form action="/register" method="post">
                        <div class="input-field">
                            <i class="fa fa-user"></i>
                            <input name="username" type="text" placeholder="输入用户名">
                        </div>
                        <div class="input-field">
                            <i class="fa fa-lock"></i>
                            <input name="password" type="password" placeholder="输入密码">
                        </div>
                        <div class="input-field">
                            <i class="fa fa-lock"></i>
                            <input name="password2" type="password" placeholder="再次输入密码">
                        </div>
                        <div class="input-field">
                            <input class="btn" type="submit" vaule="注册">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
import $ from 'jquery'
  export default {
    name:"Header",
    methods: {
      lg_show(e){
        e.stopPropagation(),
        $('.flip-modal').css("display","block");       
      },
      tab(e){
      e.stopPropagation()
      if(e.target.classList.contains('login')){
        $('.flip-modal').removeClass('register')
        $('.flip-modal').addClass('login') 
      }
      if(e.target.classList.contains('register')){
        $('.flip-modal').addClass('register')
        $('.flip-modal').removeClass('login') 
      }        
      },
      remove(){
        $('.flip-modal').css("display","none");          
      }
    }
  }
</script>

<style scoped>
.header{
  background: #444;
  height: 50px;
}
img{
  max-width: 120px;
  margin-left: 50px;
  margin-top: 10px;
}
ul{
  list-style: none;
  float: right;
  margin: 4px;
}
li{
  display: inline-block;
  padding: 10px 15px;
}
a{
  text-decoration: none;
  color: #ccc;
  font-size: 14px;
  text-shadow: none;
}
a:hover{
  color:whitesmoke;
}

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .flip-modal {
        display: none;
    }
    .show {
        display: block!important;
    }
    .modal {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 400px;
        padding: 16px;
        background: white;
        box-shadow: 0px 0px 2px rgba(0,0,0,0.4);
    }   

    .modal .close {
        position: absolute;
        right: 10px;
        top: 10px;
    }

    .modal .tabs {
        text-align: center;
    }

    .modal .tabs a {
      display: inline-block;
      font-size: 16px;
      margin: 0 10px;
      color: #666;
    }
    .modal .tabs a.active {
        border-bottom: 2px solid #444;
        color: #444;
    }

    .modal .content {
        padding: 20px 40px;
    }
    
    .modal .errormsg {
        color: #ff9800;
        font-size: 12px;
    }

    .modal .content .input-field {
        position: relative;
        margin-top: 10px;
    }

    .modal .content .input-field .fa {
        position: absolute;
        left: 13px;
        top: 13px;
    }
    .modal .content input[type=text],
    .modal .content input[type=password] {
      width: 100%;
      padding: 10px 10px 10px 28px;
      outline: none;
    }
    .modal .content input[type=submit] {
      padding: 6px 10px;
      border: none;
      background: #fff;
      box-shadow: 0px 0px 2px rgba(0,0,0,0.4);
      outline: none;
    }
    .flip-modal.login .modal-login,
    .flip-modal.register .modal-register {
      transform: translate(-50%,-50%) rotateY(0deg);
      backface-visibility: hidden;
      transition: all 1s;
    }
    .flip-modal.login .modal-register,
    .flip-modal.register .modal-login{
      transform: translate(-50%,-50%) rotateY(180deg);
      backface-visibility: hidden;
      transition: all 1s;
    }
    .btn {
      width: 288px;
      background-color: lightblue !important;
    }
</style>



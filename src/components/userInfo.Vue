<template>
  <div class="userinfo">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>  
  <div class="userInfomation">
    <section>
      <img :src="user.avatar_url" alt="">
      <span>{{user.loginname}}</span>
      <p>{{user.score}}积分</p>
      <p>
        注册时间：{{user.create_at | formatDate}}
      </p>      
    </section>
    <div class="topics">
      <p>最近创建的话题</p>
      <ul>
        <li v-for=" item in user.recent_topics">
          <router-link :to="{
            name: 'post_content',
            params: {
              id: item.id
            }
          }">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="replies">
      <p>最近参与的话题</p>
      <ul>
        <li v-for=" item in user.recent_replies">
          <router-link :to="{
            name: 'post_content',
            params: {
              id: item.id
            }
          }">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>    
  </div>
  </div>
</template>

<script>
export default {
  name: 'userInfo',
  data(){
    return {
      isLoading: false,
      user: []
    }
  },
  methods:{
    getData(){
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
      .then(res=>{
        this.user = res.data.data
        this.isLoading = false
      })
      .catch(err=>{
        console.log(err)
      })
    }
  },
  beforeMount(){
    this.getData(),
    this.isLoading = true
  }
}
</script>

<style scoped>
  .userInfomation {
    background: white;
    width: 75%;
    margin: 10px auto;
  }
  .userInfomation section {
    padding: 12px;
  }
  .userInfomation img {
    width: 30px;
  }
  .userInfomation li {
    list-style:none;
  }
  .userInfomation .replies,
  .userInfomation .topics {
    font-size: 0.72rem;
    border-top: 10px #DDDDDD solid;
  }
  .userInfomation > div > p {
    padding: 12px 0 12px 12px;
    background-color: rgba(212, 205, 205, 0.17);
    font-size: 0.75rem;
    margin: 0;
  }
  .userInfomation > div >ul > li {
    padding: 4px 0 4px 12px;
    white-space: nowrap;
    font-size: 0.72rem;
    text-overflow: ellipsis;
    overflow: hidden;
    line-height: 30px;
    vertical-align: middle;
  }
  .userInfomation > div >ul > li > a {
    color: #094E99;
    text-decoration: none;
  }

</style>

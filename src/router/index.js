import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/userInfo'
import SlideBar from '../components/SlideBar'
import IndexSlideBar from '../components/IndexSlideBar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:PostList,
        SlideBar:IndexSlideBar
      }
    },
    {
      name:'post_content',
      path:'/topic/:id$author=:name',
      components:{
        main:Article,
        SlideBar:SlideBar
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components:{
        main: UserInfo,
      }
    }
  ]
})

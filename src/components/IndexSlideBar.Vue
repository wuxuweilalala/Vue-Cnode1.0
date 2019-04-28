<template>
  <div class="slide-bar">
    <section>
      <div class="lists">
        <div class="list-header">扫码联系我吧~</div>
        <div class="list-container">
          <img src="../assets/wechat-min.png" alt>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style  scoped>
.slide-bar {
    width: 290px;
    float: right;
    text-align: center;
}
img {
  width: 260px;
}
.lists .list-header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
}
.lists .list-header a {
      margin: 0 10px;
}

.lists .list-container {
    padding: 5px;
    text-align: center;
    background-color: #fff;
}

</style>


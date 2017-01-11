<html>
<head>
  <meta charset='utf8' />
  <meta name="renderer" content="webkit">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <!-- <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> -->
  <!-- <script src="https://jsconsole.com/js/remote.js?my"></script> -->
  <!-- <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script> -->
	<title>Example App</title>
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mobi.css/1.0.1/mobi.min.css" /> -->
  <!--<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> -->
  <!--<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> -->
  <style>
  /* 解决 searchbar 太宽的问题 */
  .weui-search-bar__box {
    height: auto !important;
  }

  /* Notice: from assets/styles.css 解决 react-swipeable-views 中初始加载时，子组件的样式文件还没加载完成，这时就还没有应用样式，所以计算offsetHeight出错的问题 */
  .vs-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px;
    min-height: 120px;
    color: #fff;
    background-color: #6AC0FF;
}

.player {
    display: flex;
    align-items: center;
}

.player__image {
    height: 78px;
    width: 78px;
    border-radius: 50%;
    margin-right: 5px; 
}
.player__image_right {
    margin-right: 0px;
    margin-left: 5px;
}
.player__info {
    font-size: 1em;
}

.player__info_right {
    text-align: right;
}

.player__info__name {
    text-align: center;
    font-size: 0.5rem;
}
.player__info__desc {
    font-size: 0.5em;
}

.vs {
    font-size: 2rem;
    margin: 0 5px;
}


  </style>
</head>
<body>
  <div id="App"></div>
</body>
<script>
  // for a:active
  window.addEventListener('touchstart', function() {}, false)
</script>
</html>

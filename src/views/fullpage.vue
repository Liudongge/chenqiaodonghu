<template>
    <div id="fullpage">
        <div class="section header fp-auto-height">
            <div class="menu clearfix">
                <!-- <h1 class="donghu-logo"></h1> -->
                <ul class="nav">
                    <li><a @click="selectedMenu('shidi')">
                        <Icon type="earth"></Icon>东湖湿地
                    </a></li>
                    <li><a @click="selectedMenu('shidi')">
                        <Icon type="beer"></Icon>东湖餐饮
                    </a></li>
                    <li><a @click="selectedMenu('shidi')">
                        <Icon type="ios-home"></Icon>东湖住宿
                    </a></li>
                    <li><a @click="selectedMenu('shidi')">
                        <Icon type="images"></Icon>陈桥风光
                    </a></li>
                    <li><a @click="selectedMenu('shidi')">
                        <Icon type="ios-telephone"></Icon>联系我们
                    </a></li>
                </ul>
                <!-- <div class="login">
                    <a href="javascript:">注册</a>|<a href="javascript:">登陆</a>
                </div> -->
            </div>
        </div>
        <div class="section screen1 active">
            <div class="center-wrap">
                <div class="desc screen1-desc">
                    <h1></h1>
                    <p></p>
                </div>
            </div>
        </div>
        <div class="section screen2">
            <div class="center-wrap">
                <div class="desc screen2-desc">
                    <h1>苍鹭</h1>
                    <p></p>
                </div>
                <!-- <div class="screen2-img">
                    <img alt="screen2" src="../assets/assets/images/bg/phone-blue.png" class="screen2-img1">
                    <img alt="screen2" src="../assets/assets/images/bg/phone-white.png" class="screen2-img2">
                </div> -->
            </div>
        </div>
        <div class="section screen3">
            <div class="center-wrap">
                <div class="desc screen3-desc">
                    <h1></h1>
                    <p></p>
                </div>
            </div>
        </div>
        <div class="section screen4">
            <div class="center-wrap">
                <div class="desc screen4-desc">
                    <h1>青头浅鸭</h1>
                    <p>国家濒危保护动物，在这里嬉闹玩耍</p>
                    <!-- <ul class="parameters-list">
                        <li>
                            <h2>403</h2><span>PPI</span></li>
                        <li>
                            <h2>1000 : 1</h2><span>对比度</span></li>
                        <li>
                            <h2>450cd/m²</h2><span>亮度</span></li>
                    </ul> -->
                </div>
            </div>
            <!-- <div class="screen4-img">
                <img alt="screen4" src="../assets/assets/images/bg/screen4.png">
            </div> -->
        </div>
        <div class="section screen5">
            <div class="center-wrap">
                <div class="desc screen5-desc">
                    <h1></h1>
                    <p></p>
                </div>
                <!-- <div class="screen5-img">
                    <img alt="screen5" src="../assets/assets/images/bg/playgame.png?v=2">
                </div> -->
            </div>
        </div>
        <div class="section screen6">
            <div class="center-wrap">
                <div class="desc screen6-desc">
                    <h1>旭日东升</h1>
                    <p>笼罩在清晨薄雾中的油菜花海</p>
                </div>
            </div>
            <!-- <div class="screen6-img">
                <img alt="screen6" src="../assets/assets/images/bg/card.jpg" style="opacity: 1;">
                <img alt="" src="../assets/assets/images/bg/cc-a.png" class="cc cc1" style="opacity: 1;">
                <img alt="" src="../assets/assets/images/bg/cc-b.png" class="cc cc2" style="opacity: 0;">
            </div> -->
        </div>
        <div class="section screen7">
            <div class="center-wrap">
                <div class="desc screen7-desc">
                    <h1>芦苇丛中，蛙鸣鸟叫</h1>
                    <p>感受自然和动物的亲密接触</p>
                </div>
            </div>
        </div>
        <div class="section screen8">
            <div class="center-wrap">
                <div class="desc screen8-desc">
                    <h1>湿地湖畔，天蓝水清</h1>
                    <p>感受大自然的安逸与恬静</p>
                </div>
            </div>
            <!-- <div class="screen8-img">
                <img alt="screen8" src="../assets/assets/images/bg/bbb.png">
            </div> -->
        </div>
        <div class="section screen9">
            <div class="center-wrap">
                <div class="desc screen9-desc">
                    <h1>没错！这就是我家小宝贝儿！</h1>
                    <p>知书达理，贤惠可人的小宝贝儿～～～～<br>哦哈哈哈啊哈哈</p>
                </div>
            </div>
            <!-- <div class="screen9-img">
                <img class="screen9-pic1" src="../assets/assets/images/bg/p1.png">
                <img class="screen9-pic2" src="../assets/assets/images/bg/p2.png">
                <img class="screen9-pic3" src="../assets/assets/images/bg/p3.png">
            </div> -->
        </div>
        <div class="section footer fp-auto-height">
            <div class="footer-link">
                <div class="center-wrap">
                    <div class="clearfix">
                        <dl>
                            <dt>在线预约</dt>
                        </dl>
                        <dl>
                            <dt>关注我们</dt>
                            <dd><a href="javascript:">新浪微博</a></dd>
                            <dd><a href="javascript:">腾讯微博</a></dd>
                            <dd><a href="javascript:">QQ空间</a></dd>
                            <dd><a href="javascript:">官方微信</a></dd>
                        </dl>
                        <dl>
                            <dt>联系热线</dt>
                            <dd>0373-8521777</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="copyright center-wrap">
                <p>©2015 Meizu Telecom Equipment Co., Ltd. All rights reserved. 备案号：粤ICP备13003602号-2 经营许可证编号：粤B2-20130198</p>
            </div>
        </div>
    </div>
</template>

<script>
    // import js and jquery
    import '../assets/js/jquery.fullPage.js';
    import $ from 'jquery';
    // import '../assets/css/fullpage_style.css';
    export default {
        methods: {
            selectedMenu(name) {
                this.$router.push({name});
            }
        },
        mounted: function() {
            $(function() {
                var $mlNav = $('.ml-nav');
                $('#fullpage').fullpage({
                    verticalCentered: !1,
                    navigation: !0,
                    onLeave: function(index, nextIndex, direction) {
                        if (index === 2 && direction === 'up') {
                            $mlNav.animate({
                                top: 80
                            }, 680);
                        } else if (index === 1 && direction === 'down') {
                            $mlNav.animate({
                                top: 0
                            }, 400);
                        } else if (index === 3 && direction === 'up') {
                            $mlNav.animate({
                                top: 0
                            }, 500);
                        } else {
                            $mlNav.animate({
                                top: -66
                            }, 400);
                        }
                    }
                });
            });
        }
    };
</script>
<style scope>
body, div, h1, h2, h3, h4, h5, h5, p, ul, ol, li, dl, dt, dd { margin: 0; padding: 0;}
ul, ol { list-style-type: none;}

body { font: 14px "Microsoft Yahei",Arial,Helvetica,sans-serif; color: #515151;}
a { color: #515151; text-decoration: none;}
a:hover { color: #31a5e7;}

.clearfix:after { content: ""; display: table; clear: both;}

.ml-nav { position: fixed; top: 0; left: 0; z-index: 10; width: 100%; padding: 15px 0; background-color: rgba(255, 255, 255, 0.85);}
.buy-now { position: absolute; right: 0; top: 0; width: 100px; height: 36px; line-height: 36px; text-align: center; color: #fff; background-color: #3db1fa;}
.buy-now:hover { color: #fff;}

.menu { position: relative; z-index: 1; width: 100%; height: 100%; margin: 0 auto;}
.center-wrap { position: relative; z-index: 1; width: 1040px; height: 100%; margin: 0 auto;}
.desc { position: relative; z-index: 1;}

.section { overflow: hidden;}
.section h1 { margin-bottom: 20px; line-height: 1.4; font-size: 40px; font-weight: 400;}
.section p { line-height: 25px;}

/*.section .donghu-logo { float: left; margin: 0; padding: 0;}
.donghu-logo { float: left; width: 150px; height: 150px; font-size: 0; background-image: url(../assets/images/bg/logo.jpg);}*/
.nav { float: right; font-size: 18px;}
.nav li { float: left;}
.nav a { display: block; padding: 31px 22px 30px;}
.nav a i{ margin-right: 6px;}

.login { position: absolute; right: 0; top: 31px;}
.login a { margin: 0 5px; padding-top: 31px;}

/*滚动一*/
/*.screen1 { background: url(../assets/images/bg/bg1-s.jpg) 50% 0 no-repeat;}*/
.screen1 { background: url(../assets/images/bg/bg1-s.jpg) 50% 0 no-repeat;}
.screen1-desc { position: absolute; width: 386px; margin: 0 auto; color: #FFF; bottom: 95px; left: 50%; margin-left: -193px;}
.screen1-desc h1 { text-align: center;}

/*滚动二*/
/*.screen2 { background: url(../assets/images/bg/bg2.jpg) 50% 0 no-repeat;}*/
.screen2 { background: url(../assets/images/bg/bg2-s.jpg) 50% 0 no-repeat;}
.screen2-desc { width: 574px; margin: 0 auto; padding-top: 126px; padding-left: 100%; text-align: center;}
.screen2-img { position: absolute; top: 168px; left: 50%; margin-top: 100px; margin-left: -600px;}
.screen2-img img { position: absolute;}
.screen2-img1 { left: 230px; width: 400px;}
.screen2-img2 { left: 480px; width: 500px;}

/*.screen3 { background: #ff8fa5 url(../assets/images/bg/bg3-s.jpg) center 0 no-repeat;}*/
.screen3 { background: #ff8fa5 url(../assets/images/bg/bg3-s.jpg) center 0 no-repeat;}
.screen3-desc { padding: 20% 0 0 30%; width: 680px;}

.screen4 { background: url(../assets/images/bg/bg4-s.jpg) center 0 no-repeat;}
.screen4-desc { position: relative; width: 540px; padding-top: 100px; z-index: 1;}
.parameters-list { margin-top: 28px; width: 230px;}
.parameters-list li { position: relative; border-top: #333 1px solid; border-bottom: #333 1px solid; margin-bottom: -1px;}
.parameters-list li h2 { font-size: 32px; font-weight: 400; height: 80px; line-height: 80px; margin-top: 0!important;}
.parameters-list li i { display: inline-block; position: absolute; top: 66px; font-size: 12px;}
.parameters-list li span { position: absolute; top: 30px; right: 0; font-size: 14px;}
.parameters-list li.ps h2 { position: relative; line-height: 90px;}
.parameters-list li.ps span { top: 26px;}
.screen4-img { position: absolute; bottom: 0; right: 0; line-height: 0;}
.screen4-img img { width: 900px;}

.screen5 { background: url(../assets/images/bg/bg5-s.jpg) center 0 no-repeat;}
.screen5-desc { padding-top: 10%; width: 610px; margin: 0 auto;}
.screen5-img { position: absolute; bottom: -346px; left: 50%; margin-left: -500px;}
.screen5-img img { width: 1000px;}

.screen6 { background: url(../assets/images/bg/bg6-s.jpg) center 0 no-repeat;}
.screen6-desc { position: absolute; right: 0; text-align: right; padding-top: 20%; width: 520px; z-index: 1;}
.screen6-img { position: absolute; top: 4%; left: -264px;}
.screen6-img img { width: 1200px;}
.screen6-img .cc { position: absolute; top: 384px; left: 520px; width: 378px;}
.screen6-img .cc2 { top: 385px;}

.screen7 { background: url(../assets/images/bg/bg7-s.jpg) center 0 no-repeat;}
.screen7-desc { position: absolute; padding-top: 30%; left: 144px; width: 460px;}

.screen8 { background: url(../assets/images/bg/bg8-s.jpg) center 0 no-repeat;}
.screen8-desc { position: absolute; right: 0; padding-top: 26%; width: 410px; text-align: right;}
.screen8-img { position: absolute; bottom: -10px; left: -200px;}
.screen8-img img { width: 1000px;}

.screen9 { background: url(../assets/images/bg/bg9-s.jpg) center 0 no-repeat;}
.screen9-desc { padding-left: 50%; padding-top: 18%; text-align: center; color: #000000;}
.screen9-img { position: absolute; top: 0; left: 50%; margin-left: -600px; padding-top: 400px; width: 1200px; height: 752px; z-index: 1;}
.screen9-img { position: absolute; top: 0; left: 50%; margin-left: -400px; padding-top: 290px; width: 800px; height: 752px; z-index: 1;}
.screen9-img img { position: absolute;}
.screen9-pic1 { width: 296px; left: 0; padding-top: 60px;}
.screen9-pic2 { width: 310px; left: 236px; z-index: 1;}
.screen9-pic3 { width: 296px; left: 482px; padding-top: 60px;}

.footer-link { padding: 30px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee;}
.footer-link dl { float: left; width: 19.9%;}
.footer-link dt { line-height: 45px; font-weight: 700;}
.footer-link dd { line-height: 28px;}
.footer-link a { color: #515151; text-decoration: none;}
.footer-link a:hover { color: #31a5e7;}

.copyright { padding: 20px 0; text-align: center;}

#fp-nav ul li:first-child, #fp-nav ul li:last-child { display: none;}

/* @media screen4 and (min-width:1920px) {
    .screen1 { background: url(../assets/images/bg/bg1.jpg) center 0 no-repeat;}
    .screen2 { background: url(../assets/images/bg/bg2.jpg) center 0 no-repeat;}
    .screen3 { background: url(../assets/images/bg/bg3.jpg) center 0 no-repeat;}
    .screen4 { background: url(../assets/images/bg/bg4.jpg) center 0 no-repeat;}
    .screen5 { background: url(../assets/images/bg/bg5.jpg) center 0 no-repeat;}
    .screen7 { background: url(../assets/images/bg/bg7.jpg) center 0 no-repeat;}
    .screen9 { background: url(../assets/images/bg/bg9.jpg) center 0 no-repeat;}
    .screen3-desc { padding-top: 50%;}
    .screen2-img { margin-top: 100px; margin-left: -720px;}
    .screen2-img2 { left: 400px;}
    .screen2-img1 { left: 230px; width: auto;}
    .screen2-img2 { left: 480px; width: auto;}
    .screen4-desc { padding-top: 200px;}
    .screen4-img img { width: 1200px;}
    .screen5-img { position: absolute; bottom: -300px; left: 50%; margin-left: -666px;}
    .screen5-img img { width: 1200px;}
    .screen6-img { top: 16%; left: 0;}
    .screen8-img img { width: 1200px;}
    .screen9-img { position: absolute; top: 0; left: 50%; margin-left: -600px; padding-top: 400px; width: 1200px; height: 752px; z-index: 1;}
    .screen9-img img { position: absolute;}
    .screen9-pic1 { left: 0; padding-top: 60px; width: auto;}
    .screen9-pic2 { left: 368px; width: auto; z-index: 1;}
    .screen9-pic3 { left: 755px; padding-top: 60px; width: auto;}
    .parameters-list li h2 { height: 100px; line-height: 100px;}
} */
/*@media screen4 and (max-width:1440px) {
    .screen3 { background: url(../assets/images/bg/bg3-xs.jpg) center 0 no-repeat;}
}*/
</style>

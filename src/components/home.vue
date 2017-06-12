<template>
    <div class="app-container">
        <div class="app-header">
            <div class="app-titlebar">
                <div class="logo">
                    <img src="../assets/images/logo_donghu.png">
                </div>
                <Menu mode="horizontal" :theme="menuTheme" active-name="1">
                    <Menu-item name="shidi">
                        <Icon type="earth"></Icon>
                        东湖湿地
                    </Menu-item>
                    <Menu-item name="canyin">
                        <Icon type="beer"></Icon>
                        东湖餐饮
                    </Menu-item>
                    <Menu-item name="zhusu">
                        <Icon type="ios-home"></Icon>
                        东湖住宿
                    </Menu-item>
                    <Menu-item name="chenqiao">
                        <Icon type="images"></Icon>
                        陈桥风光
                    </Menu-item>
                    <Menu-item name="contractUs">
                        <Icon type="ios-telephone"></Icon>
                        联系我们
                    </Menu-item>
                    <span style="margin-right: 20px"><b>切换主题</b></span>
                    <Radio-group v-model="menuTheme">
                        <Radio label="light"></Radio>
                        <Radio label="dark"></Radio>
                        <Radio label="primary"></Radio>
                    </Radio-group>
                </Menu>
            </div>
        </div>
        <div class="layout">
            <div class="layout-breadcrumb" v-if="currentMenu" >
                <Breadcrumb>
                    <Breadcrumb-item>{{currentMenu.partSection}}</Breadcrumb-item>
                </Breadcrumb>
            </div>
            <div class="layout-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menuTheme: 'light'
        };
    }
};
</script>

<style lang="scss">
    .app-header{
        position:relative;
        height:60px;
        .app-titlebar{
            .logo{
                height:60px;
                position:absolute;
                z-index:999;
                top:0;
                img{
                    height:59px;
                }
            }
            ul{
                padding-left:180px;
            }
        }
    } 
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
</style>

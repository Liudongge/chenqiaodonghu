<template>
    <div class="app-container">
        <!-- <div class="app-header">
            <div class="app-titlebar">
                <div class="logo" @click="selectLogo">
                    <img src="../assets/images/logo_donghu.png">
                </div>
                <Menu mode="horizontal" :theme="menuTheme" width="auto" :active-name="activeMenuName" @on-select="selectedMenu">
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
        </div> -->
        <div class="app-header">
            <!-- 增加logo，待完成20170617 -->
            <!-- <img alt="donghu-logo" src="../assets/images/logo_donghu.png" class="donghu-logo"> -->
            <img alt="chenqiaodonghu" src="../assets/images/chenqiaodonghu.png" class="chenqiaodonghu">
        </div>
        <div class="layout">
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
            menuTheme: 'light',
            activeMenuName: 'shidi'
        };
    },
    methods: {
        selectLogo() {
            this.$router.push('index');
        },
        selectedMenu(name) {
            this.$router.push({name});
        }
    },
    mounted: function() {
        this.selectedMenu('index');
    }
};
</script>
<style lang="scss">
    /* .app-header {
        position: relative;
        height: 60px;
        .app-titlebar {
            .logo {
                height: 60px;
                position: absolute;
                z-index: 999;
                top: 0;
                img {
                    height: 59px;
                }
            }
            ul {
                padding-left: 180px;
            }
        }
    } */
    
    .app-header {
        background-color: rgb(212, 212, 212);;
    }
    .donghu-logo { 
        float: left;
        width: 150px;
        height: 150px;
    }
    .chenqiaodonghu {
        padding-left: 35%
    }
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
</style>

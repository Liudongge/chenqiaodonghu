<template>
    <div>
        <div class="header" v-show="true">
            <nav id="navBar" class="navBar fixed ready top-hide top" style="">
                <button role="button" class="menu">
                    Menu<span class="label">MENU</span>
                </button>
                <span class="logo" data-href="https://www.etq-amsterdam.com">ETQ.</span>
                <aside class="cartcount show">0<span class="label">BAG</span></aside>
            </nav>
            <figure id="overlay" class="overlay">
                <button>X</button>
            </figure>
        </div>
        <aside id="sidemenu" class="sidemenu" v-if="sideMenuOpened">
            <div>
                <h3>Menu</h3>
                <nav role="navigation">
                    <ul>
                        <li id="menu-item-190" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-190"><a href="https://www.etq-amsterdam.com/">Collection</a></li>
                        <li id="menu-item-188" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-188"><a href="https://www.etq-amsterdam.com/etq-ss17-lookbook/">Lookbook</a></li>
                        <li id="menu-item-189" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-189"><a href="https://www.etq-amsterdam.com/about/">About</a></li>
                        <li id="menu-item-187" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-187"><a href="https://www.etq-amsterdam.com/stockists/">Stockists</a></li>
                    </ul>
                    <ul>
                        <li id="menu-item-191" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-191"><a href="https://www.etq-amsterdam.com/service-desk/">Customer Care</a></li>
                        <li class=" menu-item menu-item-type-post_type menu-item-object-page"><a href="https://www.etq-amsterdam.com/my-account/">Login</a></li>
                    </ul>
                </nav>
            </div>
            <footer>
                <a href="https://www.facebook.com/etqams" target="_blanc">
                    <button class="facebook"><span><i class="fa fa-facebook"></i></span><span class="hover"><i class="fa fa-facebook"></i></span></button>
                </a>
                <a href="https://www.instagram.com/etqamsterdam" target="_blanc">
                    <button class="instagram"><span><i class="fa fa-instagram"></i></span><span class="hover"><i class="fa fa-instagram"></i></span></button>
                </a>
                <a href="https://twitter.com/ETQAmsterdam" target="_blanc">
                    <button class="twitter"><span><i class="fa fa-twitter"></i></span><span class="hover"><i class="fa fa-twitter"></i></span></button>
                </a>
            </footer>
        </aside>
    </div>
</template>
<script>
export default {
    name: 'ETQ',
    data() {
        return {
            sideMenuOpened: true
        };
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Inport css file from outsite */

@import '../assets/css/app.min.css';
</style>

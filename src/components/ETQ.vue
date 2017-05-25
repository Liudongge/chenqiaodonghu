<template>
    <div class="header">
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
</template>

<script>
export default {
    name: 'ETQ',
    data() {
        return {}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Inport css file from outsite */
@import '../assets/css/app.min.css';
</style>

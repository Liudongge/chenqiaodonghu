<template>
    <div style="margin-top: 20px">
        <Carousel v-model="value1">
            <Carousel-item>
                <div class="demo-carousel"><img src="../assets/images/large_shidi03.png"></div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel"><img src="../assets/images/large_shidi01.png"></div>
            </Carousel-item>
            <Carousel-item>
                <div class="demo-carousel"><img src="../assets/images/large_shidi02.png"></div>
            </Carousel-item>
        </Carousel>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                value1: 0
            };
        }
    };
</script>

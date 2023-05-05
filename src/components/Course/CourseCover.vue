<template>
    <div class="wrapper">
        <div class="title">
            Course Offerings
        </div>
        <img src="./assets/header.jpg">
    </div>
</template>

<script>
export default{
    name: 'CourseCover'
}
</script>

<style scoped>
.wrapper{
    box-sizing: border-box;
    position: relative;
    max-height: 100%;
    max-width: 100%;
    height: 500px;
}

.title{
    z-index: 2;
    width: auto;
    height: auto;
    padding: 10px 35px;
    position: absolute;
    background-color: var(--white);

    margin: 0px 18.5% 0px 18.5%;
    bottom: 64px;
    border-radius: 4px;

    font-family: var(--header);
    text-transform: uppercase;
    font-size: 64px;
    font-weight: 700;
    color: var(--prime);
}

img{
    z-index: 1;
    width: 100%;
    height: 500px;
    background-repeat: no-repeat;
    object-position: center;
    object-fit: cover;  
}

</style>
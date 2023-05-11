<template>
    <div class="wrapper">
        <div class="title">
            Course Offerings
        </div>
            <img src="./assets/college.jpg">
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
}

.title{
    z-index: 2;
    width: auto;
    height: auto;
    padding: 10px 35px;
    position: absolute;

    margin: 0px 18.5% 0px 18.5%;
    bottom: 30px;

    font-family: var(--header);
    text-transform: uppercase;
    text-shadow: 3px 2px 6px var(--black);
    font-style: italic;
    font-size: 72px;
    font-weight: 700;
    color: var(--white);
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
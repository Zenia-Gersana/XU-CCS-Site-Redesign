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
    position: absolute;
    display: flex;
    align-items: center;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    bottom: 50%;
    border-radius: 4px;

    font-family: "Verdana";
    font-style: normal;
    font-size: 80px;
    font-weight: 700;
    color: #FFFFFF;
}

.img{
    z-index: 1;
    max-width: auto;
    max-height: 500px;
    background-repeat: no-repeat;
    object-position: center;
    object-fit: cover;  
    
    filter: brightness(75%);
}

</style>
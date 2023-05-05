<template>
    <div class="wrapper">
        <div class="title-dean">
            <p>DEAN</p>
        </div>

        <div class="pic-dean">
            <img src="./assets/Apag.jpg" alt="Ma'am Meldie Apag">
        </div>

        <div class="info-dean">
            <h1>Dr. Meldie A. Apag</h1>
            <!-- Placeholder text for some information about the dean -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quod temporibus tenetur eligendi odit corporis, accusantium ipsam, 
                maiores similique architecto perspiciatis qui excepturi voluptate. 
                Obcaecati porro sed voluptates accusamus eius a.
            </p>

            <p>
                <a href="mailto:mapag@xu.edu.ph">
                    mapag@xu.edu.ph
                </a>
            </p>
        </div>

        <div class="divider"></div>
    </div>
</template>

<script>
    export default {
        name: 'DeanInfo'
    }
</script>

<style scoped>

    .wrapper{
        position: relative;
        max-width: 100%;
        max-height: 100%;
    }
    
    .title-dean {
        font-family: var(--header);
        font-size: 80px;
        margin: 0;

        position: absolute;
        width: 310px;
        height: 103px;
        left: 150px;
        bottom: 470px;

        font-style: normal;
        font-weight: 600;
        font-size: 90px;
        line-height: 109px;

        color: #6B2685;
    }

    .pic-dean {
        z-index: 2;
        position: relative;
        left: 450px;
        top: 70px;
        width: auto;
        object-fit: contain;
    }

    .pic-dean img {
        border-radius: 0 10%;
    }

    .info-dean {
        z-index: 1;
        position: relative;
        width: 450px;
        height: 235px;
        left: 710px;
        bottom: 140px;
        padding-left: 60px;
        padding-top: 10px;
        padding-right: 40px;
        padding-bottom: 15px;
        margin-bottom: 0;

        background: #324994;
    }

    .info-dean h1 {
        font-family: var(--text);
        font-stretch: expanded;

        color: #CFA803;
    }

    .info-dean p {
        font-family: var(--text);
        text-align: start;
        line-height: 22px;

        color: #FFFFFF;
    }

    .info-dean a {
        font-family: var(--text);
        text-align: start;

        color: #FFFFFF;
    }

    .info-dean a:hover {
        font-family: var(--text);
        text-align: start;

        color: var(--acc);
    }

    .divider {
        border-bottom: 4px solid var(--dacc);
        width: 80%;
        margin: 0 auto;
    }
</style>
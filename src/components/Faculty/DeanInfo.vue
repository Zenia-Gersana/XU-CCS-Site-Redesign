<template>
    <div class="wrapper">
        <div class="title-dean">
                DEAN
            </div>
        <div class="content">
            <div class="dean">
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

                    <h4><a href="mailto:mapag@xu.edu.ph">
                        mapag@xu.edu.ph
                    </a></h4>
                </div>
            </div>
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
    .content{
        display: flex;
        justify-content: space-around;
    }

    .wrapper{
        position: relative;
        max-width: 100%;
        max-height: 100%;
    }

    .dean{
        width: auto;
        padding: 0 0 5% 0;
    }
    
    .title-dean {
        position: absolute;
        margin: 60px 10% -35px 10%;
        padding-left: 30px;
        position: relative;
        letter-spacing: 4px;

        font-style: normal;
        font-weight: bolder;
        font-family: var(--header);
        font-size: 80px;

        color: #6B2685;
    }

    .pic-dean {
        z-index: 2;
        position: absolute;
    }

    .pic-dean img {
        border-radius: 0 10%;
    }

    .info-dean {
        z-index: 1;
        position: relative;
        width: 450px;
        height: auto;
        border-radius: 10px;

        padding: 10px 30px 10px 60px;
        margin: 70px 0 0 270px;
        text-align: justify;
        text-justify: inter-word;

        background: var(--prime);
    }

    .info-dean h1 {
        font-family: var(--text);
        font-stretch: expanded;

        color: #CFA803;
    }

    .info-dean p {
        font-family: var(--text);
        line-height: 22px;

        color: #FFFFFF;
    }

    .info-dean a {
      color: var(--acc); 
      text-decoration: none;
      transition-duration: 0.2s;
    }


    .info-dean a:hover {
        color: var(--light);
        letter-spacing: 4px;
    }

    .info-dean h4 {
        font-family: var(--text);
      margin: 22px 0 12px 0;
      font-size: 22px;
      letter-spacing: 2px;
      font-weight: bolder;
    }

    .divider {
        border-bottom: 4px solid var(--dacc);
        width: 80%;
        margin: 0 auto;
    }
</style>
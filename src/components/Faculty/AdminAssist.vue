<template>
    <div class="wrapper">
        <div class="fTitle">
            ADMIN ASSISTANTS
        </div>

        <div id="content1">
            <div id="area">
                <div class="pic">
                    <img src="./assets/Anayron.jpg" alt="Cynthia C. Anayron">
                </div>

                <div class="info">
                    <p>Cynthia C. Anayron</p>
                    <h3>Admin Assistant</h3>
                    <h4>
                        <a href="mailto:canayron@xu.edu.ph">
                            canayron@xu.edu.ph
                        </a>
                    </h4>
                </div>
            </div>

            <div id="area">
                <div class="pic">
                    <img src="./assets/Jaquilmac.jpg" alt="Heidi O. Jaquilmac">
                </div>

                <div class="info">
                    <p>Heidi O. Jaquilmac</p>
                    <h3>Admin Assistant</h3>
                    <h4>
                        <a href="mailto:hjaquilmac@xu.edu.ph">
                            hjaquilmac@xu.edu.ph
                        </a>
                    </h4>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'AdminAssist'
    }
</script>

<style scoped>
    .wrapper {
        position: relative;
        max-width: 100%;
        max-height: 100%;
    }
    
    img{
        border-radius: 6px;
    }

    #content1 {
        display: flex;
        margin: 0 10%;
        justify-content: space-around;
        
        padding: 80px 0 0 0;
    }
</style>
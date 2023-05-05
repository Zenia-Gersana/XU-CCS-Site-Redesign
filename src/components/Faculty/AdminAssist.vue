<template>
    <div class="wrapper">
        <div class="title-adminassist">
            <p>ADMIN ASSISTANTS</p>
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

<style>
    .wrapper {
        position: relative;
        max-width: 100%;
        max-height: 100%;
    }
    
    .title-adminassist {
        font-family: var(--header);
        font-size: 50px;
        margin: 0;
        padding-left: 30px;

        position: relative;
        width: 65%;
        height: 90px;
        left: 10px;
        top: -6%;

        font-style: normal;
        font-weight: 600;
        line-height: 109px;

        color: #6B2685;
    }

    .pic {
        width: auto;
        padding: 8px 8px 0 8px;
    }

    .info {
        font-family: var(--text);
        color: var(--white);
        text-align: center;
        overflow-wrap: normal;
        line-height: 5px;
    }

    .info p {
        font-size: 17px;
        font-weight: bolder;
    }

    .info h3 {
        font-size: 15px;
        font-weight: normal;
    }

    .info a {
        font-size: 15px;
        font-weight: normal;
        color: var(--white);
    }

    .info a:hover {
        color: var(--acc);
    }

    #area {
        border-radius: 10px;
        box-sizing: content-box;
        background-color: #324994;
        width: 268px;
        height: 360px;
    }

    #content1 {
        display: flex;
        margin: 3% 10% 0 10%;
        justify-content: space-around;
        padding: 0 0 2% 0;
    }
</style>
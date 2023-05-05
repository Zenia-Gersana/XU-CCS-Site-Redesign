<template>
    <div class="wrapper">
        <div class="title-chaircoor">
            <p>CHAIRPERSONS & COORDINATORS</p>
        </div>

        <div id="content1">
            <div id="area">
                <div class="pic">
                    <img src="./assets/Mack.png" alt="Patrick Mack">
                </div>

                <div class="info">
                    <p>Patrick J. Mack</p>
                    <h3>CS Chairperson</h3>
                    <h4>
                        <a href="mailto:pmack@xu.edu.ph">
                            pmack@xu.edu.ph
                        </a>
                    </h4>
                </div>
            </div>

            <div id="area">
                <div class="pic">
                    <img src="./assets/Cajilla.jpg" alt="Amor Cajilla">
                </div>

                <div class="info">
                    <p>Cristina Amor T. Cajilla</p>
                    <h3>IS Chairperson</h3>
                    <h4>
                        <a href="mailto:ccajilla@xu.edu.ph">
                            ccajilla@xu.edu.ph
                        </a>
                    </h4>
                </div>
            </div>

            <div id="area">
                <div class="pic">
                    <img src="./assets/Jimenez.jpg" alt="Bambi Jimenez">
                </div>

                <div class="info">
                    <p>Engr. Maria Ramila I. Jimenez</p>
                    <h3>IT Chairperson</h3>
                    <h4>
                        <a href="mailto:mjimenez@xu.edu.ph">
                            mjimenez@xu.edu.ph
                        </a>
                    </h4>
                </div>
            </div>
        </div>

        <div id="content2">
            <div id="area">
                <div class="pic">
                    <img src="./assets/Oliva.jpg" alt="Lowe Oliva">
                </div>

                <div class="info">
                    <p>Patrick Marlowe C. Oliva</p>
                    <h3>EMC Coordinator</h3>
                    <h4>
                        <a href="mailto:poliva@xu.edu.ph">
                            poliva@xu.edu.ph
                        </a>
                    </h4>
                </div>
            </div>

            <div id="area">
                <div class="pic">
                    <img src="./assets/Sabal.jpg" alt="Shayryl Sabal">
                </div>

                <div class="info">
                    <p>Shayryl Mae R. Sabal</p>
                    <h3>MIT Coordinator</h3>
                    <h4>
                        <a href="mailto:ssabal@xu.edu.ph">
                            ssabal@xu.edu.ph
                        </a>
                    </h4>
                </div>
            </div>
        </div>

        <div class="divider"></div>

    </div>
</template>

<script>
    export default {
        name: 'ChairCoor'
    }
</script>

<style>
    .wrapper {
        position: relative;
        max-width: 100%;
        max-height: 100%;
    }
    
    .title-chaircoor {
        font-family: var(--header);
        font-size: 50px;
        margin: 0;
        padding-left: 30px;

        position: absolute;
        width: 65%;
        height: 90px;
        left: 10px;
        top: -6%;

        font-style: normal;
        font-weight: 600;
        line-height: 109px;

        color: #6B2685;
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
    }

    #content2 {
        display: flex;
        margin: 3% 10% 0 10%;
        padding: 0 0 5% 0;
        justify-content: space-around;
    }

    .pic {
        width: auto;
        padding: 8px 8px 0 8px;
    }

    .divider {
        border-bottom: 4px solid var(--dacc);
        width: 80%;
        margin: 0 auto;
    }
</style>
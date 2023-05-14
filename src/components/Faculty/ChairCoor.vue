<template>
    <div class="wrapper">
        <div class="fTitle">
            CHAIRPERSONS & COORDINATORS
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
        margin: 3% 10% 0 10%;
        justify-content: space-around;
    }

    #content2 {
        display: flex;
        margin: 3% 10% 0 10%;
        padding: 80px 0 120px 0;
        justify-content: space-around;
    }

    .divider {
        border-bottom: 4px solid var(--dacc);
        width: 80%;
        margin: 0 auto;
    }
</style>
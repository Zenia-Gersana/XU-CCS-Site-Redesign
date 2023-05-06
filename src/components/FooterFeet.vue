<template>
    <div class="wrapper">
        <div class="content">
            <osrs>get involved</osrs>
            <button id="news">newsworthy</button>
            <button id="mail" onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSexBhwx9xKgcycZ_T8CNt48uvN-oSjEHkSXy0vNQgMwYeVSdg/viewform', '_blank');">mailing list</button>
            <button id="join" onclick="window.open('https://www.facebook.com/XUCCS', '_blank');">join</button>
        </div>
    </div>
</template>

<script>
export default{
    name: 'FooterFeet'
}
</script>

<style scoped>
.content #mail, .content #join{
    display: none;
}

@media (min-width: 1100px) {
  .content #mail{
    display: inline-block;
  }
}

@media (min-width: 1500px) {
  .content #join{
    display: inline-block;
  }
}

.wrapper{
    max-width: 100%;
    max-height: 100%;
    background-color: var(--prime);
}

.content{
    position: relative;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;
    
    margin-left: 30%;
    margin-right: 30%;
    width: auto;
    height: 75px;

    font-family: var(--text);
    color: var(--white);
    font-size: 16px;
    text-transform: uppercase;
}

.content button{
    width: 190px;
    height: auto;
    background-color: var(--acc);
    border-radius: 3px;

    border: none;
    outline: none;
    transition-duration: 0.2s;
    padding: 10px 0;

    font-family: var(--text);
    color: var(--white);
    font-size: 16px;
    text-transform: uppercase;
}

.content button:hover{
    cursor: pointer;
    background-color: var(--dacc);
    font-weight: 700;
    letter-spacing: 1px;
}

.content osrs{
    width: 140px;
    text-transform: uppercase;
    color: var(--white);
}
</style>
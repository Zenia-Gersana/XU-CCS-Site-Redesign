<template>
    <div class="wrapper">
        <div class="content">
            <osrs>get involved</osrs>
            <button>newsworthy</button>
            <button onclick="window.open('https://docs.google.com/forms/d/e/1FAIpQLSexBhwx9xKgcycZ_T8CNt48uvN-oSjEHkSXy0vNQgMwYeVSdg/viewform', '_blank');">mailing list</button>
            <button onclick="window.open('https://www.facebook.com/XUCCS', '_blank');">join</button>
        </div>
    </div>
</template>

<script>
export default{
    name: 'FooterFeet'
}
</script>

<style scoped>

@media (min-width: 0px) {
  .content{
    margin: 0 10%;
  }
}

@media (min-width: 1280px) {
  .content{
    margin: 0 14%;
  }
}

@media (min-width: 1440px) {
  .content{
    margin: 0 22%;
  }
}

@media (min-width: 1920px) {
  .content{
    margin: 0 30%;
  }
}

.wrapper{
    max-width: 100%;
    max-height: 100%;
    background-color: var(--prime);
}

.content { 
    position: relative;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;
    
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
    padding: 10px;
    margin: 0 4px;

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
    width: 190px;
    text-transform: uppercase;
    color: var(--white);
    text-align: center;
}
</style>
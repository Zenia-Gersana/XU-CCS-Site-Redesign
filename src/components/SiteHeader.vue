<template>
  <div class="wrapper">
    <div class="header">
        <div class="ccs">
          <img id="logo" src="./assets/ccs.png" alt="CCS logo" >
          <div class="text">
            <h3>
              XU - CCS
            </h3>
            <h4>
              College of Computer Studies
            </h4>
          </div>
        </div>
        <div class="options">
          <div class="links">
            <button>Course Offerings</button>
            <button>About</button>
            <button>Events</button>
            <button>Faculty</button>
            <button>Enrollment</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.options{
  display: flex;
  float: right;
  align-items: center;
  margin: 0;
}

.links button{
  font-family: "Lexend", "Helvetica", sans-serif;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;

  background-color: var(--prime);
  color: var(--white);
  border: none;
  outline: none;
  cursor: pointer;

  margin-left: 20px;
  transition-duration: 0.3s;
}

.links button:hover{
  color: var(--acc);
}

.links{
  padding: 15px 0px 0px 50px;
  border-top: 1px solid var(--light);
  text-align: right;
  font-size: 16px;
}

.wrapper{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: auto;
  background-color: var(--prime);
}

.header {
  box-sizing: border-box;
  display: flex;
  margin-left: 18.5%;
  margin-right: 18.5%;
  height: 120px;
  justify-content: space-between;
}

.ccs{
  height: 100%;
  overflow: hidden;
  display: flex;
  width: 420px;
  align-items: center;
  float: left;
}

.ccs img{
  height: 92px;
  float: left;
  margin-right: 10px;
}

.text {
  display: inline-block;
  align-items: center;
  color: var(--white);
}
.text h3 {
  margin-top: 10px;
  font-family: var(--header);
  letter-spacing: -0.035em;
  font-weight: bold;
  font-size: 47px;
}

.text h4 {
  margin-top: -55px;
  font-family: var(--text);
  font-size: 15px;
  font-weight: 100;
}

a {
  color: var(--acc);
}
</style>

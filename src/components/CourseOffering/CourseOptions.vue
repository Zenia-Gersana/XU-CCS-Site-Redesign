<template>
  <div>
    <div class="cs">
      <h1 class = "title">BS in Computer Science</h1>
      <p class = "content">
        PAASCU Level 1 accredited | For inquiries: <a href="mailto:cs@xu.edu.ph"> cs@xu.edu.ph </a>
      </p>
      <div class="video-wrapper">
        <vue-plyr>
            <div 
            data-plyr-provider="youtube"
            data-plyr-embed-id="DP4bpEyn124">
            </div>
        </vue-plyr>
      </div>
    </div>

    <div class="is">
      <h1 class = "title">BS in Information Systems</h1>
      <h3 class = "content">
        PAASCU Level 1 accredited | For inquiries: <a href="mailto:is@xu.edu.ph"> is@xu.edu.ph </a>
      </h3>
      <div class="video-wrapper">
        <vue-plyr>
            <div 
            data-plyr-provider="youtube"
            data-plyr-embed-id="TGw1quRFmlQ">
            </div>
        </vue-plyr>
      </div>
    </div>

    <div class="it">
      <h1 class = "title">BS in Information Technology</h1>
      <h3 class = "content">
        For inquiries: <a href="mailto:it@xu.edu.ph"> it@xu.edu.ph </a>
      </h3>
      <div class="video-wrapper">
        <vue-plyr>
            <div 
            data-plyr-provider="youtube"
            data-plyr-embed-id="V-VM7pFhnso">
            </div>
        </vue-plyr>
      </div>
    </div>

    <div class="emc">
      <h1 class = "title">BS in Entertainment and Multimedia Computing</h1>
      <h3 class = "content">
        For inquiries: <a href="mailto:computerstudies@xu.edu.ph"> computerstudies@xu.edu.ph </a>
      </h3>
      <div class="video-wrapper">
        <vue-plyr>
            <div 
            data-plyr-provider="youtube"
            data-plyr-embed-id="Xkw0UKGWdac">
            </div>
        </vue-plyr>
      </div>
    </div>

    <div class="mit">
     <h1 class = "title">Master in Information Technology</h1>
      <h3 class = "content">
        For inquiries: <a href="mailto:computerstudies@xu.edu.ph"> computerstudies@xu.edu.ph </a>
      </h3>
      <div class="video-wrapper">
        <vue-plyr>
            <div 
            data-plyr-provider="youtube"
            data-plyr-embed-id="NoEnzNFXEg8">
            </div>
        </vue-plyr>
      </div>
    </div>
  </div>
</template>

<style>

.video-wrapper{
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.title{
  font-family: "Verdana";
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.content{
  font-family: "Verdana";
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.info a {
  font-size: 15px;
  font-weight: normal;
  color: var(--white);
}
.info a:hover {
  color: var(--acc);
}
</style>
<template>
    <div class="wrapper">
        <h2>Student council</h2>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FXU.CSSC%2F&show_posts=true&width=400&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="400" 
            height="700" 
            style="border:none;overflow:hidden" 
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; 

            clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
    </div>
</template>

<script>
export default{
    name: 'FBFeed'
}
</script>

<style scoped>
h2{
    font-family: var(--text);
    font-size: 24px;
    font-weight: 500;
    color: var(--black);
    padding: 0 5px 10px 5px;
    margin: 0;
    letter-spacing: 2px;
    text-transform: uppercase;
}

iframe{
    padding: 10px;
}

.wrapper{
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    padding: 0 20px;
    text-align: center;
    align-content: center;
    border-left: 2px solid var(--light);
}
</style>
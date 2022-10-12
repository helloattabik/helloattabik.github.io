        const preloader_active = document.querySelector("#fake-preloader .fp-container");
        const preloader = document.querySelector("#fake-preloader");
        const fp_page2_active = document.querySelector (".fp-page2 h1");

        $(document).ready(function(){
    
            var count = 0;
            var counter = setInterval(function(){
                if(count <= 100){
                    $('.fp-count').text(count);
                    count++;
                }else if (count <= 200) {
                    preloader_active.classList.add("active");
                    count++;
                }
                else{
                    fp_page2_active.classList.add("active");
                    preloader.classList.add("active"); 
                }
            }, 10);
        });
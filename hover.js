
let image = document.querySelectorAll('.project-image');
let description = document.querySelectorAll('.project_description');
let information = document.querySelectorAll('.info-hover');

information.forEach((val, ii) => {
    val.addEventListener('mouseover', ()=>{
        description.forEach((desc, id) => {
            image.forEach((img, im) => {
                if(ii == id && ii == im){
                    desc.style.display = "block";
                    img.style.filter = "blur(5px)";
                }
                if(id%2 == 0){
                    desc.style.color = "black";
                }
            });
        });
    })

    val.addEventListener('mouseleave', ()=>{
        description.forEach((desc, id) => {
            image.forEach((img, im) => {
                if(ii == id && ii == im){
                    desc.style.display = "none";
                    img.style.filter = "blur(0px)";
                }
            });
        });
    })
});
const closeButton = document.querySelector('.lightbox-close');

const nextButton = document.querySelector ('.lightbox-next');
const prevButton = document.querySelector ('.lightbox-prev');

const lightBox = document.querySelector('.lightbox');
const galleryItems= document.querySelectorAll('.gallery-item')
const lightboximage = document.querySelector('.lightbox-image');

function showimage(event){
    // Show lightbox
    

   
}

function hideImage(event) {
    event.preventDefault();
    lightBox.classList.add('hidden');
}

// hide lightbox when close button is clicked
closeButton.onclick = hideImage

// for every gallery item, set onclick handler to show image
for(let i = 0; i < galleryItems.length; i++){
    let item = galleryItems[i];
    // item.onclick = showimage

    item.onclick = function(event){
        lightBox.classList.remove('hidden');

        //get current galleryItem
        const elementClickedOn = event.target;
        const galleryItemParent = elementClickedOn.parentElement;

        //replace contents of lightbox-image with current image and caption
        lightboximage.innerHTML = galleryItemParent.innerHTML;
        console.log(lightboximage);

        nextButton.onclick = function(){   
            if (i < galleryItems.length){
                i += 1 
                lightboximage.innerHTML = galleryItems[i].innerHTML;
            } else {
                alert("this is the last image");
            }
        }

        prevButton.onclick = function(){   
            i -= 1 
            lightboximage.innerHTML = galleryItems[i].innerHTML;
        }

    }
    
}

// previous/next button
// function showDiv(which) {
//     for(i = 0; i < 13; i++) {
//        document.getElementById("image"+i).style.display="none";
//     }
//     //in the next 2 lines, you make sure which isn't lower than 1, and isn't greater than the number of images
//     if(which < 1) which = 1;
//     if(which > 13) which = 13;
//     document.getElementById("image" + which).style.display = "block";
//     currentImage = which;

    
//  } 


    

document.getElementById('col1').addEventListener('mouseenter', function() {
    // Scale up the image
    const img = this.querySelector('.img img');
    img.style.transform = 'scale(1.1)';
    img.style.transition = 'transform 0.3s ease';
    
    // Change plus icon color to black
    const plusIcon = this.querySelector('.ri-add-box-line');
    plusIcon.style.backgroundcolor = 'black';
    plusIcon.style.transition = 'color 0.3s ease';
});

document.getElementById('col1').addEventListener('mouseleave', function() {
    // Reset image scale
    const img = this.querySelector('.img img');
    img.style.transform = 'scale(1)';
    
    // Reset plus icon color
    const plusIcon = this.querySelector('.ri-add-box-line');
    plusIcon.style.color = '';
});



// for page 04 6 images

// js for images
document.addEventListener('DOMContentLoaded', function() {
    // Get all the filter links
    const filterLinks = document.querySelectorAll('.container.mx-auto a');
    
    // Get the parent container of all image rows
    const container = document.querySelector('.container-fluid.mx-auto');
    
    // Get all image columns
    const imageColumns = [
        document.getElementById('col4'),
        document.getElementById('col5'),
        document.getElementById('col6'),
        document.getElementById('col7'),
        document.getElementById('col8'),
        document.getElementById('col9')
    ];
    
    // Store the original HTML structure
    const originalHTML = container.innerHTML;
    
    // Function to shuffle array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
    
    // Function to reset to original order
    function showAllImages() {
        container.innerHTML = originalHTML;
    }
    
    // Function to randomize positions
    function randomizeImages() {
        // Create a shuffled array of columns
        const shuffledColumns = shuffleArray(imageColumns);
        
        // Clear the container
        container.innerHTML = '';
        
        // Create new rows
        const row1 = document.createElement('div');
        row1.className = 'row mx-auto mt-lg-5 ms-lg-5 ps-lg-5';
        row1.style.border = '';
        
        const row2 = document.createElement('div');
        row2.className = 'row mx-auto mt-lg-5 ms-lg-5 ps-lg-5';
        row2.style.border = '';
        
        // Add first 3 columns to first row
        for (let i = 0; i < 3; i++) {
            row1.appendChild(shuffledColumns[i]);
        }
        
        // Add remaining columns to second row
        for (let i = 3; i < 6; i++) {
            row2.appendChild(shuffledColumns[i]);
        }
        
        // Add rows to container
        container.appendChild(row1);
        container.appendChild(row2);
    }
    
    // Add event listeners to all filter links
    filterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (link.textContent === 'Show All') {
                showAllImages();
            } else {
                randomizeImages();
            }
        });
    });
});


// swiper code 
 var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
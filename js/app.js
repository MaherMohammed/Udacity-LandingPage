
function stylingNavBar(navBar) {
    navBar.style.listStyleType = "none";
    navBar.style.margin = '0';
    navBar.style.padding = '0';
    navBar.style.overflow = 'hidden';
    navBar.style.backgroundColor = '#333';
}

function removeActiveFromAll(innerHTMLOfTarget) {
    const anchors = document.querySelectorAll('a');
    anchors.forEach(function(anchor , index , all) {
        if (anchor.innerHTML !== innerHTMLOfTarget) {
            anchor.style.backgroundColor = '#333';
            anchor.classList.remove('active');
        } 
    })
}

function removeActiveFromAllSections(sections,targetSection) {
    sections.forEach(function(sec,index,all) {
        if (sec.getAttribute('id') !== targetSection) {
            sections[index].classList.remove('active-section')
        }
    })
} 


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// build the nav
//get the sections
const sections = document.querySelectorAll('section')
//start to add children to the nav
const navBar = document.querySelector('ul')
//styling the navBar
stylingNavBar(navBar);

sections.forEach(function(section,index,secs) {
    navBar.insertAdjacentHTML('beforeend',`<li></li>`);
})
//adding links to navBar icons
const listItems = document.querySelectorAll('li')
listItems.forEach(function (item,index,items) {
    item.style.float = 'left';
    const a = document.createElement('a');
    a.textContent = `section${index+1}`;
    a.setAttribute('href',`#section${index+1}`);
    a.style.display = 'block';
    a.style.color = 'white';
    a.style.textAlign = 'center';
    a.style.padding = '14px 16px';
    a.style.textDecoration = 'none';
    
    a.addEventListener('mouseover',function() {
        a.style.backgroundColor = '#111'; 
    })

    a.addEventListener('mouseout',function() {
        //check if it is active or not
        if (a.classList.contains('active')) {
            a.style.backgroundColor = '#338AFF';
        }
        else{
            a.style.backgroundColor = '#333'
        }
    })

    a.addEventListener('click',function(event) {
        a.classList.add('active');
        //remove active class from other tabs
        removeActiveFromAll(a.innerHTML);
        a.scrollIntoView({behavior:"smooth",block: "start"});
        
       
    })
    item.appendChild(a);
})




document.addEventListener('scroll',function() {
    //detect the viewed section
    sections.forEach(function(section,index,all) {
        if (isInViewport(section)) {
            section.classList.add('active-section')
            // console.log(section.getAttribute('id'))
            removeActiveFromAllSections(sections,section.getAttribute('id'))
        }
    })
})


 
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



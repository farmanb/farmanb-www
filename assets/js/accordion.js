/*Accordion behavior*/
var acc = document.getElementsByClassName("accordion");
var i;

/*Add the on-click to each accordion object*/
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
	
	this.classList.toggle("active");
	var panel = this.nextElementSibling;
	if (panel.style.maxHeight){
	    panel.style.maxHeight = null;
	} else {
	    panel.style.maxHeight = panel.scrollHeight + "px";
	}
	
	/*Whenever triggered, close the other accordions.*/
	for (j = 0; j < acc.length; j++){
    	    if (acc[j] != this){
        	var panelj;
		panelj = acc[j].nextElementSibling;
        	if (panelj.style.maxHeight){
            	    acc[j].classList.toggle("active");
		    panelj.style.maxHeight = null;
		}
	    }
	}
    }
}

(function() {
    'use strict';
    
    var $ = function(id) {
        return document.getElementById(id);
    };
    var qs = function(sel) {
        return document.querySelector(sel); 
    };
    var qsa = function(sel) {
        return document.querySelectorAll(sel); 
    };
    
    window.onload = function() {
        initialize();
        
    };
    
    function initialize() {
		var ajaxGetPromise = AjaxGetPromise("index.php");
		ajaxGetPromise
		    .then(JSON.parse)
		    .then(displayBlocks)
		    .catch(havingError);
	}
	
	function displayBlocks(response) {
		for (var i = 0; i < Math.ceil(response.length / 4); i++) {
            var row = document.createElement("div");
			row.classList.add("row");
			
			for (var j = 0; j < Math.min(4, response.length - 4 * i); j++) {
				var block = document.createElement("a");
				block.href = response[4*i + j].url;
					var page = document.createElement("div");
					page.classList.add("page");
					page.style.background = response[4*i + j].color;
						var divTitle = document.createElement("div");
						divTitle.classList.add("div-title");
							var title = document.createElement("h2");
							title.classList.add("title");
							title.innerHTML = response[4*i + j].name;
						divTitle.appendChild(title);
						var divImg = document.createElement("div");
						divImg.classList.add("div-img");
							var image = document.createElement("img");
							image.classList.add("div-img");
							image.src = "img/div-img/" + response[4*i + j].img;
						divImg.appendChild(image);
					page.appendChild(divTitle);
					page.appendChild(divImg);
				block.appendChild(page);
				row.appendChild(block);
			}
			$("main").appendChild(row);
			
			
			
        }    
	}
	
	function havingError(errorMessage) {
        alert("Ohhh... There is something wrong: " + errorMessage);
    }
    
    
})();
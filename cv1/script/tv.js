function myFunction() {
   var x = document.getElementById("demo");
    if (x.style.display === "none") {
        x.style.display= "inline-block";
    }
    else {
            x.style.display= "none";
        }    
    }
$(function() {
        $('#achat_themes').change( function() {
                var rel = $('link[title="chat_theme"]');
                switch($(this).val())
                {  
                    case "Water":     
                    {
                        rel.attr('href', 'content/styles/water.css');  
                        break;
                    }

                    case "Rotate":  
                    {
                        rel.attr('href', 'content/styles/rotate.css');  
                        break;
                    }
                    case "Stamp":  
                    {
                        rel.attr('href', 'content/styles/stamp.css');  
                        break;
                    } 
                    case "Letters":  
                    {
                        rel.attr('href', 'content/styles/letters.css');  
                        break;
                    }
                    case "Down":  
                    {
                        rel.attr('href', 'content/styles/down.css');  
                        break;
                    }
                    case "Shake":  
                    {
                        rel.attr('href', 'content/styles/shake.css');  
                        break;
                    }
                    case "Tbody_down":  
                    {
                        rel.attr('href', 'content/styles/tbody_down.css');  
                        break;
                    }
                    case "TV":  
                    {
                        rel.attr('href', 'content/styles/tv.css');  
                        break;
                    }
                        case "Book":  
                    {
                        rel.attr('href', 'content/styles/book.css');  
                        break;
                    }
                    
                }
            });
    });
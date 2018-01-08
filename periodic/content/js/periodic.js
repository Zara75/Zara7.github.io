           
function createTable(options)
{
	var $main = $('<main>');
    var matrix = options.data.matrix;
    var slots = options.data.slots;
    
    options.parent.append($main);
	
    options.parent = $main;
	for(var i = 0; i < matrix.length; i++)
	{
		options.data = matrix[i];
		createRow(options);
	}
    
    options.data = slots;
    options.parent = $main;
    createPanel(options);
}

function createRow(options)
{
	var $article = $('article');
	options.parent.append($article);
	var data = options.data;

	for(var i = 0; i < data.length; i++)
	{
		options = data[i];
		options.parent = $article;
		createTile(options);
	}
}

function createTile(options)
{
	var $section, $ruby, $rb, $rt, $samp, $ins;
    $section = $('section');
    
    if(undefined === options.name)
        {
            $section.className = options.className;
        }
    else {
            $rt = $('rt')
    	.text(options.number);
    
    $rb = $('rb')
    	.text(options.abbr)
    	.attr('title', options.latinName);
	        
    $ruby = $('ruby')
    	.append($rt)
        .append($rb);
    
    $samp = $('samp')
    	.text(options.name);
    
    $ins = $('ins')
    	.text(options.weight);

    $section = $('section')
        
        .append($ruby)
        .append($samp)
        .append($ins);
        
        $section.className = options.elementClassName;
    }
    
    options.parent.append($section);
}
        
function createPanel(options)
{
    var $kbd = $('kbd') 
        .appendTo(options.parent);
    var data = options.data;
    
    for(var i = 0; i < options.data.length; i++){
        var slotOptions = data[i];
        slotOptions.parent = $kbd;
        
        new createSlot(slotOptions);
    }
}
function createSlot(options)
{
    var $strike = $('<strike>') 
        .text(options.slotName)
        .appendTo(options.parent);
}
createTable({ parent: document.body, data: source });
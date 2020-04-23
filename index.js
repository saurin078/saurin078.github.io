var modal = $( "#myModal" );
$( "#new-shelf" ).on( "click", function( e ) {
    modal.show();
});

$( ".close" ).on( "click", function( e ) {
    modal.hide();
});

var items = $( "#items");
$( "#new-item" ).on( "click", function (e) {
    var n = $( ".single-item" ).length + 1
    var html = $( 
        "<div class=\"single-item\" id=\"item-" + n + "\">\
          <label for= \"item-" + n + "-title\">Item " + n + ":</label><br>\
          <input type=\"text\" id=\"item-" + n + "-title\" name=\"item-" + n + "-title\"><br>\
          <label for=\"item-" + n + "-img\">URL to Item " + n + " Image:</label><br>\
          <input type=\"text\" id=\"item-" + n + "-img\" name=\"item-" + n + "-img\">\
        </div>"
    );
    items.append(html);
});

$( "#delete-item").on( "click", function( e ){
    $( ".single-item" ).last().remove();
});

// Putting together the new shelf itself
$( "#submit-new-shelf-form" ).on( "click", function( e ) {
    var shelf_name = $( "#shelf-name" ).val();
    var num_shelves = $( ".shelf" ).length;

    if (num_shelves==0) {
        $( ".shelfs" ).prepend($( "<section class=\"shelf\">" ));
    }
    else {
        $( ".shelfs" ).append($( "<section class=\"shelf\">" ));
    }

    var current_shelf = $( ".shelf" ).last();
    current_shelf.prepend($( "<header>" + shelf_name + "</header>" ));
    current_shelf.append( $( '<section class="figures"></section>' ));
    var current_shelf = $( ".figures" ).last();
    items = $( ".single-item" );

    items.each(function(index, value){
        var num = index+1;
        var title = $( ("#item-" + num + "-title") ).val();
        var img = $( ("#item-" + num + "-img") ).val();
        console.log(title);
        console.log(img);
        html = $(
            "<figure> \
              <img src=\"" + img + "\">\
              <figcaption>" + title + "</figcaption>\
            </figure>"
        );
        
        if ($( ".figures" ).length==0) {
            current_shelf.prepend(html);  
        }      
        else {
            current_shelf.append(html);  
        }
    
    });

    //Clean up the modal
    modal.hide();
    $('#new-shelf-form').trigger("reset");
});
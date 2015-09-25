$(function() {
    /**
     * Created by Victoria on 9/16/2015.
     */

    $('.cosplay-pane').each(function(){
        var pName = $(this).attr("pName");
        var navbar = $(".navbar-buttons");
        var itemHTML = '<li pName="'+pName+'" class="navbar-button cosplay-button" style="display:none"><a>'+ pName +'</a></li>';
        navbar.append(itemHTML);
    });

    $('.work-pane').each(function(){
        var pName = $(this).attr("pName");
        var navbar = $(".navbar-buttons");
        var itemHTML = '<li pName="'+pName+'" class="navbar-button work-button"><a>'+ pName +'</a></li>';
        navbar.append(itemHTML);
    });
    
    var flag = false;
    $('.navbar-button').bind("click touchstart", function(){
        if(!flag){
            flag = true;
            setTimeout(function(){flag = false;}, 100);
        $('.content-pane').hide();
        var pName = $(this).attr("pname");
        $('.content-pane[pName="'+pName+'"]').show();
        }
        return false;
    });

    $('#flip-side-button').bind("click touchstart", function(){
        if(!flag){
            flag = true;
            setTimeout(function(){flag = false;}, 100);
        if($('.work-button').is(':visible')){
            $('.work-button').hide();
            $('.cosplay-button').show();
            $('#navbar').css('background','#f96e5b');
            $('#flip-side').css('color','#494e5b');
            $('.card-button').each(function(){
                $(this).css('background-image', 'linear-gradient(rgba(73,78,91,0),rgba(73,78,91,.5))');
            });
        }
        else {
            $('.work-button').show();
            $('.cosplay-button').hide();
            $('#navbar').css('background','#494e5b');
            $('#flip-side').css('color','#f96e5b');
            $('.card-button').each(function(){
                $(this).css('background-image', 'linear-gradient(rgba(228,104,93,0),rgba(228,104,93,.5))');
            });
        }
        }
        return false;
    });

    $('.project-profile').each(function(){
        var pName = $(this).attr("pName");
        var project_navbar = $(".work-project-cards");
        var itemHTML = "<div pName='"+pName+"' class='card-button'><h1>"+pName+"</h1></div>";
        project_navbar.append(itemHTML);
    });

    $('.art-profile').each(function(){
        var pName = $(this).attr("pName");
        var project_navbar = $(".cosplay-project-cards");
        var itemHTML = "<div pName='"+pName+"' class='card-button'><h1>"+pName+"</h1></div>";
        project_navbar.append(itemHTML);
    });

    $('.card-button').bind("click touchstart", function(){
        if(!flag){
            flag = true;
            setTimeout(function(){flag = false;}, 100);
       $('.profile').hide();
        var pName = $(this).attr("pname");
        $('.profile[pName="'+pName+'"]').show();
        }
        return false;
    });

    $('.art_image').each(function(){
        var imgID = $(this).attr("href");
        var img = $("img", this);
        var imgSrc = $(img).attr("src");
        imgID = imgID.substring(1, imgID.length);
        var lightbox = $('#lightbox');
        var itemHTML = '<div class="lightbox-target" id="'+imgID+'"><img src="'+imgSrc+'" alt=""/><a class="lightbox-close" href="#"></a></div>';
        lightbox.append(itemHTML);
        console.log(itemHTML);
    });

});

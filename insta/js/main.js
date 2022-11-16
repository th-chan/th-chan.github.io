$(function () {
    $.ajax({
        url: 'https://feeds.behold.so/EEJPDvwxAQDQjPKMtlzO',
        method: 'GET',
        dataType: 'json',
        success: function(data){
          console.log('behold succes: ', data);
          $('#behold').html('');
          data.forEach(element => {
            let instaItem = '<a href="' + element.permalink + '" target="_blank">';
            if (element.mediaType == "IMAGE") {
                instaItem += '<img src="' + element.mediaUrl + '"/>';
            }
            instaItem += '</a>';
            $('#behold').append(instaItem);
          });
        }
    });

    $(document).on('click', '.wx-card', function(e){
        e.preventDefault();

        console.log('test ', $(this));
    });


    // official instagram graph API
    $.ajax({
      url: "https://graph.instagram.com/me/media",
      type: "get", //send it through get method
      data: { 
        fields: "caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username", 
        access_token: "IGQVJYUHdPVHNOdGlKQUU3U1hpOG03R3dyVXpWZATVkVkxkTEVpUXl0OVZApaDFxX3Fad3c2WXlnbXVtUUZAZAaVh1aGhxdDdyS28tX1hyV2l2UTJ4MWd1YU9xc0txb2pGSk9NWGhFM1pB"
      },
      success: function(response) {
        //Do Something
        console.log('official success: ', response);
        let instaItems = '';
        response.data.forEach((value, index) => {
          if (index <= 3) {
            instaItems += '<div class="insta-item"><a href="' + value.permalink + '" target="_blank"><img src="' + value.media_url + '" /></a></div>';
          }
        });
        $('#insta-post-wrapper').append(instaItems);
      },
      error: function(xhr) {
        //Do Something to handle error
        console.log('official fail: ', xhr);
      }
    });
});
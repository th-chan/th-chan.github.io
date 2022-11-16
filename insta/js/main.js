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
        fields: caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username, 
        access_token: IGQVJYUXJuc2ZAGcnhGdTFZAQjJzR0dvT2J1YUlLMXN5YXNwT25RRG96SjhXWFltdXNPdEdJWE1VSXVOMzIyTkgyOVA2QzNZAcVh2ci11b1VUNEZARM00wakEwY1ZAYdm1TNW9wQm00Vl93
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
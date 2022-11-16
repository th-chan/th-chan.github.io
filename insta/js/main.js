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
});
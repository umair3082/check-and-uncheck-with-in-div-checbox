$('#ContentPlaceHolder1_cblSpecimens').find('input[type="checkbox"]').each(function () {
                       
                            $(this).closest('span').addClass('checked');
                            $(this).prop('checked', true);
                       
                    });

$('#ContentPlaceHolder1_cblSpecimens').find('input[type="checkbox"]').each(function () {
                       
                            $(this).closest('span').removeClass('checked');
                            $(this).prop('checked', false);
                       
                    });

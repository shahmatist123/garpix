$(document).ready(function () {
    $('.thanks1').on('click', function () {
        $('.checkbox').prop('checked', false)
        $('.thanks2').css('color', '#00D36D')
        $('.thanks1').css('color', '#000')

    })
    $('.thanks2').on('click', function () {
        $('.checkbox').prop('checked', true)
        $('.thanks1').css('color', '#00D36D')
        $('.thanks2').css('color', '#000')
    })
    $('.checkbox').on('click', function () {
        if ( $('.checkbox').prop('checked')){
            $('.thanks1').css('color', '#00D36D')
            $('.thanks2').css('color', '#000')
        }
        else{
            $('.thanks2').css('color', '#00D36D')
            $('.thanks1').css('color', '#000')
        }
    })
    $('.nav-account-line1__btn1').on('click', function () {
        $('.nav-account-line1__modal').css('opacity', '0')
        $('.nav-account-line1__modal').css('pointer-events', 'none')
        $('.nav-account-line1__modal').css('transform', 'translate(-45%,50%)')

    })

    $(window).on('resize', function () {
        windowWidth = $('body').width()
    })
    windowWidth = $('body').width()
    $('.nav-account-line2__bg').on('click', function () {
        $('.nav-account-line2__modal').css('opacity', '0')
        $('.nav-account-line2__modal').css('pointer-events', 'none')
        $('.nav-account-line2__bg').css('opacity', '0')
        $('.nav-account-line2__bg').css('pointer-events', 'none')
        $('.nav-account-line2__modal').css('top', '-2vw')
        $('body').css('overflow', 'auto')
        $('body').css('width', '')
    })
    $('nav .nav-account-line2 img').on('click', function () {
        $('.nav-account-line2__modal').css('opacity', '1')
        $('.nav-account-line2__modal').css('pointer-events', 'auto')
        $('.nav-account-line2__modal').css('top', '-0.75vw')
        $('.nav-account-line2__bg').css('opacity', '1')
        $('.nav-account-line2__bg').css('pointer-events', 'auto')
        $('body').css('overflow', 'hidden')
        $('body').css('width', windowWidth + 'px')

    })

})
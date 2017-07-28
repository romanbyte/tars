
(function scrollspy() {
    $('body').scrollspy({ target: '#navbarSpy' });

    new Tether({
        element: '#navbarSpy',
        target: '.left-nav-area',
        attachment: 'top left',
        targetAttachment: 'middle left',
        constraints: [{
            to: 'window',
            pin: ['top']
        }]
    });

})();
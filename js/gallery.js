hs.graphicsDir = 'galleries/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.wrapperClassName = 'dark borderless floating-caption';
hs.fadeInOut = true;
hs.dimmingOpacity = .75;

// Add the controlbar
if (hs.addSlideshow) hs.addSlideshow({
    //slideshowGroup: 'group1',
    interval: 5000,
    repeat: false,
    useControls: true,
    fixedControls: 'fit',
    overlayOptions: {
        opacity: .6,
        position: 'bottom center',
        hideOnMouseOut: true
    }
});

$("#zoom_02").elevateZoom({tint:true, tintColour:'#888888', tintOpacity:0.5, zoomWindowPosition: 6, zoomWindowHeight: 450, zoomWindowWidth:1200, borderSize: 1, easing:true});
$("#zoom_04c").elevateZoom({tint:true, tintColour:'#888888', tintOpacity:0.5, zoomWindowPosition: 14, zoomWindowHeight: 450, zoomWindowWidth:1200, borderSize: 1, easing:true});

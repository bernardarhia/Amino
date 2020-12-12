
let smoothScroll = new scrollToSmooth('a', {
    targetAttribute: 'href',
    duration: 1200,
    durationRelative: false,
    durationMin: false,
    durationMax: false,
    easing: 'easeOutCubic',
    onScrollEnd: (data) => { 
       
     },
    fixedHeader: null
  })
  smoothScroll.init();



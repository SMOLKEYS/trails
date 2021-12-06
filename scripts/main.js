Vars.content.bullets().each(e => {
    
    if(e.invisible) return;
    
    e.trailEffect = Fx.trailFade;
    e.trailLength = 10;
    
    if(!e.backColor) return;
    
    e.trailColor = e.backColor;

});

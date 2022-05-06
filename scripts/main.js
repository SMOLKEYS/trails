Vars.content.bullets().each(e => {
    
    if(e.invisible) return;
    
    e.trailEffect = Fx.trailFade;
    e.trailLength = 10;
    
    if(!e.backColor){
        e.trailColor = e.lightColor;
        return;
    };
    
    e.trailColor = e.backColor;

});

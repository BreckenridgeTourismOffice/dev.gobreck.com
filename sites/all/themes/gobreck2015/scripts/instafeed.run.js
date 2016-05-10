    var userFeed = new Instafeed({
        get: 'user',
        userId: 211478099,
        accessToken: '7585000.467ede5.469c8ad4a57644c898980d28dbf80491',
        resolution: 'standard_resolution',

        limit:10,
        template: '<div class="scroll" style="float:none; height:auto;margin-top:5px; margin-right:auto; margin-left:auto; display:inline-block;font-family:arial;font-size:11px; overflow:hidden;width:257px; height:auto; background-color:transparent; text-align:left; color:#333; border-bottom:1px dotted #ccc;"><div style="width:257px; height:auto;overflow:hidden; margin-bottom:10px;margin-left:auto; margin-right:auto;"><a href="{{link}}" target="_blank"><img style="border:1px solid #fff;margin-left:-1px;margin-top:-1px;" src="{{image}}" /></a></div></div>'
    });
    userFeed.run();


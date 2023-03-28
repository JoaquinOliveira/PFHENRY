/*
______ ______   _                                             _                 
|  _  \| ___ \ | |                                           | |                
| | | || |_/ / | |__    __ _  _   _   _ __ ___   _   _   ___ | |__    __ _  ___ 
| | | || ___ \ | '_ \  / _` || | | | | '_ ` _ \ | | | | / __|| '_ \  / _` |/ __|
| |/ / | |_/ / | | | || (_| || |_| | | | | | | || |_| || (__ | | | || (_| |\__ \   
|___/  \____/  |_| |_| \__,_| \__, | |_| |_| |_| \__,_| \___||_| |_| \__,_||___/  
                               __/ |                                            
                              |___/
 _   _  _      _                                                    _        
| | | |(_)    | |                                                  | |       
| | | | _   __| |  __ _  ___      _   _  _ __    __ _   ___   ___  | |  __ _ 
| | | || | / _` | / _` |/ __|    | | | || '_ \  / _` | / __| / _ \ | | / _` |
\ \_/ /| || (_| || (_| |\__ \ _  | |_| || | | || (_| | \__ \| (_) || || (_| |
 \___/ |_| \__,_| \__,_||___/( )  \__,_||_| |_| \__,_| |___/ \___/ |_| \__,_|
                             |/                                              

*/

const { app } = require("./src/app");
const { db } = require("./src/db.js");

db.sync({ force: true }).then(() => {
  app.listen(3001, () => {
    console.log("listening on port 3001");
  });
});



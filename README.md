# taskManager
Heroku deployement
Step -1 Download heroku cli 
step -2 Check in cmd whether it is installed or not   
        write in cmd 
        -> heroku
        -> heroku login 
Step - 3 Create new App from heroku website
        write in cmd
        -> git remote -v (To check the remotes)
        -> heroku git:remote -a <nameOfApp>
Step - 4 Setup all environment variables that is .env
        write in cmd
        -> heroku config
        -> heroku config:set API_KEY = "Your Api key"
        

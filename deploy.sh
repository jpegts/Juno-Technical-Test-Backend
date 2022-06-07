// Login To Heroku
sudo heroku login 

// Connecter au Hub des conteneurs dans Heroku
sudo heroku container:login 

// Créer un deyno( un projet dans Heroku ) -- Cette étape ne se fait que la première fois
heroku create tasks-juno

// Build le container Docker
sudo docker build -t registry.heroku.com/tasks-juno/web .

// Push le container au service heroku 
sudo docker push registry.heroku.com/tasks-juno/web 

// Release the app to our app - hna shghoul merge ta3 les derniers changement m3a ouésh kan y exister men 9bal 
sudo heroku container:release web -a tasks-juno

// Ouvrer l app dans le browser 
heroku open -a tasks-juno

// Pour logger ouésh rah yessra f heroku ( Terminal Win Rah Yet runna our service )
heroku logs --tail -a tasks-juno
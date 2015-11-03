![General Assembly Logo](http://i.imgur.com/ke8USTq.png)

#WDI Seattle Install Fest

For the first portion of the class, we'll be working exclusively inside of the browser and Node. We'll be installing the following tools.


* Homebrew
* Git
* Node
* Oh my ZSH
* iTerm
* Postgres.app
* Ruby
* Rails


##Homebrew
Homebrew is a package manager that we will use to install various command line tools in our class.

Open up terminal, and paste the following command to install Homebrew. You might be prompted to install XCode Command Line Tools during the install process.

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
You may be prompted to installed xcode command line tools. When prompted, click and install through that, and you're homebrew installation will continue.

After the installation process, run the command `brew doctor`. If any warnings or errors are displayed, we will need to resolve them before proceeding with the rest of the install fest.


##GIT
Before we do this process, please make sure you have signed up for an account on [Github](http://www.github.com). We will be installing a version of GIT from home brew and also configuring it.

To install GIT
```
brew install git
```

####Configuring GIT

Using your email credentials for GIT, run these commands with your user and email configured.

```
git config --global user.name "YOUR-USERNAME"
git config --global user.email YOUR-EMAIL-ADDRESS
git config --global push.default simple
git config --global credential.helper cache
```

* **REPLACE `YOUR-USERNAME` WITH YOUR ACTUAL GITHUB USERNAME**
* **REPLACE `YOUR-EMAIL-ADDRESS` WITH YOUR ACTUAL E-MAIL ADDRESS**

####Setting up SSH Key
You might find your self having to re-authenticate GIT every time you work on your command line. Setup SSH Keys to let Github remember your machine in the future.

* [Github Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys/)

##Node
We'll be using the official Node installer provided from [nodejs.org](http://www.nodejs.org)

Download and run the installer. The installation usually goes smoothly, and you can verify Node is working by restarting terminal, and typing

Verify the installation afterwards by running

```
node -v
npm -v
```

The above should display without any errors.

To finish up your installation, run this command to allow for global installations of npm tools.

```
sudo chown -R $USER /usr/local/lib

```


##Sublime 3
We'll be running **Sublime 3**, not Sublime 2 as our text editor of choice.

Download and install version 3 from [http://www.sublimetext.com/3](http://www.sublimetext.com/3)

It is a pretty typical installation for an app, but we need to add a shortcut so we can load sublime from the Terminal.

```
ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl
```
Restart terminal, and you should be able to open a folder to edit by typing `subl .`


##ZSH
Oh my ZSH?!!! We will be tricking out commandline with another shell. A shell is an interface into our computer, and we will be using a lot to run commands.

We'll be using a shell and configuration package called [Oh-My-Zsh](https://github.com/robbyrussell/oh-my-zsh)

To install, we will run

```
curl -L http://install.ohmyz.sh | sh
```

Restart Terminal, and you should see a brand new and colorful command prompt.

##iTerm
For those running, mac, download iterm2, a better featured terminal.
[iterm2](http://iterm2.com/downloads.html)

Drag and drop into your Applications folder.


##Postgres.app
We will be using a relational database called Postgres for Node and Rails portion our class. Download

Download and install from [http://postgresapp.com/](http://postgresapp.com/)

If you have successfully configured zsh and sublime, the following command should work.

```
subl ~/.zshrc
```
Your sublime editor will popup with configuration settings, at the bottom of the file append

```
export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/9.4/bin
```

Save the file, close Sublime, and restart your terminal.

Type `which psql` at which point should display

```
/Applications/Postgres.app/Contents/Versions/9.4/bin/psql
```


#Installing Ruby

###Install rbenv
rbenv lets us change ruby verions on the fly, useful for working with diffrent versions.

```
brew update
brew install rbenv
echo 'eval "$(rbenv init -)"' >> ~/.zlogin
source ~/.zlogin
```

###Configuring rbenv
```
brew update

brew install rbenv-gem-rehash
brew install ruby-build

rbenv install 2.2.2
rbenv global 2.2.2
```

###Install Rails

```
sudo gem update
sudo gem install rails --no-rdoc --no-ri
```
You may need to press "yes" for various entries


#Verify your installation

Run each of these commands and then call someone over to validate your installation is correct.

```
rails -v
ruby -v

node -v
npm -v

git --version
psql --version
subl -v
ssh -T git@github.com

```

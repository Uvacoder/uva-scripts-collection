import os

ghEmail = input("Enter your github email: \n");
ghName = input("Enter your name: \n");

commands = [
  # GIT SETUP
  "git config --global user.email "+ ghEmail,
  "git config --global user.name "+ ghName,
  'git config --global init.defaultBranch main',
  # build essentials
  "sudo apt update",
  "sudo apt install build-essential -y",
  # NVM Setup
  'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash',
  'source ~/.bashrc',
  'nvm install --lts',
  "source ~/.bashrc",
  # NPM and PNPM installation
  "npm install -g yarn pnpm",
  # Deno Setup
  "sudo apt install unzip",
  "curl -fsSL https://deno.land/x/install/install.sh | sh",
  'echo \'export DENO_INSTALL="/home/ubuntu/.deno"\' >> ~/.bashrc',
  'echo \'export PATH="$DENO_INSTALL/bin:$PATH"\' >> ~/.bashrc',
  "source ~/.bashrc",
  # PHP Setup
  'sudo apt update && apt upgrade -y',
  'sudo add-apt-repository ppa:ondrej/php',
  'sudo apt update',
  'sudo apt install php8.1 -y',
  'sudo apt install -y php8.1-cli php8.1-common php8.1-mysql php8.1-zip php8.1-gd php8.1-mbstring php8.1-curl php8.1-xml php8.1-bcmath',
  # Composer Setup
  'php -r "copy(\'https://getcomposer.org/installer\', \'composer-setup.php\');"',
  'php -r "if (hash_file(\'sha384\', \'composer-setup.php\') === \'55ce33d7678c5a611085589f1f3ddf8b3c52d662cd01d4ba75c0ee0459970c2200a51f492d557530c71c15d8dba01eae\') { echo \'Installer verified\'; } else { echo \'Installer corrupt\'; unlink(\'composer-setup.php\'); } echo PHP_EOL;"',
  'php composer-setup.php',
  'php -r "unlink(\'composer-setup.php\');"',
  'sudo mv composer.phar /usr/local/bin/composer',
  # Docker Setup
  'curl -fsSL https://get.docker.com  | sh',

  # Install Github CLI
  'curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg',
  'echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null',
  'sudo apt update',
  'sudo apt install gh',
  # Setup Heroku CLI
  'curl https://cli-assets.heroku.com/install.sh | sh',
  #  DOcker post script
  'sudo groupadd docker',
  'sudo usermod -aG docker $USER',
]

postScripts = [
'newgrp docker',
]

for cmd in commands:
  print("Running " + cmd)
  os.system(cmd)


print("Installed: nvm, node, docker, php, composer, github cli, heroku cli")

for cmd in postScripts:
  os.system(cmd)

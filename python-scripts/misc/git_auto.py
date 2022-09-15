# simple git workflow
import subprocess
git_http_address = "https://github.com/"
git_username = input("Enter github username: ")
git_repo = input("Enter github repo: ")
git_remote_add_address = git_http_address + git_username + "/" + git_repo + ".git"
subprocess.run(["git", "remote", "add", "origin", git_remote_add_address])
#call git add on all files in directory
subprocess.run(["git", "add", "."], check=True, stdout=subprocess.PIPE)
#get input if commit message
commit_input = input("Enter commit message: ")
full_commit_message = '"' + commit_input + '"'
#call git commit
subprocess.run(["git", "commit", "-m", full_commit_message], check=True, stdout=subprocess.PIPE)
#call git pull
subprocess.run(["git", "pull", "origin", "master"], check=True, stdout=subprocess.PIPE)
#call git pus
subprocess.run(["git", "push", "-u", "origin", "master"], check=True, stdout=subprocess.PIPE)

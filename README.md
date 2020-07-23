Lesson 1
- git init
- git status
- git add
- git commit

Lesson 2 
- git log:  see history commit
- git show: see commit by ID commit
- git diff: see this modified

Lesson 3 Status of GIT
- Working directory
- Staging area
- Respository

Lesson 4
- git restore: discard changes at working directory (file be modified)
- git restore --staged: Moved STAGING AREA down working directory

Lesson 5 Branch/Merge
- Braching
	+ git checkout --b <branch> Create branch
	+ git checkout <branch>	Change branch
	+ git branch -d <branch> Delete branch
	+ git branch Location of branch
-Merging
	A (master)<--- B (Features/dog-class)
	+ git checkout A(master)
	+ git merg B(features/dog-class)

Lesson 6 Cancel Commit
-git reset --
	+ soft <to_commit>: move file was commited from RESPOSITORY down STAGING AREA 
	+ mixed <to_commit>: move file was commited from RESPOSITORY down WORKING DIRECTORY
	+ hard <to_commit>: Delete file was commited

Lesson 7 Revert 
- Back to status before
- git revert (commit)

Lesson 8 .gitignore
-Files be named in this folder willn't commit
- npm chalk: Highlight 

Lesson 9 Github 
- git push: Push commit to Github.
- git push -u origin master

Lesson 10 Credential ( inform login)
- git config --global crendential.helper "cache --timeout=18000"
=> Save credential in 5 hours at RAM 

Lesson 11 
- git clone <https>
- git pull

Lesson 12 pull request
- 1 git checkout -b <feature/horse-class> : Create new branch
- 2 git push origin <feature...>
- 3 create pull request ( Lesson 13)
- 4 review code
+ review code online on github
+ fetch branch into local to test offline ( optinal) (Lesson 14)
+ approve commit
- 5 Merge to master

Lesson 13 resolve conflict 
- changing same file + sameline
- A delete file X, B modified file X

Mothod 1:
- git checkout master
- git pull 
- git checkout features....
1.Use
- git rebase master
2.Resolve conflict
- git add . 
3.Push again with -f
- git push origin features... -f




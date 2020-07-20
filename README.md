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
	A (master)<--- B (Features...)
	+ git checkout A(master)
	+ git merg B(features/dog-class)

Lesson 6 Cancel Commit
-git reset
	+ --soft : move file was commited from RESPOSITORY down STAGING AREA 
	+ --mixed: move file was commited from RESPOSITORY down WORKING DIRECTORY
	+ -- hard: Delete file was commited


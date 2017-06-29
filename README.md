# Multi-Repo Multi-Project: v2
Example of managing a front-end app made up of multiple projects which are distributed across multiple git repos


### npm scripts

See all your environment variables (good reference to discover what might be available for use in your npm scripts)
```
npm run env
```


Test
```
npm run test
```



## Working with git subtrees
We leverage the npm package [git-subtree](https://github.com/photusenigma/git-subtree) for managing our subtrees.  _Note We're actually using a customized version located at my fork until a PR gets merged._
    
To get a list of available commands, simply run the following on the commandline:
```
gitsbt
```

If you have need for more advanced usage, please read instructions in the readme which can be found here - [git-subtree on github](https://github.com/photusenigma/git-subtree).
    
Configuration for this project's git subtrees is located at the project root in the file _subtrees.json_.


## Formatting code is run through 'prettier' on a pre-commit hook
We're using the npm package [prettier](https://github.com/prettier/prettier) to reformat code to match formatting rules as part of a pre-commit hook.  This means the actual committed code may appear formatted differently.  See the readme doc at the linke to prettier above if you wish to have it not auto format on commit and instead throw errors or stop commit for you to review changes first.

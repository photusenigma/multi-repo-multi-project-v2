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
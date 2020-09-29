# Build a CDK pipeline to create VueJS Web Components!

## Prerequisite

1. Install nodejs based on CDK prereqs: https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html#getting_started_prerequisites 
2. Set up a default aws profile: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html 

## Steps to use this deployable solution

1. Clone the Amazon Code Repo : https://code.amazon.com/packages/AWSProserveTool/trees/mainline/--/users/chankin/cdk-vue-artifact
2. Create a github repo for pipeline source step
3. Create Oauth token in github with admin:repo_hook permission using this link: https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token
4. Create Secret in your AWS account using AWS Secrets Manager Console using the github oauth token you created.
    a. Secret name: my-github-token
    b. Secret key: my-github-token
    c. Secret value: <oauth-token-generated>
5. Navigate to cdk directory:
    `cd cdk/`
6. Install the dependencies: 
    `npm install`
7. Build the stack: 
    `npm run build`
8. Optionally run this command if you want to see generated CloudFormation template: 
    `cdk synth`
9. Deploy your cdk stack: 
    `cdk deploy --parameters githubRepoName=<your-github-repo-name> --parameters githubBranch=<your-github-repo-branch> --parameters githubOwner=<your-github-owner-name> --parameters emailNotifications=<your-email-id>`
10. Once the cdk stack is deployed, you will see an output like this with stack ARN:

    ✅  CdkVueArtifactStack

    Stack ARN:
    arn:aws:cloudformation:<region>:<account-id>:stack/CdkVueArtifactStack/<stack-id>
11. Clone the github repo
12. Commit the contents of Amazon code repo to your github repo
13. Navigate to your Pipeline in your AWS Codepipeline to check if it is running and make sure you approve when it reaches approval stage
14. Once it is approved and deployed to S3 bucket, Navigate to Amazon CloudFront console to see the distribution is deployed.
15. Navigate to CloudFront Domain name to test if the app is deployed.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

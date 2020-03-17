using Amazon.Lambda;
using System;
using System.Threading.Tasks;
using Amazon.Lambda.Model;

namespace Ec2shedule
{
    public class Permission
    {
        public async Task<String> SetPermission(AmazonLambdaClient lambda, String rulearn, String rulename)
        {
            //var RemovePermissionRequest = new RemovePermissionRequest
            //{
            //    FunctionName = "Ec2StartStop",
            //    StatementId = rulename
            //};
            try
            {
                var AddPermissionRequest = new AddPermissionRequest
                {
                    Action = "lambda:InvokeFunction",
                    FunctionName = "Ec2StartStop",
                    Principal = "events.amazonaws.com",
                    SourceArn = rulearn,
                    StatementId = rulename
                };
                var AddPermissionResponse = await lambda.AddPermissionAsync(AddPermissionRequest);
                return "sucessfully created permission";
            }
            catch(Exception e)
            {
                return "permission already exists";
            }
        }
    }
}

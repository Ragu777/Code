using System;
using System.Collections.Generic;
using Amazon.Lambda;
using Amazon.Lambda.Core;
using Amazon;
using Amazon.CloudWatchEvents;
using System.Threading.Tasks;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace Ec2shedule
{
    public class Function 
    {
        public async Task<String> FunctionHandler(Model input, ILambdaContext context)
        {
            
                String awsregion = System.Environment.GetEnvironmentVariable("AWS_REGION");
                var region = RegionEndpoint.GetBySystemName(awsregion);
                AmazonCloudWatchEventsClient client = new AmazonCloudWatchEventsClient(region);
                AmazonLambdaClient lambda = new AmazonLambdaClient();

                String state = input.state;
                String instanceid = input.instance;
                String cron = input.cron;
                String rulename = input.rulename;
                Rule r = new Rule();
                String ruleresponse = await r.SetRule(client, rulename, cron);
                Permission p = new Permission();
                String permissionresponse = await p.SetPermission(lambda, ruleresponse, rulename);
                String Inputtarget = "{" + "\"region\":\"" + awsregion + "\"," + "\"instanceid\":\"" + instanceid + "\"," + "\"state\":\"" + state + "\"}";
                Targetlambda t = new Targetlambda();
                String Targetresponse = await t.SetTarget(client, rulename, Inputtarget);
                return "success";

        }
    }
    }


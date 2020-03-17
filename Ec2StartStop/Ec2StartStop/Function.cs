using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Amazon;
using Amazon.EC2;
using Amazon.EC2.Model;
using Amazon.Lambda.Core;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace Ec2StartStop
{
    public class Function
    {
        async Task<String> FunctionHandler(Model input, ILambdaContext context)
        {
            try
            {
                String region = input.region;
                var endpoint = RegionEndpoint.GetBySystemName(region);
                String instanceid = input.instanceid;
                var ec2Client = new AmazonEC2Client(endpoint);
                if (input.state == "ON")
                {
                    StartInstancesRequest start = new StartInstancesRequest();
                    start.InstanceIds.Add(instanceid);
                    await ec2Client.StartInstancesAsync(start);
                    return "Ec2 Started";
                }
                else if (input.state == "OFF")
                {
                    StopInstancesRequest stop = new StopInstancesRequest();
                    stop.InstanceIds.Add(instanceid);
                    await ec2Client.StopInstancesAsync(stop);
                    return "Ec2 Stopped";
                }
            }
            catch (Exception e)
            {
                Console.Out.WriteLine(e.StackTrace);
            }
            return ("done");
        }
    }
}

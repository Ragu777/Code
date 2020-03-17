using System;
using System.Threading.Tasks;
using Amazon.CloudWatchEvents;
using Amazon.CloudWatchEvents.Model;

namespace Ec2shedule
{
    public class Targetlambda
    {
        public async Task<string> SetTarget(AmazonCloudWatchEventsClient client, String rulename, String Inputtarget)
        {
            try
            {
                var putTargetRequest = new PutTargetsRequest
                {
                    Rule = rulename,
                    Targets =
                        {
                            new Target
                            {
                                Arn = "arn:aws:lambda:us-east-2:394451858625:function:Ec2StartStop",
                                Id = "myCloudWatchEventsTarget",
                                Input = Inputtarget
                             }
                         }
                };
                var putTargetsResponse = await client.PutTargetsAsync(putTargetRequest);
                return "successfully created target";
            }
            catch (Exception e)
            {
                throw new Exception("unable to set target");
                            }
        }
    }
}

using Amazon.CloudWatchEvents;
using Amazon.CloudWatchEvents.Model;
using System;
using System.Threading.Tasks;
namespace Ec2shedule
{
    public class Rule
    {
       public async Task<String> SetRule(AmazonCloudWatchEventsClient client, String rulename, String cron)
        {
            try
            {
                var putRuleRequest = new PutRuleRequest
                {
                    Name = rulename,
                    ScheduleExpression = cron,
                    State = RuleState.ENABLED

                };

                var putRuleResponse = await client.PutRuleAsync(putRuleRequest);
                String result = putRuleResponse.RuleArn;
                return result;
            }
            catch (Exception e)
            {
                throw new Exception ("unable to set rule");
               
                    }
        }
}
}

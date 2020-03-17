using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Amazon.Lambda.Core;
using Amazon.EC2;
using System.Collections;
using Newtonsoft.Json;
// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.Json.JsonSerializer))]

namespace Ec2instances
{
    public class Function
    {
        
        /// <summary>
        /// A simple function that takes a string and does a ToUpper
        /// </summary>
        /// <param name="input"></param>
        /// <param name="context"></param>
        /// <returns></returns>
        public async Task<String> FunctionHandler(object input ,ILambdaContext context)
        {
            AmazonEC2Client ec2 = new AmazonEC2Client();
          var Ec2ListResponse =  await ec2.DescribeInstancesAsync();
            List<String> instance = new List<String>();
            int count = Ec2ListResponse.Reservations.Count;
            count--;
            while (count >= 0)
            {
                foreach (var instanceids in Ec2ListResponse.Reservations[count].Instances)
                {
                    instance.Add(instanceids.InstanceId);
                }
                count--;
            }
            Console.Out.WriteLine(instance);
            var instances = new { instances = instance };

            var instanceid = JsonConvert.SerializeObject(instances);
          
            return instanceid;
        }
    }
}

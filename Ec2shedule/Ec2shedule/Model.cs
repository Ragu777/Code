using System;
using System.Collections.Generic;
using System.Text;

namespace Ec2shedule
{
    //public enum State { NULL, ON, OFF }
    public class Model
    {
        public String instance { get; set; }
        
        //private State value;

        //public State GetState
        //{

        //    get { return value; }
        //}
        public String rulename { get; set; }

        
        public String state { get; set; }

        public String cron { get; set; }

    }
}

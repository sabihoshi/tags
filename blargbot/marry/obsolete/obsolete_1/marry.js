b!t edit marry {exec;marset1}{if;==;{argslength};
    0;{get;@marerm};
    {switch;{lower;{args;0}};
        help;{get;@marerm};
        status;{exec;Status;{args;1;n}};
        propose;{exec;propose;{args;1}};
        marry;{exec;answer;{args;1}};
        accept;{exec;answer;accept};
        yes;{exec;answer;accept};
        deny;{exec;answer;cancel};
        cancel;{exec;answer;cancel};
        no;{exec;answer;cancel};
        divorce;{exec;divorce;{lower;{args;1}}};
        {get;@marerm1}
    }
}
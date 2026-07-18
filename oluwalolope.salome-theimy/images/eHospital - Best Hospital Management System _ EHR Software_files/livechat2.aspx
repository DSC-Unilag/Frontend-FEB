

   	// livechat by www.mylivechat.com/

   	


	   MyLiveChat.Version =3006;
	   MyLiveChat.FirstRequestTimeout =10800;
		  MyLiveChat.NextRequestTimeout =21600;
		  MyLiveChat.SyncType ="VISIT";
		  MyLiveChat.SyncStatus ="READY";
		  MyLiveChat.SyncUserName ="Guest_1d90ffa7";
		  MyLiveChat.SyncResult =null;
		  MyLiveChat.HasReadyAgents =false;
		  MyLiveChat.SourceUrl ="https://www.adroitinfosystems.com/products/ehospital-systems";
		  MyLiveChat.AgentTimeZone = parseInt("6" || "-5");
		  MyLiveChat.VisitorStatus ="VISIT";
		  MyLiveChat.UrlBase ="https://s9.mylivechat.com/livechat2/";
		  MyLiveChat.SiteUrl ="https://s9.mylivechat.com/";

   	

		  if (!MyLiveChat.AgentId) MyLiveChat.AgentId = MyLiveChat.RawAgentId;

		  MyLiveChat.Departments = [];

		  MyLiveChat.Departments.push({
			  Name:"Sales",
			  Agents: [{
					Id:'User:1',
					Name:"Sanjay",
					Online:false
   			},{
					Id:'User:11',
					Name:"Alex",
					Online:false
   			}],
				Online:false
   		});

		  MyLiveChat.Departments.push({
			  Name:"Support",
			  Agents: [{
					Id:'User:1',
					Name:"Sanjay",
					Online:false
   			},{
					Id:'User:11',
					Name:"Alex",
					Online:false
   			}],
				Online:false
   		});



		  MyLiveChat.VisitorUrls = [];



   	


		  MyLiveChat.VisitorLocation ="NG|Nigeria|05|Lagos|Lagos";
		  MyLiveChat.LastLoadTime = new Date().getTime();
		  MyLiveChat.VisitorDuration =0;
		  MyLiveChat.VisitorEntryUrl ="https://www.adroitinfosystems.com/products/ehospital-systems";
		  MyLiveChat.VisitorReferUrl =null;

		  MyLiveChat.VisitorUrls = [];



   	
		  MyLiveChat.VisitorUrls.push("https://www.adroitinfosystems.com/products/ehospital-systems");
   	

		  MyLiveChat_Initialize();

		  if (MyLiveChat.localStorage || MyLiveChat.userDataBehavior) {
			  MyLiveChat_SyncToCPR();
		  }

   	